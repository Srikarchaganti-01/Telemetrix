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
      <div className="w-full px-6 py-4 text-gray">
        {/* Option Slider */}
        <div className="flex justify-end">
          <div className="flex bg-[#1e1e1e] p-1 rounded-full w-fit">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelected(opt)}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                  selected === opt
                    ? "bg-red-900 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
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
