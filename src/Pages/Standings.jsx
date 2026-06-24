import React from "react";
import { useState } from "react";
import driverStandings from "../Data/DStandings";
import constructorStandings from "../Data/CStandings";
import StandingCard from "../Components/standings/StandingCard";
import { Navbar, Footer, OptionSlider } from "../Components";

function Standings() {
  const [selected, setSelected] = useState("Drivers");
  const options = ["Drivers", "Constructors"];
  const currentData = [
    ...(selected === "Drivers" ? driverStandings : constructorStandings),
  ].sort((a, b) => b.points - a.points);

  return (
    <>
      <Navbar />
      <div className="w-full px-6 py-">
        <div className="text-5xl italic font-bold text-gray-400">
          World {selected} Championship{" "}
        </div>
        <div className="flex justify-end mb-8">
          <OptionSlider
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <div className="flex flex-col gap-5">
          {currentData.map((item) => (
            <StandingCard
              key={item.id}
              data={item}
              type={selected.toLowerCase()}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Standings;
