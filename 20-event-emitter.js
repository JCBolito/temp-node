const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
	console.log("Data Received!");
});
customEmitter.on("response", (arg1) => {
	console.log(`${arg1} - First Data`);
});
customEmitter.on("response", (arg1, arg2) => {
	console.log(`${arg2} - Second Data`);
});
customEmitter.emit("response", 1, 2);