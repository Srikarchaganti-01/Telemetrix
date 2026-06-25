const SessionRecord = [
  {
    type: "DHL Fastest Lap",
    id: "max-verstappen",
    rec: "1:27.412",
    prop: "Laptime",
  },
  {
    type: "Driver of the Day",
    id: "charles-leclerc",
    rec: "98%",
    prop: "Vote",
  },
  {
    type: "Speed Master",
    id: "george-russel",
    rec: "352.6 km/h",
    prop: "Top Speed",
  },
];

const SessionData = {
  fp1: [
    {
      id: "max-verstappen",
      lapTime: "1:28.112",
      pos: 1,
    },
    {
      id: "george-russel",
      lapTime: "1:28.221",
      pos: 2,
    },
    {
      id: "charles-leclerc",
      lapTime: "1:28.487",
      pos: 3,
    },
  ],

  fp2: [
    {
      id: "george-russel",
      lapTime: "1:27.901",
      pos: 1,
    },
    {
      id: "max-verstappen",
      lapTime: "1:28.054",
      pos: 2,
    },
    {
      id: "charles-leclerc",
      lapTime: "1:28.199",
      pos: 3,
    },
  ],

  fp3: [
    {
      id: "charles-leclerc",
      lapTime: "1:27.731",
      pos: 1,
    },
    {
      id: "george-russel",
      lapTime: "1:27.884",
      pos: 2,
    },
    {
      id: "max-verstappen",
      lapTime: "1:27.965",
      pos: 3,
    },
  ],

  sprintQuali: [
    {
      id: "max-verstappen",
      lapTime: "1:26.882",
      pos: 1,
    },
    {
      id: "george-russel",
      lapTime: "1:27.013",
      pos: 2,
    },
    {
      id: "charles-leclerc",
      lapTime: "1:27.145",
      pos: 3,
    },
  ],

  sprintRace: [
    {
      id: "george-russel",
      lapTime: "1:30:11.822",
      pts: 25,
      pos: 1,
    },
    {
      id: "max-verstappen",
      lapTime: "+2.132",
      pts: 18,
      pos: 2,
    },
    {
      id: "charles-leclerc",
      lapTime: "+5.481",
      pts: 15,
      pos: 3,
    },
  ],
  qualifying: [
    {
      id: "max-verstappen",
      lapTime: "1:26.882",
      pos: 1,
    },
    {
      id: "george-russel",
      lapTime: "1:27.013",
      pos: 2,
    },
    {
      id: "charles-leclerc",
      lapTime: "1:27.145",
      pos: 3,
    },
  ],

  raceResults: [
    {
      id: "george-russel",
      lapTime: "1:30:11.822",
      pts: 25,
      pos: 1,
    },
    {
      id: "max-verstappen",
      lapTime: "+2.132",
      pts: 18,
      pos: 2,
    },
    {
      id: "charles-leclerc",
      lapTime: "+5.481",
      pts: 15,
      pos: 3,
    },
  ],
};

export { SessionData, SessionRecord };
