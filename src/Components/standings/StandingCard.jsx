import React from "react";
import { Link } from "react-router-dom";
function StandingCard({ data, type }) {
  return (
    <div className="bg-transparent rounded-2xl px-5 py-1 flex gap-5 items-center">
      <div className="flex items-center gap-7">
        <div>
          <img
            src={type === "drivers" ? data.logo : data.logo}
            alt={data.name}
            className="w-15 h-15 rounded-full object-top object-cover ]"
          />
        </div>
      </div>

      <div className="flex-1">
        {type === "drivers" ? (
          <>
            <div className="flex justify-between ">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-xl cursor-pointer">
                    <Link key={data.id} to={`/driver/${data.id}`}>
                      #{data.number} {data.name}
                    </Link>
                  </h2>

                  <p className="text-gray-400">{data.team}</p>
                </div>
              </div>

              <div className="flex gap-6 mt-4">
                <p>Wins: {data.Swins}</p>
                <p>Podiums: {data.Spodiums}</p>
                <p>Pts: {data.Spts}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-xl text-gray-400">
                    {data.name}
                  </h2>

                  <p className="text-gray-400">TC : {data.teamPrinciple}</p>
                </div>
              </div>

              <div className="flex gap-10 items-center">
                <div className="mt-4 hidden lg:flex">
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
                  <p className="hidden lg:block sm:block">Wins: {data.Swins}</p>
                  <p className="hidden lg:block sm:block">
                    Podiums: {data.Spodiums}
                  </p>
                  <p>Pts: {data.Spts}</p>
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
