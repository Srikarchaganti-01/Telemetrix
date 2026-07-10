import React, { useEffect, useState } from "react";
import { getData } from "../services/dataService";
import {
  Navbar,
  RecordCard,
  OptionSlider,
  ResultsTable,
  Footer,
} from "../Components";

function Results() {
  const [results, setResults] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function fetchResults() {
      const sessionData = await getData("session_results");
      setResults(sessionData);

      const recordData = await getData("session_records");
      setRecords(recordData);
    }

    fetchResults();
  }, []);
  const [selected, setSelected] = useState("Race");
  // const options = [
  //   "FP-1",
  //   "FP-2",
  //   "FP-3",
  //   "Sp-Quali",
  //   "Sp-Race",
  //   "Quali",
  //   "Race",
  // ];
  const formatMap = {
    "FP-1": "fp1",
    "FP-2": "fp2",
    "FP-3": "fp3",
    Quali: "quali",
    Race: "race",
  };

  const filteredData = results.filter(
    (result) => result.format === formatMap[selected],
  );

  // console.log(filteredData);
  return (
    <>
      <Navbar />
      <div className="text-4xl ml-10 mb-5 mt-10">
        2026 FIA Formula One World Championship™
      </div>
      <div className="text-3xl ml-10 mb-5 text-red-900">Session Results</div>
      <div className="max-w-full flex flex-col justify-between gap-20 m-10 lg:flex-row">
        {records.map((record) => (
          <RecordCard key={record.$id} record={record} />
        ))}
      </div>
      <div className="w-full px-6 py-4 text-gray ">
        {/* <div className="flex justify-end mb-8">
          <OptionSlider
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div> */}
        <span className="text-4xl">Race Results :</span>
        <div className="mt-6  w-full  gap-5  ">
          {filteredData.map((result) => (
            <ResultsTable key={result.driver_id} result={result} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Results;
