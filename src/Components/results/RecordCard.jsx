import React from "react";
import drivers from "../../Data/profileData";
import { Link } from "react-router-dom";
const driverMap = Object.fromEntries(
  drivers.map((driver) => [driver.id, driver]),
);

function RecordCard({ record }) {
  const driver = driverMap[record.id];
  return (
    <div className="w-full">
      <div
        className="w-full h-100 flex flex-col items-start
      justify-evenly rounded-4xl ring-5 ring-gray-600/30 p-5"
      >
        <div className="w-full flex justify-center items-center h-7/10  rounded-3xl">
          <img
            src={driver.image}
            alt={driver.name}
            className="w-full h-full object-cover object-top rounded-xl "
          />
        </div>

        <div className="flex flex-col items-start h-2/5 justify-between w-full p-5">
          <span className="text-2xl italic font-black">{record.type}</span>

          <span className="text-xl">{driver.name}</span>

          <span className="text-xl">
            {record.prop}: {record.rec}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecordCard;
