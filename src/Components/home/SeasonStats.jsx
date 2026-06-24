import { useState } from "react";
import OptionSlider from "../selector/OptionSlider";
import chartData from "../../data/chartData";
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
  const options = ["Drivers", "Teams"];
  const currentData = [
    ...(selected === "Drivers" ? chartData.drivers : chartData.teams),
  ].sort((a, b) => b.wins - a.wins);
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
    labels: currentData.map((item) => item.name),
    datasets: [
      {
        label: "Wins",
        data: currentData.map((item) => item.wins),
        backgroundColor: currentData.map(
          (item) => teamColors[item.name] || "#000000",
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
    <div className="bg-[#15151e] p-6 rounded-xl max-h-150 mb-30">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-orbitron text-6xl">Season Stats</h1>
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
