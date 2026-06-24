import React from "react";

function StandingCard({ data, type }) {
  const teamColors = {
    Mercedes: "#1bc5aa",
    Ferrari: "#b00022",
    McLaren: "#cc6700",
    RedBull: "#295594",
    Alpine: "#0081ba",
    RacingBulls: "#3e6ee6",
    Haas: "#aab1b3",
    Williams: "#124c9e",
    Audi: "#c82400",
    AstonMartin: "#1b7758",
    Cadillac: "#8a8a8c",
    RUS: "#1bc5aa",
    ANT: "#1bc5aa",
    LEC: "#b00022",
    HAM: "#b00022",
    PIA: "#cc6700",
    NOR: "#cc6700",
    VER: "#295594",
    HAD: "#295594",
    GAS: "#0081ba",
    COL: "#0081ba",
    LAW: "#3e6ee6",
    LIN: "#3e6ee6",
    OCO: "#aab1b3",
    BEA: "#aab1b3",
    SAI: "#124c9e",
    ALB: "#124c9e",
    HUL: "#c82400",
    BOR: "#c82400",
    ALO: "#1b7758",
    STR: "#1b7758",
    PER: "#8a8a8c",
    BOT: "#8a8a8c",
  };
  return (
    <div className="bg-transparent rounded-2xl px-5 py-1 flex gap-5 items-center">
      {/* Left image/logo */}
      <div className="flex items-center gap-7">
        <div className="text-xl">P {data.position}</div>
        <div>
          <img
            src={type === "drivers" ? data.image : data.logo}
            alt={data.name}
            className="w-15 h-15 rounded-full object-top object-cover ]"
          />
        </div>
      </div>

      {/* Right content */}
      <div className="flex-1">
        {/* Driver view */}
        {type === "drivers" ? (
          <>
            <div className="flex justify-between ">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-xl">
                    #{data.number} {data.name}
                  </h2>

                  <p className="text-gray-400">{data.team}</p>
                </div>
              </div>

              <div className="flex gap-6 mt-4">
                <p>Wins: {data.wins}</p>
                <p>Podiums: {data.podiums}</p>
                <p>Pts: {data.points}</p>
                <p>
                  {data.positionChange > 0
                    ? `↑ ${data.positionChange}`
                    : `↓ ${Math.abs(data.positionChange)}`}
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Constructor view */

          <>
            <div className="flex justify-between">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-xl">{data.teamName}</h2>

                  <p className="text-gray-400">TP : {data.principal}</p>
                </div>
              </div>

              <div className="flex gap-10 items-center">
                <div className="mt-4 flex">
                  <p className="font-extralight italic text-gray-500">
                    {data.driver1}{" "}
                  </p>
                  <p> - </p>
                  <p className="font-bold italic text-gray-300">
                    {data.driver2}{" "}
                  </p>
                </div>
                <div className="text-2xl mt-2">|</div>
                <div className="flex gap-6 mt-4">
                  <p>Wins: {data.wins}</p>
                  <p>Podiums: {data.podiums}</p>
                  <p>Pts: {data.points}</p>
                  <p>
                    {data.positionChange > 0
                      ? `↑ ${data.positionChange}`
                      : `↓ ${Math.abs(data.positionChange)}`}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StandingCard;
