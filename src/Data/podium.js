import VER from "./Drivers/VER.avif";
import LEC from "./Drivers/LEC.avif";
import RUS from "./Drivers/RUS.avif";

const podium = {
  circuit: " Circuit de Monaco",
  country: "Monoco",
  raceid: "0",
  fastestLap: "1:20:123",
  DOTD: "Lewis Hamilton",
  fastestLapname: "Oscar piastri",
  DOTDper: "97",
  positions: [
    {
      place: 1,
      name: "Charles Leclerc",
      team: "Ferrari",
      image: LEC,
    },

    {
      place: 2,
      name: "Max Verstappen",
      team: "Red Bull",
      image: VER,
    },

    {
      place: 3,
      name: "George Russel",
      team: "Mercedes AMG Petronas",
      image: RUS,
    },
  ],
};

export default podium;
