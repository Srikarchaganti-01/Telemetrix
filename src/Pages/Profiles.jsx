import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../services/dataService";
import { Navbar, DriverCard, Footer } from "../Components";
function Profiles() {
  const [dprofiles, setDprofiles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const drivers = await getData("drivers");
      setDprofiles(drivers);
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="text-4xl ml-10 mb-5 mt-10">
        2026 FIA Formula One World Championship™
      </div>
      <div className="text-3xl ml-10 italic text-red-900">
        Driver Profiles 2026
      </div>
      <div className="w-full px-6 py-4 text-gray flex justify-center">
        <div className="mt-6  w-9/10 grid grid-cols-2  gap-10  ">
          {dprofiles.map((item) => (
            <DriverCard key={item.number || item.shortName} driver={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profiles;
