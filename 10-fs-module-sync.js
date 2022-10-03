// FILE SYSTEM MODULE
// const fs = require("fs");

// const first = fs.readFileSync("./content/first.txt", "utf8");
// const second = fs.readFileSync("./content/second.txt", "utf8");

// fs.writeFileSync(
// 	"./content/result-sync.txt",
// 	`Here is the result: ${first}, ${second}`
// );

// fs.writeFileSync(
// 	"./content/result-sync.txt",
// 	`Here is the result: ${first}, ${second}`,
// 	{ flag: "a" }
// );

const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

// // WRITE
// writeFileSync(
// 	"./content/result-sync.txt",
// 	`Here is the result: ${first}, ${second}`
// );

// APPEND
writeFileSync(
	"./content/result-sync.txt",
	`Here is the result: ${first}, ${second}`,
	{ flag: "a" }
);
console.log("Done");
console.log("Start next.");