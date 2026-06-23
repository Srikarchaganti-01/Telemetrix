import React from "react";
import {
  Navbar,
  Hero,
  FIAUpdates,
  PodiumCard,
  SeasonStats,
  OptionSlider,
  Footer,
} from "../Components";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex gap-6">
        <div className="w-2/3">
          <Hero />
        </div>

        <div className="w-1/3">
          <FIAUpdates />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
