// CommonJS	- every file is module (by default)
// Modules	- encapsulated code (only share minimum)

const names = require("./04-module-names");
// const { cal, dio } = require("./04-module-names");
const sayHi = require("./05-module-utils");
const data = require("./06-module-alternative-export");

// console.log(names);
console.log(data);
require("./07-module-functions");
sayHi("Joshua");
sayHi(names.cal);
sayHi(names.dio);