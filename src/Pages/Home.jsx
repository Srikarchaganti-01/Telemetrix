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
      <h1 className="text-5xl font-bold underline ">Home page</h1>
      <Navbar />
      <Hero />
      <PodiumCard />
      <FIAUpdates />
      <OptionSlider />
      <SeasonStats />
      <Footer />
    </>
  );
}

export default Home;
