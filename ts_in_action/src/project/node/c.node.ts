let c11 = require("./a.node");
let c22 = require("./b.node");
let c33 = require("../es6/a");
// import C4 = require("../es6/d"); or import C4 from "../es6/d";   "esModuleInterop": true 可以两种方式导入
// import C4 from "../es6/d"; //只有 "esModuleInterop": true 才支持
import C4 = require("../es6/d");

console.log(c11);
console.log(c22);
// c33();
// console.log(c33);
c33.default();
C4();
