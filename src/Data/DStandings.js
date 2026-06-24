import VER from "./Drivers/VER.avif";
import LEC from "./Drivers/LEC.avif";
import RUS from "./Drivers/RUS.avif";

const driverStandings = [
  {
    id: 1,
    number: 4,
    name: "George Russel",
    team: "Mercedes",
    image: "/images/drivers/norris.png",
    wins: 5,
    podiums: 9,
    points: 138,
    position: 3,
    positionChange: -2,
    image: RUS,
  },

  {
    id: 2,
    number: 33,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    image: "/images/drivers/max.png",
    wins: 4,
    podiums: 8,
    points: 220,
    position: 2,
    positionChange: 0,
    image: VER,
  },
  {
    id: 3,
    number: 16,
    name: "Charles Leclerc",
    team: "Ferrari",
    image: "/images/drivers/max.png",
    wins: 4,
    podiums: 8,
    points: 320,
    position: 1,
    positionChange: +2,
    image: LEC,
  },
];

export default driverStandings;
