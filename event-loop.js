const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("timer 1 finish"), 0);
setImmediate(() => console.log("1 Immediate finish"));

fs.readFile("test-file.txt", () => {
	console.log("i/o file read ");
	console.log("--- --- --- ---");
	setTimeout(() => console.log("timer 2 finish"), 1500);
	setTimeout(() => console.log("timer 3 finish"), 3000);
	setImmediate(() => console.log("2 Immediate finish"));

	process.nextTick(() => console.log("process.nextTick"));

	crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
		console.log(Date.now() - start, "password incrypted!!");
	});
	crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
		console.log(Date.now() - start, "password incrypted!!");
	});
	crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
		console.log(Date.now() - start, "password incrypted!!");
	});
	crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
		console.log(Date.now() - start, "password incrypted!!");
	});

	//  CODE BLOCKING SYCN VERSION OF IT
	// crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
	// console.log(Date.now() - start, "password incrypted!!");
	// crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
	// console.log(Date.now() - start, "password incrypted!!");
	// crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
	// console.log(Date.now() - start, "password incrypted!!");
	// crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
	// console.log(Date.now() - start, "password incrypted!!");
});

console.log("hello from the top level code ");
