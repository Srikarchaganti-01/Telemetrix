import Melbourne from "./RaceTracks/Melbourne.avif";
import aus from "./RaceTracks/aus.avif";
const races = [
  {
    id: 1,
    name: "Australian Grand Prix",
    circuit: "Albert Park Circuit",
    country: "Australia",
    circuitLength: "10km",
    totalLaps: "67",
    raceTime: "2026-09-15T14:00:00+05:30",
    image: aus,
    myTime: "14:00",
    trackTime: "10:00",
    from: "12 Jan",
    to: "15 Jan",
    lapRecord: "Charles Leclerc (2024)",
    lapTime: "1:19.813",
  },

  {
    id: 2,
    name: "British Grand Prix",
    circuit: "Silverstone Circuit",
    country: "United Kingdom",
    raceTime: "2026-07-05T14:00:00",
    image: "/images/british.png",
  },

  {
    id: 3,
    name: "Belgian Grand Prix",
    circuit: "Spa-Francorchamps",
    country: "Belgium",
    raceTime: "2026-08-01T15:00:00",
    image: "/images/belgium.png",
  },
];

export default races;
