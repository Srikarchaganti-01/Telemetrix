import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../services/dataService";
import { Navbar, Footer, OptionSlider } from "../Components";
import StandingCard from "../Components/standings/StandingCard";
function Standings() {
  const [selected, setSelected] = useState("Constructors");
  const [constructorStandings, setConstructorStandings] = useState([]);
  const [driverStandings, setDriverStandings] = useState([]);
  const options = ["Drivers", "Constructors"];
  useEffect(() => {
    async function fetchData() {
      const teams = await getData("teams");
      const drivers = await getData("drivers");
      const sortedTeams = [...teams].sort(
        (a, b) => Number(b.Spts) - Number(a.Spts),
      );
      const sortedDrivers = [...drivers].sort(
        (a, b) => Number(a.Spos) - Number(b.Spos),
      );
      setConstructorStandings(sortedTeams);
      setDriverStandings(sortedDrivers);
    }
    fetchData();
  }, []);
  const currentData =
    selected === "Drivers" ? driverStandings : constructorStandings;

  return (
    <>
      <Navbar />
      <div className="w-full px-6 py-">
        <div className="text-5xl italic font-bold text-gray-400">
          World {selected} Championship{" "}
        </div>
        <div className="flex justify-end mb-8">
          <OptionSlider
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <div className="flex flex-col gap-5">
          {currentData.map((item) => (
            <StandingCard
              key={item.$id || item.id}
              data={item}
              type={selected.toLowerCase()}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Standings;
