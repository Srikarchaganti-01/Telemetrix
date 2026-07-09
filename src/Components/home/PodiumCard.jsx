import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../services/dataService";
import { getDriver } from "../../services/driverService";

function PodiumCard() {
  const [podium, setPodium] = useState(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        const scheduleData = await getData("schedule");

        const latestRace = scheduleData
          .filter((race) => race.status === true)
          .sort((a, b) => Number(a.roundNo) - Number(b.roundNo))
          .at(-1);

        if (!latestRace) return;
        console.log(latestRace);
        const podiumNames = [latestRace.p1, latestRace.p2, latestRace.p3];
        // console.log(podiumNames);
        const positions = await Promise.all(
          podiumNames.map(async (driverName) => {
            if (!driverName) return null;

            const driverData = await getDriver(driverName);

            return {
              id: driverData.shortName,
              name: driverData.name,
              image: driverData.logo || driverData.image,
              team: driverData.team,
            };
          }),
        );

        setPodium({
          raceid: latestRace.roundNo,
          country: latestRace.country,
          circuit: latestRace.circuitName,
          duration: latestRace.duration,
          positions: positions.filter(Boolean),
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchResults();
  }, []);

  if (!podium) return <div>Loading...</div>;

  return (
    <div className="bg-[#15151e] text-gray-400 rounded-xl p-5 md:p-6 mx-4 md:mx-10 lg:mx-20">
      <h1 className="font-orbitron text-red-900 text-2xl md:text-3xl lg:text-4xl mb-6 italic font-semibold">
        Latest Podium Finish
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3 flex flex-col items-start p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl text-red-900 font-medium italic">
            Round no : {podium.raceid}
          </h1>

          <h1 className="text-xl md:text-2xl">Country : {podium.country}</h1>
          <h1 className="text-lg md:text-xl">
            Circuit Name : {podium.circuit}
          </h1>
          <h1>Duration : {podium.duration}</h1>
        </div>

        <div className="w-full lg:w-2/3 flex flex-wrap justify-center items-center gap-6 p-4 md:p-8">
          {podium.positions.map((driver, index) => (
            <div
              key={driver.id}
              className="flex flex-col items-center rounded-lg p-4"
            >
              <img
                src={driver.image}
                alt={driver.name}
                className="w-25 h-25 rounded-full object-cover object-top mb-3"
              />

              <h2 className="font-semibold text-center">
                <Link to={`/driver/${driver.id}`}>{driver.name}</Link>
              </h2>

              <p className="text-sm">{driver.team}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PodiumCard;
