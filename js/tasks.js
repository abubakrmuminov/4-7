import {
  uniteCrews,
  calculatePower,
  combineArtifacts,
  sendCommands,
  executeCommand,
  splitTreasure,
} from "./script.js";

console.log(
  "1-MASALA:",
  uniteCrews(["Luke", "Leia"], ["Han", "Chewie"], ["R2-D2", "C-3PO"])
);
console.log("2-MASALA 1:", calculatePower(10, 20, 30));
console.log("2-MASALA 2:", calculatePower(5, 15, 25, 35));
console.log(
  "3-MASALA:",
  combineArtifacts({ spell: "Fireball" }, { weapon: "Wand" }, { armor: "Robe" })
);
console.log(
  "4-MASALA:",
  sendCommands(["move", "turn", "stop"], executeCommand)
);
console.log("5-MASALA:", splitTreasure(["Gold", "Ruby", "Diamond", "Emerald"]));
