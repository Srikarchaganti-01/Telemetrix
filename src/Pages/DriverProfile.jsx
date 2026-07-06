import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Footer } from "../Components";
import { getDriver } from "../services/driverService";

function DriverProfile() {
  const { shortName } = useParams();
  const [loading, setLoading] = useState(true);
  const [driver, setDriver] = useState(null);
  useEffect(() => {
    async function fetchDriver() {
      const data = await getDriver(shortName);
      setDriver(data);
      setLoading(false);
    }

    fetchDriver();
  }, [shortName]);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(driver.ban);
  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="flex items-center gap-10 mb-10">
          <h1 className="text-5xl text-gray-400 ">Driver Profile : </h1>
          <h2 className="text-5xl text-red-900 italic">
            #{driver.number} : {driver.name}
          </h2>
        </div>
        <div className="w-full flex mt-10 justify-between">
          <div className="w-2/3 font-extralight ">
            <div className="flex  items-center gap-10">
              <div>
                <h6 className="text-sm text-red-900">Date of Birth : </h6>
                <h1 className="text-3xl text-gray-400">{driver.dob} </h1>
              </div>
              <div>
                <div>
                  <h6 className="text-sm text-red-900">Place of Birth : </h6>
                  <h1 className="text-3xl text-gray-400">{driver.pob} </h1>
                </div>
              </div>
            </div>
            <div>
              <div className="text-4xl text-red-900 font-bold mt-20 mb-10">
                2026 SEASON STATICS
              </div>
              <div className="flex gap-20 text-gray-300 text-3xl mb-5">
                <span>Season Position : {driver.Spos}</span>
                <span>Season points : {driver.Spts}</span>
              </div>
              <div className="flex gap-1.5 text-gray-400 text-2xl flex-col">
                <span>Season GP Races : {driver.Sgp}</span>
                <span>Season GP points : {driver.Sgppts}</span>
                <span>Season Wins : {driver.Swins}</span>
                <span>Season Podiums : {driver.Spodiums}</span>
                <span>Season DNF's : {driver.Sdnf}</span>
              </div>
            </div>
          </div>

          <div className="w-2/5 font-extralight flex-end">
            <img
              src={driver.ban}
              alt={driver.name}
              className="w-full h-full object-cover object-top rounded-4xl shadow-2xl"
            />
          </div>
        </div>

        <div className="flex w-full items-center">
          <div className="mt-20 w-6/10">
            <img
              src={driver.latest}
              alt={driver.name}
              className="w-200 h-120 object-cover object-top rounded-4xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-baseline font-bold">
            <span className="text-5xl text-red-900 mb-10">CAREER STATS</span>
            <span className="text-3xl text-gray-400 mb-3 font-extralight">
              Total Races : {driver.Cgp}
            </span>
            <span className="text-3xl text-gray-400 mb-3 font-extralight">
              Total Points : {driver.Cpts}
            </span>
            <span className="text-3xl text-gray-400 mb-3 font-extralight">
              Race Wins : {driver.Cwins}
            </span>
            <span className="text-3xl text-gray-400 mb-3 font-extralight">
              Podiums : {driver.Cpod}
            </span>
            <span className="text-3xl text-gray-400 mb-3 font-extralight">
              Pole Positions : {driver.Cpole}
            </span>
            <span className="text-3xl text-gray-400 mb-3 font-extralight">
              World Championships : {driver.Ctitles}
            </span>
            <span className="text-3xl text-gray-400 mb-3 font-extralight">
              DNF's : {driver.Cdnf}
            </span>
          </div>
        </div>

        <div className="flex justify-center my-20">
          <div className="max-w-3/5 ">
            <h1 className="text-center text-3xl text-gray-400 mt-10">
              {driver.quote}
            </h1>
            <h3 className="text-center text-xl text-red-800 ">
              -{driver.name}
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DriverProfile;
