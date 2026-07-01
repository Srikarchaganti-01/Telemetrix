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
      <div className="flex flex-col gap-5">
        <div className="text-4xl ml-10 my-5">
          2026 FIA Formula One World Championship™
        </div>
        <div className="flex gap=5 h-[70vh] justify-between mb-10">
          <div className="w-3/5 min-h-fit ">
            <Hero />
          </div>

          <div className="w-2/5 min-h-fit mr-5">
            <FIAUpdates />
          </div>
        </div>
        <PodiumCard />
        <SeasonStats />
      </div>
      <Footer />
    </>
  );
}

export default Home;
