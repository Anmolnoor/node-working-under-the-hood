const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
	console.log(req.url);
	//  Solution 1
	// fs.readFile("test-file.txt", (err, data) => {
	// 	if (err) console.log(err);
	// 	res.end(data);
	// });
	//  Solution 2 : Streaming into chunks of data from server with the back pressure (the data is sending by server more faster than the receiveing speed of the front-end server... )
	// const stream = fs.createReadStream("tests-file.txt");
	// stream.on("data", (chunk) => {
	// 	res.write(chunk);
	// });
	// stream.on("end", () => {
	// 	res.end();
	// });
	// stream.on("error", (err) => {
	// 	console.log(err);
	// 	res.statusCode = 500;
	// 	res.end("File not found!!");
	// });
	// Solution 3 : pipe method
	const readable = fs.createReadStream("test-file.txt");
	readable.pipe(res);
	readable.on("error", (err) => {
		console.log(err);
		res.statusCode = 500;
		res.end("File not found!!");
	});
});

server.listen(8000, "127.0.0.1", () => {
	console.log("listening..");
});
