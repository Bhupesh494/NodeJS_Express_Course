const { readFileSync, writeFileSync, write, read } = require("fs");
console.log("Start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(`${first} || ${second}`);

writeFileSync(
  "./content/subfolder/result.txt",
  `my name is khan and i am not a terrorist \n \t -> ${second} \n \t -> ${first}\n`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");

// * trying something on my own
const result = readFileSync("./content/subfolder/result.txt", "utf-8");
console.log(result);
