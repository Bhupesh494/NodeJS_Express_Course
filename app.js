/*
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", "utf8", {
  highWaterMark: 90000,
});

stream.on("data", (result) => {
  console.log(result);
});
*/
/* 
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello bhupesh");
*/

const { readFile } = require("fs");
// CHECK FILE PATH
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("done with this task");
});

console.log("starting next task");
