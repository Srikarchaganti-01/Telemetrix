import React, { useState } from "react";
import { databases } from "../../lib/appwrite";
import { Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const SCHEDULE_COLLECTION = "schedule";
const DRIVERS_COLLECTION = "drivers";
const TEAMS_COLLECTION = "teams";

function ResultsForm() {
  const [roundNo, setRoundNo] = useState("");
  const [results, setResults] = useState(
    Array.from({ length: 22 }, (_, i) => ({
      position: i + 1,
      driverId: "",
      lapTime: "",
      points: "",
    })),
  );

  const handleChange = (index, field, value) => {
    const updated = [...results];
    updated[index][field] = value;
    setResults(updated);
  };

  // Schedule update function
  const updateSchedule = async (roundNo, results) => {
    try {
      console.log("===== SCHEDULE UPDATE =====");
      console.log({ roundNo, results });

      // Get schedule for current round
      const scheduleResponse = await databases.listDocuments(
        DATABASE_ID,
        SCHEDULE_COLLECTION,
        [Query.equal("roundNo", Number(roundNo))],
      );

      if (!scheduleResponse.documents.length) {
        console.log("Schedule not found");
        return;
      }

      const scheduleDoc = scheduleResponse.documents[0];

      // Fetch all drivers
      const driverResponse = await databases.listDocuments(
        DATABASE_ID,
        DRIVERS_COLLECTION,
      );

      const drivers = driverResponse.documents;

      // Create quick lookup map
      const driverMap = {};

      drivers.forEach((driver) => {
        driverMap[driver.shortName] = driver;
      });

      // Get podium positions
      const p1Driver = driverMap[results[0]?.driverId];
      const p2Driver = driverMap[results[1]?.driverId];
      const p3Driver = driverMap[results[2]?.driverId];

      const updateData = {
        status: true,
        p1: p1Driver?.shortName || "",
        p2: p2Driver?.shortName || "",
        p3: p3Driver?.shortName || "",
      };

      console.log("Schedule update data:");
      console.log(updateData);

      await databases.updateDocument(
        DATABASE_ID,
        SCHEDULE_COLLECTION,
        scheduleDoc.$id,
        updateData,
      );

      console.log("Schedule updated successfully");
    } catch (error) {
      console.log("Schedule update error:", error);
    }
  };

  // Driver update function

  const updateDrivers = async (roundNo, results) => {
    try {
      console.log("===== DRIVER UPDATE =====");
      console.log({ roundNo, results });

      // Fetch all drivers
      const driverResponse = await databases.listDocuments(
        DATABASE_ID,
        DRIVERS_COLLECTION,
      );

      const drivers = driverResponse.documents;

      // shortName -> driver map
      const driverMap = {};

      drivers.forEach((driver) => {
        driverMap[driver.shortName] = driver;
      });

      // Process each submitted result
      for (const r of results) {
        const driver = driverMap[r.driverId];

        if (!driver) {
          console.log(`Driver not found: ${r.driverId}`);
          continue;
        }

        const points = Number(r.points);
        const position = Number(r.position);
        const isDNF = r.lapTime.trim().toUpperCase() === "DNF";

        const updateData = {
          // Points
          Spts: (driver.Spts || 0) + points,
          Sgppts: (driver.Sgppts || 0) + points,
          Cpts: (driver.Cpts || 0) + points,

          // Existing values by default
          Sgp: driver.Sgp || 0,
          Cgp: driver.Cgp || 0,
          Sdnf: driver.Sdnf || 0,
          Cdnf: driver.Cdnf || 0,
          Spodiums: driver.Spodiums || 0,
          Cpod: driver.Cpod || 0,
          Swins: driver.Swins || 0,
          Cwins: driver.Cwins || 0,
        };

        // GP / DNF logic
        if (isDNF) {
          updateData.Sdnf += 1;
          updateData.Cdnf += 1;
        }
        if (1) {
          updateData.Sgp += 1;
          updateData.Cgp += 1;
        }

        // Podium logic
        if (position <= 3) {
          updateData.Spodiums += 1;
          updateData.Cpod += 1;
        }

        // Win logic
        if (position === 1) {
          updateData.Swins += 1;
          updateData.Cwins += 1;
        }

        console.log(`Updating ${driver.shortName}:`, updateData);

        await databases.updateDocument(
          DATABASE_ID,
          DRIVERS_COLLECTION,
          driver.$id,
          updateData,
        );
      }
      // Fetch updated drivers again for standings calculation
      const refreshedDrivers = await databases.listDocuments(
        DATABASE_ID,
        DRIVERS_COLLECTION,
      );

      // Sort by season points descending
      const sortedDrivers = [...refreshedDrivers.documents].sort(
        (a, b) => b.Spts - a.Spts,
      );

      // Assign championship positions
      for (let i = 0; i < sortedDrivers.length; i++) {
        const driver = sortedDrivers[i];

        await databases.updateDocument(
          DATABASE_ID,
          DRIVERS_COLLECTION,
          driver.$id,
          {
            Spos: i + 1,
          },
        );

        console.log(`${driver.shortName} → Spos: ${i + 1}`);
      }
      console.log("DRIVER UPDATE COMPLETE");
    } catch (error) {
      console.log("Driver update error:", error);
    }
  };

  // Team update function
  const updateTeams = async (roundNo, results) => {
    try {
      console.log("===== TEAM UPDATE =====");
      console.log({ roundNo, results });

      // Fetch teams
      const teamResponse = await databases.listDocuments(
        DATABASE_ID,
        TEAMS_COLLECTION,
      );

      const teams = teamResponse.documents;

      // Build driver → team map
      const teamMap = {};

      teams.forEach((team) => {
        if (team.sd1) teamMap[team.sd1] = team;
        if (team.sd2) teamMap[team.sd2] = team;
      });

      // Track updates per team
      const updates = {};

      const isPodium = (pos) => pos >= 1 && pos <= 3;

      results.forEach((r) => {
        const driverId = r.driverId;
        const points = Number(r.points);

        const team = teamMap[driverId];
        if (!team) return;

        const teamId = team.$id;

        if (!updates[teamId]) {
          updates[teamId] = {
            Spts: team.Spts || 0,
            Swins: team.Swins || 0,
            Spodiums: team.Spodiums || 0,
            _winsThisRace: 0,
            _podiumsThisRace: 0,
          };
        }

        // add points
        updates[teamId].Spts += points;

        // win logic
        if (r.position === 1) {
          updates[teamId]._winsThisRace += 1;
        }

        // podium logic
        if (isPodium(r.position)) {
          updates[teamId]._podiumsThisRace += 1;
        }
      });

      // apply limits (max 2 per race)
      Object.values(updates).forEach((t) => {
        t.Swins += Math.min(t._winsThisRace, 2);
        t.Spodiums += Math.min(t._podiumsThisRace, 2);
      });

      // remove temp fields and update DB
      for (const teamId in updates) {
        const { _winsThisRace, _podiumsThisRace, ...cleanData } =
          updates[teamId];

        console.log("Updating team:", teamId, cleanData);

        await databases.updateDocument(
          DATABASE_ID,
          TEAMS_COLLECTION,
          teamId,
          cleanData,
        );
      }

      console.log("TEAM UPDATE COMPLETE");
    } catch (error) {
      console.log("Team update error:", error);
    }
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      roundNo,
      results,
    };

    console.log("===== HANDLE SUBMIT =====");
    console.log(formData);

    await updateDrivers(roundNo, results);
    await updateTeams(roundNo, results);
    await updateSchedule(roundNo, results);
  };

  return (
    <div className="flex m-5 justify-center ">
      <div className="w-full bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-bold text-gray-400 mb-6">
          Update Race Results
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 mb-3  font-semibold text-zinc-400 px-10">
            <div>Position</div>
            <div>Driver ID</div>
            <div>Lap Time</div>
            <div>Points</div>
          </div>

          {/* Rows */}
          <div className="space-y-3 max-h-125 overflow-y-auto p-5">
            {results.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4">
                {/* Position */}
                <div>
                  <input
                    type="text"
                    value={`P${row.position}`}
                    disabled
                    className="w-full bg-zinc-800 text-gray-400 px-3 py-2 rounded-lg border border-zinc-700 opacity-80"
                  />
                </div>

                {/* Driver ID */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="driver_id"
                    value={row.driverId}
                    onChange={(e) =>
                      handleChange(index, "driverId", e.target.value)
                    }
                    className="w-full bg-zinc-800 text-gray-400 px-3 py-2 rounded-lg border border-zinc-700 outline-none focus:border-gray-500"
                  />
                </div>

                {/* Lap Time */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="-- : --"
                    value={row.lapTime}
                    onChange={(e) =>
                      handleChange(index, "lapTime", e.target.value)
                    }
                    className="w-full bg-zinc-800 text-gray-400 px-3 py-2 rounded-lg border border-zinc-700 outline-none focus:border-gray-500"
                  />
                </div>

                {/* Points */}
                <div>
                  <input
                    type="number"
                    required
                    placeholder="-"
                    value={row.points}
                    onChange={(e) =>
                      handleChange(index, "points", e.target.value)
                    }
                    className="w-full bg-zinc-800 text-gray-400 px-3 py-2 rounded-lg border border-zinc-700 outline-none focus:border-gray-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between mt-6 w-fit gap-10">
            <div className="flex items-center gap-3">
              <label className="text-zinc-400 font-medium">Round No</label>

              <input
                type="number"
                required
                value={roundNo}
                onChange={(e) => setRoundNo(e.target.value)}
                placeholder="-"
                className="w-28 bg-zinc-800 text-gray-400 px-3 py-2 rounded-lg border border-zinc-700 outline-none focus:border-gray-500"
              />
            </div>

            <button
              type="submit"
              className="bg-red-950 hover:bg-red-900 px-6 py-2 rounded-lg text-gray-400 font-medium transition"
            >
              Update Results
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResultsForm;
