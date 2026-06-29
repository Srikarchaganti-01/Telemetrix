import React from "react";
import { Link } from "react-router-dom";
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
function DriverCard({ driver }) {
  return (
    <div
      className="relative h-50 w-full rounded-3xl overflow-hidden px-8 py-6 flex items-center justify-between "
      style={{
        background: `linear-gradient(135deg, ${teamColors[driver.shortName]} 0%, #0f172a 100%)`,
      }}
    >
      <div className="z-10 flex flex-col gap-2">
        <h1 className="text-gray-200 text-3xl font-bold leading-none">
          <Link to={`/driver/${driver.shortName}`}> {driver.name} </Link>
        </h1>
        <p className="text-gray-300 text-xl font-bold">{driver.team}</p>
        <h2 className="text-white text-5xl italic font-extrabold mt-5">
          {driver.number}
        </h2>
      </div>

      <div className="h-full z-10">
        <img
          src={driver.logo}
          alt={driver.name}
          className="w-45 h-45 rounded-3xl object-cover object-top mb-3"
        />
      </div>
    </div>
  );
}

export default DriverCard;
