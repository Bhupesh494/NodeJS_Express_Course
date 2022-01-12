const path = require("path");

console.log(path.sep);

// * path if you add additional / it will remove it and normalize it
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// * console.log(process.env.PATH.split(path.delimiter));
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
