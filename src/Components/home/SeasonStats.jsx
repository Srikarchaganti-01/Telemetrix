import { useState } from "react";

import OptionSlider from "../selector/OptionSlider";
import chartData from "../../data/chartData";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function SeasonStats() {
  const [selected, setSelected] = useState("Drivers");
  const options = ["Drivers", "Teams"];
  const currentData = [
    ...(selected === "Drivers" ? chartData.drivers : chartData.teams),
  ].sort((a, b) => b.wins - a.wins);
  const data = {
    labels: currentData.map((item) => item.name),
    datasets: [
      {
        label: "Wins",
        data: currentData.map((item) => item.wins),
        backgroundColor: "#7f1d1d",
        borderRadius: 10,
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
          color: "white",
        },
      },

      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="bg-[#15151e] p-6 rounded-xl max-h-150 mb-30">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-orbitron text-xl">Season Stats</h1>
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
