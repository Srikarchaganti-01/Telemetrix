import React, { useEffect, useState } from "react";
import { getSchedule } from "../../services/scheduleService";
import { Link } from "react-router-dom";
import { getCountdown } from "../../Utils/Countdown";

function Hero() {
  const [nextRace, setNextRace] = useState(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    async function fetchNextRace() {
      const races = await getSchedule();

      const next = races
        .filter((race) => !race.status)
        .sort((a, b) => a.round - b.round)[0];

      setNextRace(next);
    }

    fetchNextRace();
  }, []);

  useEffect(() => {
    if (!nextRace) return;
    console.log(nextRace);
    const timer = setInterval(() => {
      setTimeLeft(getCountdown(nextRace.date));
    }, 1000);

    return () => clearInterval(timer);
  }, [nextRace]);

  if (!nextRace) {
    return <div>Loading...</div>;
  }
  return (
    <section className="min-h-[70vh] flex items-center px-8 flex-1">
      <div className="flex w-full items-center flex-1">
        <div className="w-1/2">
          <p className="text-red-900 font-semibold mb-3">NEXT RACE</p>

          <h1 className="font-orbitron text-6xl mb-3">{nextRace.gpName}</h1>

          <p className="text-gray-400 text-xl mb-8"> {nextRace.circuitName}</p>

          <div className="flex gap-4 mb-8">
            <div className="bg-zinc-900 p-4 rounded-lg text-center">
              <h2 className="text-3xl font-orbitron">{timeLeft.days}</h2>
              <p className="text-sm text-gray-400">Days</p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-lg text-center">
              <h2 className="text-3xl font-orbitron">{timeLeft.hours}</h2>
              <p className="text-sm text-gray-400">Hours</p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-lg text-center">
              <h2 className="text-3xl font-orbitron">{timeLeft.minutes}</h2>
              <p className="text-sm text-gray-400">Minutes</p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-lg text-center">
              <h2 className="text-3xl font-orbitron">{timeLeft.seconds}</h2>
              <p className="text-sm text-gray-400">Seconds</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <div>My time : {nextRace.myTime}</div>
            <div>Track time : {nextRace.trackTime}</div>
          </div>
          <div className="flex gap-4">
            <Link to="/schedule" className="bg-red-950 px-6 py-3 rounded-lg">
              View Schedule
            </Link>

            <Link
              to="/standings"
              className="border border-red-800 px-6 py-3 rounded-lg"
            >
              Standings
            </Link>
          </div>
        </div>

        <div className="w-1/2  h-full flex flex-col justify-between items-start gap-5 flex-1">
          <div className="grayscale bg-center bg-cover ">
            <img
              src={nextRace.race_track}
              alt={nextRace.gpName}
              className="w-full h-full object-contain rounded-4xl"
            />
          </div>
          <div className="min-h-2/5 min-w-100  flex flex-col items-start justify-between">
            <h1 className="text-red-900 text-3xl">
              Round no : {nextRace.roundNo}
            </h1>
            <div className="flex flex-col gap-1 text-base text-gray-400">
              <h2>{nextRace.duration}</h2>
              <h2>Country : {nextRace.country}</h2>
              <h2>Circuit length : {nextRace.circuitLength} Km</h2>
              <h2>Total laps in Race : {nextRace.totalLaps} </h2>
              <h2>Lap Record : {nextRace.lapRecord} </h2>
              <h2>Record Holder: {nextRace.recordHolder} </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
