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
        <div className="flex gap=5">
          <div className="w-3/5 min-h-fit">
            <Hero />
          </div>

          <div className="w-2/5 min-h-full mr-5">
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
