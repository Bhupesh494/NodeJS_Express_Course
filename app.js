/*
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", "utf8", {
  highWaterMark: 90000,
});

stream.on("data", (result) => {
  console.log(result);
});
*/

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
