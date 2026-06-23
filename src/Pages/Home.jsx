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
        <div className="w-3/5 min-h-fit">
          <Hero />
        </div>

        <div className="w-2/5 min-h-full">
          <FIAUpdates />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
