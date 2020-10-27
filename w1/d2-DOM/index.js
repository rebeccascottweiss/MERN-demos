// .js is only required here because we aren't using react
import Counter from "./components/Counter.js";
import Player from "./components/Player.js";
import PlayerModel from "./models/PlayerModel.js";
import ScoreBoard from "./components/ScoreBoard.js";

// new Counter(
//   { headingText: "Cool Bois", buttonText: "That's a cool boi." },
//   document.body
// );

// new Counter(
//   { headingText: "un-cool Bois", buttonText: "That's a uncool boi." },
//   document.getElementById("special-div")
// );

// pretend we got this from a database, orderBy score
const rankedPlayersFromDb = [
  new PlayerModel("Neil", "Mos", 9001),
  new PlayerModel("Cayman", "Tomsic", 8000),
  new PlayerModel("Ian", "Roz", 7000),
];

const rankedPlayersFromDb2 = [
  new PlayerModel("A", "B", 10),
  new PlayerModel("C", "D", 9),
  new PlayerModel("E", "F", 8),
];

ScoreBoard(
  { headingText: "High Scorers", rankedPlayersFromDb: rankedPlayersFromDb },
  document.body
);

ScoreBoard(
  {
    headingText: "High Scorers Part 2",
    rankedPlayersFromDb: rankedPlayersFromDb2,
  },
  document.body
);
