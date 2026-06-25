import React from "react";
import drivers from "../Data/profileData";
import { Navbar, DriverCard, Footer } from "../Components";
import {
  LEC,
  VER,
  RUS,
  VER_ban,
  VER_lat,
  LEC_lat,
  LEC_ban,
} from "../Data/Drivers/index";
function Profiles() {
  return (
    <>
      <Navbar />
      <div className="text-4xl ml-10 mb-5 mt-10">
        2026 FIA Formula One World Championship™
      </div>
      <div className="text-3xl ml-10 italic text-red-900">
        Driver Profiles 2026
      </div>
      <div className="w-full px-6 py-4 text-gray">
        <div className="mt-6  w-full grid grid-cols-2  gap-5  ">
          {drivers.map((driver) => (
            <DriverCard key={driver.id} driver={driver} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profiles;
