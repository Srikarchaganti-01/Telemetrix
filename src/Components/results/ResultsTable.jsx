import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDriver } from "../../services/driverService";

function ResultsTable({ result }) {
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    async function fetchDriver() {
      const data = await getDriver(result.driver_id);
      setDriver(data);
    }

    fetchDriver();
  }, [result.driver_id]);
  // console.log(result.driver_id);
  // console.log("FP2 results length:", results.length);
  // console.log(results);
  if (!driver) return <div>Loading...</div>;
  return (
    <div className="w-full h-20 rounded-xl  flex items-center px-5 justify-between text-gray-400">
      <div className="w-10 text-xl ">{result.pos}</div>
      <div className="flex items-center gap-4 flex-1">
        <img
          src={driver.logo}
          alt={driver.name}
          className="w-16 h-16 object-cover object-top rounded-full"
        />

        <div>
          <h1>
            <Link key={driver.shortName} to={`/driver/${driver.shortName}`}>
              # {driver.number} : {driver.name}
            </Link>
          </h1>
          <p>{driver.team}</p>
        </div>
      </div>
      <div className="flex gap-10 justify-end  ">
        <span className="flex justify-start w-20">{result.time}</span>

        {<span>{result.points} pts</span>}
      </div>
    </div>
  );
}

export default ResultsTable;
