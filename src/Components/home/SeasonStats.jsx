import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../../services/dataService";
import OptionSlider from "../selector/OptionSlider";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function SeasonStats() {
  const [selected, setSelected] = useState("Drivers");
  const [constructorStandings, setConstructorStandings] = useState([]);
  const [driverStandings, setDriverStandings] = useState([]);
  const options = ["Drivers", "Teams"];
  useEffect(() => {
    async function fetchData() {
      const teams = await getData("teams");
      const drivers = await getData("drivers");
      const sortedTeams = [...teams].sort(
        (a, b) => Number(b.Spts) - Number(a.Spts),
      );
      const sortedDrivers = [...drivers].sort(
        (a, b) => Number(a.Spos) - Number(b.Spos),
      );
      setConstructorStandings(sortedTeams);
      setDriverStandings(sortedDrivers);
    }
    fetchData();
  }, []);

  const currentData =
    selected === "Drivers" ? driverStandings : constructorStandings;
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
  const data = {
    labels: currentData.map((item) => item.shortName),
    datasets: [
      {
        label: "Season Points",
        data: currentData.map((item) => item.Spts),
        backgroundColor: currentData.map(
          (item) => teamColors[item.shortName] || "#000000",
        ),
        borderRadius: 5,
      },
    ],
  };

  const optionsChart = {
    indexAxis: "y",

    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        ticks: {
          color: "gray",
        },
      },

      y: {
        ticks: {
          color: "gray",
        },
      },
    },
  };

  return (
    <div className="bg-[#15151e] p-4 md:p-6 rounded-xl mb-20 mx-4 md:mx-10 lg:mx-20">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <h1 className="font-orbitron text-3xl md:text-4xl lg:text-6xl">
          Season Stats
        </h1>
        <OptionSlider
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <Bar data={data} options={optionsChart} />
    </div>
  );
}

export default SeasonStats;
