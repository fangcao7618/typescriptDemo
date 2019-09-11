//对象类型接口
interface List {
    readonly id: number;
    name: string;
    // [x: string]: any; //4.
    age?: number; //这个属性可有可无
}
interface Result {
    data: List[];
}
function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        // value.id++
    });
}
let result = {
    data: [{ id: 1, name: "A", sex: "maile" }, { id: 2, name: "B", age: 10 }]
};

// //4.
// render({
//     data: [{ id: 1, name: "A", sex: "maile" }, { id: 2, name: "B" }]
// });

//1.
render(result);
// //2.
// render({
//     data: [{ id: 1, name: "A", sex: "maile" }, { id: 2, name: "B" }]
// } as Result);
// //3.
// render(<Result>{
//     data: [{ id: 1, name: "A", sex: "maile" }, { id: 2, name: "B" }]
// });

interface StringArray {
    [index: number]: string;
}
let chars: StringArray = ["A", "B"];

interface Names {
    [x: string]: any;
    // y: number;
    [z: number]: number;
}
let chars2: Names = [1, 2, 3, 4, 5];

interface LabelledObj {
    label: string;
}
function printLabel(labelledObj: LabelledObj) {
    console.log("========", labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        console.log(config.color);
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        console.log(config.width);
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });
let mySquare2 = createSquare({ width: 500 });

//函数类型接口

//等价方式下面：例如：
let Add1: (x: number, y: number) => number;
//||
// interface Add {
//     (x: number, y: number): number;
// }
//这两种是等价的

type Add = (x: number, y: number) => number;
//实现具体的函数
let addc: Add = (a, b) => a + b;

//混合类型的接口
interface Lib {
    (): void;
    version: string;
    doSomething(name: string): void;
}
//实现
function getLib() {
    let lib: Lib = (() => {}) as Lib;
    lib.version = "1.0";
    lib.doSomething = name => {
        console.log(name);
    };
    return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething("wfc");

let lib2 = getLib();
lib2();
lib2.doSomething("fangcao");
lib2.version;
