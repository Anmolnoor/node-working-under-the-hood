// console.log(arguments);
// console.log(require("module").wrapper);

//   --- module.exports ---
const C = require("./tm-1");
const cal1 = new C();
console.log(cal1.add(6, 18));

//   --- exports ---
const { mul } = require("./tm-2");
console.log(mul(6, 18));

//   --- caching ---
require("./tm-3")();
require("./tm-3")();
require("./tm-3")();
