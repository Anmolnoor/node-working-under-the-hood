const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
	constructor() {
		super();
	}
}

const myEvent = new Sales();

myEvent.on("newSale", () => {
	console.log("Huurrreee!, There is a new sale");
});

myEvent.on("newSale", () => {
	console.log("customer name : Anmol Noor");
});
myEvent.on("newSale", (stock) => {
	console.log(`there are only ${stock} items in the Stocks`);
});

myEvent.emit("newSale", 9);

//    HTTP EVENTS HOW IT IS WORKING UNDER THE HOOD

const server = http.createServer();

server.on("request", (req, res) => {
	console.log(req.url);
	console.log("getARequest!!");
	res.end("Request Received");
});
server.on("request", (req, res) => {
	console.log("getAnotherRequest!! 😁");
});

server.listen(8000, "127.0.0.1", () => {
	console.log("Server is waiting for request on port 8000");
});
