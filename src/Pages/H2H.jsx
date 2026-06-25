import React, { useState } from "react";
import drivers from "../Data/profileData";
import { Navbar, Footer } from "../Components";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

function H2H() {
  const [driver1No, setDriver1No] = useState("");
  const [driver2No, setDriver2No] = useState("");

  const [selectedDrivers, setSelectedDrivers] = useState(null);

  const handleSubmit = () => {
    const driver1 = drivers.find(
      (driver) => driver.number === Number(driver1No),
    );

    const driver2 = drivers.find(
      (driver) => driver.number === Number(driver2No),
    );

    if (!driver1 || !driver2) {
      alert("Driver not found");
      return;
    }

    setSelectedDrivers({
      driver1,
      driver2,
    });
  };

  const chartData = selectedDrivers && {
    labels: [
      "",
      "Season Points",
      "Season Podiums",
      "Season wins",
      "Wins",
      "Podiums",
      "Poles",
      "Titles",
      "DNF",
      "Fastest Laps",
    ],

    datasets: [
      {
        label: selectedDrivers.driver1.name,
        data: [
          selectedDrivers.driver1.nil,
          selectedDrivers.driver1.spts,
          selectedDrivers.driver1.sgpPodiums,
          selectedDrivers.driver1.sgpWins,
          selectedDrivers.driver1.Cwins,
          selectedDrivers.driver1.Cpod,
          selectedDrivers.driver1.Cpol,
          selectedDrivers.driver1.titles,
          selectedDrivers.driver1.CDNF,
          selectedDrivers.driver1.DHLF,
        ],
        borderColor: selectedDrivers.driver1.teamColor,
        backgroundColor: selectedDrivers.driver1.teamColor,
        tension: 0,
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 3,
      },

      {
        label: selectedDrivers.driver2.name,
        data: [
          selectedDrivers.driver2.nil,
          selectedDrivers.driver2.spts,
          selectedDrivers.driver2.sgpPodiums,
          selectedDrivers.driver2.sgpWins,
          selectedDrivers.driver2.Cwins,
          selectedDrivers.driver2.Cpod,
          selectedDrivers.driver2.Cpol,
          selectedDrivers.driver2.titles,
          selectedDrivers.driver2.CDNF,
          selectedDrivers.driver2.DHLF,
        ],
        borderColor: selectedDrivers.driver2.teamColor,
        backgroundColor: selectedDrivers.driver2.teamColor,
        tension: 0,
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 3,
      },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="">
        <div className="text-4xl ml-10 mb-5 ">
          2026 FIA Formula One World Championship™
        </div>
        <div className="text-3xl ml-10 italic text-red-900">
          Head 2 Head Statistics
          <span className="italic font-black">{"( H2H )"}</span>
        </div>
        <div className="text-sm ml-10 mb-5 mt-5 w-2/5">
          <span className="text-2xl text-red-950">Description : </span>
          Compare two F1 drivers head-to-head and see who leads across key stats
          and performance data.
        </div>
        {/* Inputs */}

        <div className="flex justify-end w-full mb-12 pr-20">
          <div className="flex gap-5 w-1/2 justify-end items-center">
            <input
              type="number"
              placeholder="Driver : 1"
              value={driver1No}
              onChange={(e) => setDriver1No(e.target.value)}
              className="w-26 ring-5 ring-gray-600/30 rounded-xl p-4  text-sm outline-none focus:outline-none focus:ring-5 focus:ring-[#030112]"
            />

            <input
              type="number"
              placeholder="Driver : 2"
              value={driver2No}
              onChange={(e) => setDriver2No(e.target.value)}
              className="w-26 ring-5 ring-gray-600/30 rounded-xl p-4 text-sm  outline-none focus:outline-none focus:ring-5 focus:ring-[#030112]"
            />

            <button
              onClick={handleSubmit}
              className="bg-red-950 px-8 w-30 h-15 rounded-xl flex items-center justify-center text-gray-300 hover:bg-red-900"
            >
              H2H
            </button>
          </div>
        </div>

        {selectedDrivers && (
          <>
            {/* Driver Cards */}

            <div className="flex justify-center items-center">
              <div className="flex items-center justify-between gap-8 w-8/10">
                <DriverCard driver={selectedDrivers.driver1} />

                <div className="text-4xl font-black">VS</div>

                <DriverCard driver={selectedDrivers.driver2} />
              </div>
            </div>

            {/* Graph */}

            <div className="mt-15 rounded-3xl p-8 w-full h-8/10 flex justify-center items-center ">
              <div className="w-8/10">
                <Line
                  data={chartData}
                  options={{
                    responsive: true,

                    plugins: {
                      legend: {
                        display: false,
                      },
                    },

                    scales: {
                      x: {
                        ticks: {
                          color: "white",
                        },
                      },

                      y: {
                        ticks: {
                          color: "white",
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

function DriverCard({ driver }) {
  return (
    <div
      className="w-[40%] rounded-3xl p-6"
      style={{
        borderTop: `5px solid ${driver.teamColor}`,
      }}
    >
      <img
        src={driver.image}
        alt={driver.name}
        className="w-full h-60 object-cover object-top rounded-3xl"
      />
      <div className="flex gap-3 items-center mt-5">
        <div className="text-3xl">#{driver.number}</div>
        <h1 className="text-2xl font-bold">{driver.name}</h1>
      </div>
      <div>{driver.team}</div>

      <div className="mt-4">Career Points : {driver.point} </div>
    </div>
  );
}

export default H2H;
