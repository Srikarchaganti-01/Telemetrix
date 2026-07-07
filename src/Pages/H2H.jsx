import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../services/dataService";
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

const teamColors = {
  Mercedes: "#1bc5aa",
  Ferrari: "#b00022",
  McLaren: "#cc6700",
  RedBull: "#295594",
  Alpine: "#0081ba",
  RacingBulls: "#3e6ee6",
  Haas: "#aab1b3",
  Williams: "#124c9e",
  Audi: "#c82400",
  AstonMartin: "#1b7758",
  Cadillac: "#8a8a8c",
  RUS: "#1bc5aa",
  ANT: "#1bc5aa",
  LEC: "#b00022",
  HAM: "#b00022",
  PIA: "#cc6700",
  NOR: "#cc6700",
  VER: "#295594",
  HAD: "#295594",
  GAS: "#0081ba",
  COL: "#0081ba",
  LAW: "#3e6ee6",
  LIN: "#3e6ee6",
  OCO: "#aab1b3",
  BEA: "#aab1b3",
  SAI: "#124c9e",
  ALB: "#124c9e",
  HUL: "#c82400",
  BOR: "#c82400",
  ALO: "#1b7758",
  STR: "#1b7758",
  PER: "#8a8a8c",
  BOT: "#8a8a8c",
};

function H2H() {
  const [driver1No, setDriver1No] = useState("");
  const [driver2No, setDriver2No] = useState("");
  const [drivers, setDrivers] = useState([]);
  const [selectedDrivers, setSelectedDrivers] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getData("drivers");
      setDrivers(data);
    }
    fetchData();
  }, []);
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
  console.log(selectedDrivers);

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
          selectedDrivers.driver1.Spts,
          selectedDrivers.driver1.Spodiums,
          selectedDrivers.driver1.Swins,
          selectedDrivers.driver1.Cwins,
          selectedDrivers.driver1.Cpod,
          selectedDrivers.driver1.Cpole,
          selectedDrivers.driver1.Ctitles,
          selectedDrivers.driver1.Cdnf,
        ],
        borderColor: teamColors[selectedDrivers.driver1.shortName],
        backgroundColor: teamColors[selectedDrivers.driver1.shortName],
        tension: 0,
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 3,
      },

      {
        label: selectedDrivers.driver2.name,
        data: [
          selectedDrivers.driver2.nil,
          selectedDrivers.driver2.Spts,
          selectedDrivers.driver2.Spodiums,
          selectedDrivers.driver2.Swins,
          selectedDrivers.driver2.Cwins,
          selectedDrivers.driver2.Cpod,
          selectedDrivers.driver2.Cpole,
          selectedDrivers.driver2.Ctitles,
          selectedDrivers.driver2.Cdnf,
        ],
        borderColor: teamColors[selectedDrivers.driver2.shortName],
        backgroundColor: teamColors[selectedDrivers.driver2.shortName],
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

        <div className="flex justify-end w-full mb-12 pr-20">
          <div className="flex flex-col items-end w-1/2">
            <div className="flex gap-5 justify-end items-center">
              <input
                type="number"
                placeholder="Driver : 1"
                value={driver1No}
                onChange={(e) => setDriver1No(e.target.value)}
                className="w-26 ring-5 ring-gray-600/30 rounded-xl p-4 text-sm outline-none focus:outline-none focus:ring-5 focus:ring-[#030112]"
              />

              <input
                type="number"
                placeholder="Driver : 2"
                value={driver2No}
                onChange={(e) => setDriver2No(e.target.value)}
                className="w-26 ring-5 ring-gray-600/30 rounded-xl p-4 text-sm outline-none focus:outline-none focus:ring-5 focus:ring-[#030112]"
              />

              <button
                onClick={handleSubmit}
                className="bg-red-950 px-8 w-30 h-15 rounded-xl flex items-center justify-center text-gray-300 hover:bg-red-900"
              >
                H2H
              </button>
            </div>

            <p className="mt-2 text-xs italic text-gray-500">
              Enter the driver numbers to compare their Head-to-Head Statistics.
            </p>
          </div>
        </div>

        {selectedDrivers && (
          <>
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-between gap-8 w-8/10">
                <DriverCard driver={selectedDrivers.driver1} />

                <div className="text-4xl font-black">VS</div>

                <DriverCard driver={selectedDrivers.driver2} />
              </div>
            </div>

            <div className="mt-15 rounded-3xl p-8 w-full flex flex-col justify-center items-center ">
              <div className=" w-8/10 mb-15 flex justify-start text-5xl items-center text-gray-400">
                Statistics graph
              </div>
              <div className="w-4/5">
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
        borderTop: `5px solid ${teamColors[driver.shortName] || "#ffffff"}`,
      }}
    >
      <img
        src={driver.ban}
        alt={driver.name}
        className="w-full h-60 object-cover object-top rounded-3xl"
      />
      <div className="flex gap-3 items-center mt-5">
        <div className="text-3xl">#{driver.number}</div>
        <h1 className="text-2xl font-bold">{driver.name}</h1>
      </div>
      <div>{driver.team}</div>

      <div className="mt-4 text-4xl">Career Points : {driver.Cpts} </div>
      <div>
        <div className="flex my-5 text-gray-300 text-2xl flex-col">
          <span>Season Position : {driver.Spos}</span>
          <span>Season points : {driver.Spts}</span>
        </div>
        <div className="flex gap-1.5 text-gray-400 text-xl flex-col">
          <span>Season GP Races : {driver.Sgp}</span>
          <span>Season GP points : {driver.Sgppts}</span>
          <span>Season Wins : {driver.Swins}</span>
          <span>Season Podiums : {driver.Spodiums}</span>
          <span>Season DNF's : {driver.Sdnf}</span>
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-baseline font-bold">
        <span className="text-xl text-gray-400 mb-3 font-extralight">
          Total Races : {driver.Cgp}
        </span>
        <span className="text-xl text-gray-400 mb-3 font-extralight">
          Total Points : {driver.Cpts}
        </span>
        <span className="text-xl text-gray-400 mb-3 font-extralight">
          Race Wins : {driver.Cwins}
        </span>
        <span className="text-xl text-gray-400 mb-3 font-extralight">
          Podiums : {driver.Cpod}
        </span>
        <span className="text-xl text-gray-400 mb-3 font-extralight">
          Pole Positions : {driver.Cpole}
        </span>
        <span className="text-xl text-gray-400 mb-3 font-extralight">
          World Championships : {driver.Ctitles}
        </span>
        <span className="text-xl text-gray-400 mb-3 font-extralight">
          DNF's : {driver.Cdnf}
        </span>
      </div>
    </div>
  );
}

export default H2H;
