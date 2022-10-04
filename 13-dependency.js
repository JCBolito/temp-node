// npm - global command, comes with node.
// npm --version

// 🎯 LOCAL DEPENDENCY - use it only in this particular project.
// npm i <packageName>
// npm uninstall <packageName>
// 🎯 NUCLEAR METHOD
// Delete "node_modules" folder and "package-lock.json" file,
// remove the dependency from the "package.json" file, and run "npm install"
// on the terminal.
// 🎯 DEV DEPENDENCY
// npm i <packageName> -D
// npm i <packageName> --save-dev

// GLOBAL DEPENDENCY - use it in any project.
// npm install -g <packageName>
// sudo npm install -g <packageName> (macOS)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello, world!");

