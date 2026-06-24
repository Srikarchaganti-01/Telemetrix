import RED from "./Constructors/RED.avif";
import MCL from "./Constructors/MCL.avif";

const constructorStandings = [
  {
    id: 1,
    teamName: "McLaren",
    logo: MCL,
    principal: "Andrea Stella",
    driver1: "Lando Norris",
    driver2: "Oscar Piastri",
    wins: 8,
    podiums: 15,
    points: 458,
    position: 1,
    positionChange: 1,
  },

  {
    id: 2,
    teamName: "Red Bull Racing",
    logo: RED,
    principal: "Christian Horner",
    driver1: "Max Verstappen",
    driver2: "Yuki Tsunoda",
    wins: 5,
    podiums: 10,
    points: 388,
    position: -1,
    positionChange: -1,
  },
];

export default constructorStandings;
