import React from "react";
import {
  Navbar,
  ConstructorStandings,
  DriverStandings,
  Footer,
  OptionSlider,
} from "../Components";

function Standings() {
  return (
    <>
      <h1 className="text-5xl font-bold underline">Standings page</h1>
      <Navbar />
      <OptionSlider />
      <ConstructorStandings />
      <DriverStandings />
      <Footer />
    </>
  );
}

export default Standings;
