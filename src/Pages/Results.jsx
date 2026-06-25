import React, { useState } from "react";
import {
  Navbar,
  RecordCard,
  OptionSlider,
  ResultsTable,
  Footer,
} from "../Components";
import { SessionData, SessionRecord } from "../Data/results";
function Results() {
  const [selected, setSelected] = useState("Race");
  const options = [
    "FP-1",
    "FP-2",
    "FP-3",
    "Sp-Quali",
    "Sp-Race",
    "Quali",
    "Race",
  ];
  const sessionMap = {
    "FP-1": SessionData.fp1,
    "FP-2": SessionData.fp2,
    "FP-3": SessionData.fp3,
    "Sp-Quali": SessionData.sprintQuali,
    "Sp-Race": SessionData.sprintRace,
    Quali: SessionData.qualifying,
    Race: SessionData.raceResults,
  };
  const filteredData = sessionMap[selected];
  console.log(filteredData);

  return (
    <>
      <Navbar />
      <div className="text-4xl ml-10 mb-5 mt-10">
        2026 FIA Formula One World Championship™
      </div>
      <div className="text-3xl ml-10 mb-5 text-red-900">Session Results</div>
      <div className="max-w-full flex flex-1 justify-between gap-20 m-10">
        {SessionRecord.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}
      </div>
      <div className="w-full px-6 py-4 text-gray">
        <div className="flex justify-end mb-8">
          <OptionSlider
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <div className="mt-6  w-full  gap-5  ">
          {filteredData.map((result) => (
            <ResultsTable key={result.id} result={result} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Results;
