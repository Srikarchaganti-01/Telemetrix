import React from "react";
function RaceCard({ race }) {
  const state = race.status;
  return (
    <div className="w-full h-70  rounded-2xl overflow-hidden flex shadow-lg hover:scale-[1.02] transition-all duration-300  items-center justify-center ">
      <div className="w-[55%] shadow-2xl  h-[80%]">
        <img
          src={race.raceImg}
          alt={race.name}
          className={`${race.status ? "grayscale opacity-40" : ""} w-full h-full object-cover rounded-3xl`}
        />
      </div>
      <div className="flex-1 p-5 flex flex-col justify-evenly h-full">
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-between w-full">
            <div>
              <p className="text-red-900 ">Round no : {race.roundNo}</p>
            </div>
            <div className="">{race.status}</div>
          </div>

          <h2 className="text-xl font-bold text-gray-300">{race.gpName}</h2>
          <p className="text-gray-400 mt-1">{race.circuitName}</p>
          <div className="flex ">
            <p className="text-sm text-gray-400">{race.duration}</p>
          </div>
        </div>
        <div
          className={`${race.status ? "" : "grayscale opacity-0"} flex flex-col gap-0.5`}
        >
          <p className="text-sm text-gray-400">P 1 : {race.p1}</p>
          <p className="text-sm text-gray-400">P2 : {race.p2}</p>
          <p className="text-sm text-gray-400">P3 : {race.p3}</p>
        </div>
      </div>
    </div>
  );
}

export default RaceCard;
