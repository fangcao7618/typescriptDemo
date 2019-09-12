//高级类型（1）：
//交差类型
interface DogInterface {
    run(): void;
}
interface CatInterface {
    jump(): void;
}
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
};
//联合类型
let vv: number | string = "a";
let kk: "a" | "b" | "c";
let hh: 1 | 2 | 3;
class Dogv implements DogInterface {
    run() {}
    eat() {
        console.log("dog eat");
    }
}
class Catv implements CatInterface {
    jump() {}
    eat() {
        console.log("cat eat");
    }
}
enum Master {
    Boy,
    Girl
}
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dogv() : new Catv();
    pet.eat();
    // pet.run();
    return pet;
}

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    r: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        case "circle":
            return Math.PI * s.r ** 2;
        default:
            return ((e: never) => {
                throw new Error(e);
            })(s);
    }
}
console.log(area({ kind: "circle", r: 1 }));
