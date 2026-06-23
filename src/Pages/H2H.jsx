import React from "react";
import {
  DriverSelector,
  ComparisonCard,
  H2HGraph,
  Navbar,
  Footer,
} from "../Components";
function H2H() {
  return (
    <>
      <h1 className="text-5xl font-bold underline ">Head to Head comp page</h1>
      <Navbar />
      <DriverSelector />
      <ComparisonCard />
      <ComparisonCard />
      <Footer />
    </>
  );
}

export default H2H;
