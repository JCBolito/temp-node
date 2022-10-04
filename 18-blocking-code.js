const http = require("http");

// req - what is coming in.
// res - what we're sending out.
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Home Page");
	}
	else if (req.url === "/about") {
		// BLOCKING CODE
		for (let i = 0; i < 300; i++) {
			for (let j = 0; j < 100; j++) {
				console.log(`${j} and ${i}`);
			}
		}
		res.end("About Page");
	}
	else {
		res.end("Error Page");
	}

});

server.listen(5000, () => {
	console.log("Server is listening on port 5000 . . .");
});