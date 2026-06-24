import React from "react";
import {
  Navbar,
  RecordCard,
  OptionSlider,
  ResultsTable,
  Footer,
} from "../Components";
function Results() {
  return (
    <>
      {/* <h1 className="text-5xl font-bold underline ">Results page</h1> */}
      <Navbar />
      <RecordCard />
      <RecordCard />
      <RecordCard />
      <OptionSlider />
      <ResultsTable />
      <Footer />
    </>
  );
}

export default Results;
