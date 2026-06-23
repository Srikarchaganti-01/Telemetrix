import React from "react";
import podium from "../../data/podium";

function PodiumCard() {
  return (
    <div className="bg-[#15151e] text-gray-400 rounded-xl p-6 ml-20 mr-20">
      <h1 className="font-orbitron text-red-900 text-4xl mb-6 italic font-semibold">
        Latest Podium Finish
      </h1>

      <div className="flex justify-between m-5 gap-3  h-full">
        <div className="w-1/3 min-h-full  flex flex-col items-start p-10">
          <h1 className="text-3xl text-red-900 font-semibold">
            Round no : {podium.raceid}
          </h1>
          <h1 className="text-2xl ">Country : {podium.country}</h1>
          <h1>Circuit Name : {podium.circuit}</h1>
          <h1 className="text-sm">
            Fastest Lap : {podium.fastestLapname} - {podium.fastestLap}
          </h1>
          <h1 className="text-sm">
            Driver of the day : {podium.DOTD} - {podium.DOTDper}
          </h1>
        </div>
        <div className="w-2/3 min-h-full  flex justify-center p-10 items-center gap-10">
          {podium.positions.map((driver) => (
            <div
              key={driver.place}
              className={`flex flex-col items-center rounded-lg p-4
              ${driver.place === 1 ? "h-56 " : driver.place === 2 ? "h-44 " : "h-36"}`}
            >
              <img
                src={driver.image}
                alt={driver.name}
                className="w-25 h-25 rounded-full object-cover object-top mb-3"
              />
              <h2 className="font-semibold text-center">{driver.name}</h2>
              <p className="text-sm">{driver.team}</p>
              <span className="mt-2 font-bold">P{driver.place}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PodiumCard;
