import React from "react";
import drivers from "../../Data/profileData";
import { Link } from "react-router-dom";
const driverMap = Object.fromEntries(
  drivers.map((driver) => [driver.id, driver]),
);
function ResultsTable({ result }) {
  const driver = driverMap[result.id];
  if (!driver) return null;
  return (
    <div className="w-full h-20 rounded-xl  flex items-center px-5 justify-between text-gray-400">
      <div className="w-10 text-xl ">{result.pos}</div>
      <div className="flex items-center gap-4 flex-1">
        <img
          src={driver.img}
          alt={driver.name}
          className="w-14 h-14 object-cover object-top rounded-full"
        />

        <div>
          <h1>
            <Link key={driver.id} to={`/driver/${driver.id}`}>
              # {driver.number} : {driver.name}
            </Link>
          </h1>
          <p>{driver.team}</p>
        </div>
      </div>
      <div className="flex gap-10">
        <span>{result.lapTime}</span>

        {result.pts && <span>{result.pts} pts</span>}
      </div>
    </div>
  );
}

export default ResultsTable;
