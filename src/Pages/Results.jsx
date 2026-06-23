import React from "react";
import {
  Navbar,
  RecordCard,
  OptionSlider,
  ResultsTable,
  Footer,
  RaceCard,
} from "../Components";
function Results() {
  return (
    <>
      {/* <h1 className="text-5xl font-bold underline ">Results page</h1> */}
      <Navbar />
      <RaceCard />
      <RaceCard />
      <RaceCard />
      <OptionSlider />
      <ResultsTable />
      <Footer />
    </>
  );
}

export default Results;
