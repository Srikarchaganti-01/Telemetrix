import React from "react";
import {
  Navbar,
  OptionSlider,
  RaceCard,
  RaceStatus,
  Footer,
} from "../Components";
function Schedule() {
  return (
    <>
      <h1 className="text-5xl font-bold underline ">Schedule page </h1>
      <Navbar />
      <OptionSlider />
      <RaceCard />
      <RaceStatus />
      <Footer />
    </>
  );
}

export default Schedule;
