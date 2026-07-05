import React, { useEffect, useState } from "react";
import { getDriver } from "../../services/driverService";
import { Link } from "react-router-dom";

function RecordCard({ record }) {
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    async function fetchDriver() {
      const data = await getDriver(record.driver_id);
      setDriver(data);
    }

    fetchDriver();
  }, [record.driver_id]);
  if (!driver) return <div>Loading...</div>;
  // console.log(record);
  // console.log(driver);
  return (
    <div className="w-full">
      <div
        className="w-full h-100 flex flex-col items-start
      justify-evenly rounded-4xl ring-5 ring-gray-600/30 p-5"
      >
        <div className="w-full flex justify-center items-center h-7/10  rounded-3xl">
          <img
            src={driver.ban}
            alt={driver.name}
            className="w-full h-full object-cover object-top rounded-xl "
          />
        </div>

        <div className="flex flex-col items-start h-2/5 justify-between w-full p-5">
          <span className="text-2xl italic font-black">{record.type}</span>

          <span className="text-xl">{driver.name}</span>

          <span className="text-xl">
            {record.prop}: {record.value}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecordCard;
