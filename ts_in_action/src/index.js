"use strict";
// import a = require("./amd");
var helloc = "Hello TypeScript";
document.querySelectorAll(".app")[0].innerHTML = helloc;
//es2019
console.log([1, 2, [3, 4]].flat());
// class A {}
// class B extends A {}
// export = B;
// let a = [1, 2, 3];
// let b = [1, ...a];
// function add(x: number, y: number) {
//     return x + y;
// }
// add.call(undefined, 1, "2");
var A = /** @class */ (function () {
    function A() {
        this.a = 1;
    }
    A.prototype.getA = function () {
        return function () {
            console.log(this);
            console.log(this.a);
        };
    };
    return A;
}());
var a = new A().getA();
a();
