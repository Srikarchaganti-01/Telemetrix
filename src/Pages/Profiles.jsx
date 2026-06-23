import React from "react";
import {
  Navbar,
  OptionSlider,
  DriverCard,
  DriverHero,
  DriverStats,
  Footer,
} from "../Components";

function Profiles() {
  return (
    <>
      <h1 className="text-5xl font-bold underline ">Profiles page</h1>
      <Navbar />
      <OptionSlider />
      <DriverCard />
      <DriverHero />
      <DriverStats />
      <Footer />
    </>
  );
}

export default Profiles;
