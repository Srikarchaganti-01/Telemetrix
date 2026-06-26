import { useEffect } from "react";
import { getData } from "../services/dataService";

function Test() {
  useEffect(() => {
    async function fetchAll() {
      console.log("Drivers:", await getData("drivers"));

      console.log("Teams:", await getData("teams"));

      console.log("Schedule:", await getData("schedule"));

      console.log("Results:", await getData("results"));

      console.log("News:", await getData("news"));
    }

    fetchAll();
  }, []);

  return <div>Testing...</div>;
}

export default Test;
