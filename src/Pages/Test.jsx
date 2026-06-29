import { useEffect, useState } from "react";
import { getData } from "../services/dataService";

function Test() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const data = await getData("teams");
      setTeams(data);
    }

    fetchAll();
  }, []);
  const sortedTeams = [...teams].sort((a, b) => b.points - a.points);

  return (
    <div>
      <h2>Teams</h2>
      {sortedTeams.map((team) => (
        <div key={team.$id}>
          {team.name} - {team.Spts}
        </div>
      ))}
      {/* {teams.map((team) => (
        <div key={team.$id}>
          {team.name} - {team.Spts}
        </div>
      ))} */}
    </div>
  );
}

export default Test;
