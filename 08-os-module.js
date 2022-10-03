const os = require("os");
const { CLIENT_RENEG_WINDOW } = require("tls");

// Information about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds.`);
// console.log(`The System Uptime is ${os.uptime() / 60} minutes.`);
// console.log(`The System Uptime is ${os.uptime() / 60 / 60} hours.`);
// console.log(`The System Uptime is ${os.uptime() / 60 / 60 / 24} days.`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem()
};

console.log(currentOS);
