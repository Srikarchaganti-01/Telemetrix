import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  Hero,
  FIAUpdates,
  PodiumCard,
  SeasonStats,
  OptionSlider,
  Footer,
  Loader,
} from "../Components";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading && <Loader />}

      <Navbar />
      <div className="flex flex-col gap-5">
        <div className="text-2xl lg:text-4xl ml-10 my-5">
          2026 FIA Formula One World Championship™
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-between mb-10">
          <div className="w-full lg:w-3/5 ">
            <Hero />
          </div>

          <div className="w-full lg:w-2/5 px-5 lg:px-0 lg:pr-5">
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
