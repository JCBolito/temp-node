// GLOBALS - No window. Globals are accessible regardless of how nested the code is.

// __dirname 	- path to current directory.
// __ filename 	- filename
// require 		- info about current module (file).
// process 		- info about env where the program is being executed.

console.log(__dirname);
console.log(__filename);
// console.log(require);
// console.log(process);
setInterval(() => {
	console.log("Hello, World!");
}, 1000);
