import React from "react";
import { Link } from "react-router-dom";
function DriverCard({ driver }) {
  return (
    <div
      className="relative h-50 w-full rounded-3xl overflow-hidden px-8 py-6 flex items-center justify-between "
      style={{
        background: `linear-gradient(135deg, ${driver.teamColor} 0%, #0f172a 100%)`,
      }}
    >
      <div className="z-10 flex flex-col gap-2">
        <h1 className="text-gray-200 text-3xl font-bold leading-none">
          <Link key={driver.id} to={`/driver/${driver.id}`}>
            {driver.name}
          </Link>
        </h1>
        <p className="text-gray-300 text-xl font-bold">{driver.team}</p>
        <h2 className="text-white text-5xl italic font-extrabold mt-5">
          {driver.number}
        </h2>
      </div>

      <div className="h-full z-10">
        <img
          src={driver.img}
          alt={driver.name}
          className="w-45 h-45 rounded-3xl object-cover object-top mb-3"
        />
      </div>
    </div>
  );
}

export default DriverCard;
