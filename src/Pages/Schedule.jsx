import React from "react";
import { useEffect, useState } from "react";
import { getSchedule } from "../services/scheduleService";
import { Navbar, OptionSlider, RaceCard, Footer } from "../Components";
// import scheduleData from "../Data/schedule";

function Schedule() {
  const [selected, setSelected] = useState("All");
  const [scheduleData, setScheduleData] = useState([]);
  const options = ["All", "Past", "Upcoming"];
  const [filteredRaces, setFilteredRaces] = useState([]);

  useEffect(() => {
    async function fetchSchedule() {
      const data = await getSchedule();
      console.log("Raw data:", data);
      const races =
        selected === "All"
          ? data
          : data.filter((race) =>
              selected === "Past"
                ? race.status === true
                : race.status === false,
            );

      console.log("Filtered:", races);
      setFilteredRaces(races);
    }

    fetchSchedule();
  }, [selected]);
  return (
    <>
      <Navbar />
      <div className="text-2xl lg:text-4xl ml-10 my-5">
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
          {filteredRaces.map((race) => (
            <RaceCard key={race.roundNo} race={race} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Schedule;
