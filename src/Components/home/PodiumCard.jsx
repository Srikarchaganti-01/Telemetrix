import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../services/dataService";
import { getDriver } from "../../services/driverService";

function PodiumCard() {
  const [podium, setPodium] = useState(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        const sessionData = await getData("session_results");
        const scheduleData = await getData("schedule");

        // latest completed race
        const latestRace = scheduleData
          .filter((race) => race.status === true)
          .at(-1);

        if (!latestRace) return;

        // top 3 race finishers from latest round
        const topThree = sessionData
          .filter(
            (result) =>
              result.format === "race" && result.round === latestRace.round,
          )
          .sort((a, b) => a.position - b.position)
          .slice(0, 3);

        // get driver details
        const positions = await Promise.all(
          topThree.map(async (driver) => {
            const driverData = await getDriver(driver.driver_id);

            return {
              id: driverData.shortName,
              name: driverData.name,
              image: driverData.logo,
              team: driverData.team,
            };
          }),
        );

        // structure matches your existing JSX
        setPodium({
          raceid: latestRace.roundNo,
          country: latestRace.country,
          circuit: latestRace.circuitName,
          duration: latestRace.duration,
          positions,
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchResults();
  }, []);

  if (!podium) return <div>Loading...</div>;
  console.log(podium);
  return (
    <div className="bg-[#15151e] text-gray-400 rounded-xl p-6 ml-20 mr-20">
      <h1 className="font-orbitron text-red-900 text-4xl mb-6 italic font-semibold">
        Latest Podium Finish
      </h1>

      <div className="flex justify-between m-5 gap-3 h-full">
        <div className="w-1/3 min-h-full flex flex-col items-start p-10">
          <h1 className="text-4xl text-red-900 font-medium italic">
            Round no : {podium.raceid}
          </h1>

          <h1 className="text-3xl">Country : {podium.country}</h1>

          <h1 className="text-xl">Circuit Name : {podium.circuit}</h1>
          <h1>Duration : {podium.duration}</h1>
        </div>

        <div className="w-2/3 min-h-full flex justify-center p-10 items-center gap-10">
          {podium.positions.map((driver) => (
            <div
              key={driver.place}
              className={`flex flex-col items-center rounded-lg p-4`}
            >
              <img
                src={driver.image}
                alt={driver.name}
                className="w-25 h-25 rounded-full object-cover object-top mb-3"
              />

              <h2 className="font-semibold text-center">
                <Link to={`/driver/${driver.id}`}>{driver.name}</Link>
              </h2>

              <p className="text-sm">{driver.team}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PodiumCard;
