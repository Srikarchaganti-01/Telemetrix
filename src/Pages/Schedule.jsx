import React from "react";
import { useState } from "react";
import { Navbar, OptionSlider, RaceCard, Footer } from "../Components";
import scheduleData from "../Data/schedule";

function Schedule() {
  const [selected, setSelected] = useState("All");
  const options = ["All", "Past", "Upcoming"];
  console.log(selected);
  console.log(selected);
  return (
    <>
      <Navbar />
      <div className="text-4xl ml-10 mb-5 mt-10">
        2026 FIA Formula One World Championship™{" "}
      </div>
      <div className="text-3xl ml-10 italic text-red-900">
        Race Calendar 2026
      </div>
      <div className="w-full px-6 py-4 text-gray">
        <div className="flex justify-end mb-8">
          <OptionSlider
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="mt-6  w-full grid grid-cols-2  gap-5  ">
          {scheduleData.map((race) => (
            <RaceCard key={race.id} race={race} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Schedule;
