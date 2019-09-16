// import a = require("./amd");
let hello: string = "Hello TypeScript";
document.querySelectorAll(".app")[0].innerHTML = hello;

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

class A {
    a: number = 1;
    getA() {
        console.log("========1", this);
        return () => {
            console.log("========2", this);
            console.log(this.a);
        };
    }
    getB() {
        console.log("========3", this);
        return function() {
            console.log("========4", this);
        };
    }
}
let a = new A();
a.getA()();
a.getB()();

// import { util } from "./"; "rootDirs": ["src", "out"] //将多个目录放在一个虚拟目录下，用于运行时
