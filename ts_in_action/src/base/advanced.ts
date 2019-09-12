//类型检查机制（1）：类型判断
let ac = 1;
let b = [1, null];

let c = (x = 1) => x + 1;

window.onkeydown = (event: any) => {
    console.log(event);
};

interface Foo {
    bar: number;
}
//1
let foo1 = {} as Foo;
foo1.bar = 1;
//2
let foo2: Foo = { bar: 1 };

//类型检查机制（2）：类型兼容性
//当一个类型 Y 可以被赋值给另外一个类型 X 时，我们就可以说类型 X 兼容类型 Y
//X 兼容 Y：X（目标类型）=Y（源类型）
let sv: string = "a";
// sv = null; //更改 tsconfig.json "strictNullChecks": false
//接口兼容性
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}

let x1: X = { a: 1, b: 1 };
let y1: Y = { a: 1, b: 1, c: 1 };

x1 = y1;

// y1 = x1;

//函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
    return handler;
}
//1)参数个数
let handler1 = (a: number) => {};
hof(handler1);

let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2);

//可选参数和剩余参数
let a1 = (p1: number, p2: number) => {};
let b1 = (p1?: number, p2?: number) => {};
let c1 = (...args: number[]) => {};

a1 = b1;
a1 = c1;
//可选参数是不兼容剩余参数，如果改了tsconfig.json就兼容了；剩余参数
// b1 = c1;
// b1 = a1;
//剩余参数兼容可选参数
c1 = a1;
c1 = b1;

//2）参数类型
let handler3 = (a: string) => {};
// hof(handler3);

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d; //参数多兼容参数少的
// p2d=p3d  p2d不兼容p3d  成员个数少不兼容成员多
//如果要p2d=p3d 更改 tsconfig.json  "strictFunctionTypes": false
// p2d = p3d;

//3)返回值类型
let f1 = () => ({ name: "Alice" });
let g = () => ({ name: "Alice", location: "Beijing" });
f1 = g;
// g=f1

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

//枚举兼容性
enum Message {
    Success1 = 1111111,
    Fail1 = "抱歉，失败了"
}
let ccv: Message.Success1 = 2222;
// let ccv2: Message.Fail1 = 1111111;
enum Fruit {
    Apple,
    Banana
}
// enum Color {
//     Redv1,
//     Yellow
// }
console.log(Fruit);
//枚举类型和数据类型是可以完全兼容的;枚举之间是完全不兼容的
let fruit: Fruit.Banana = 10;
let no: number = Fruit.Banana;
// let color: Color.Redv1 = Fruit.Apple;

//类兼容性
class A {
    constructor(p: number, q: number) {}
    id: number = 1;
    private name: string = "";
}
class B {
    constructor(p: number) {}
    id: number = 2;
    private name: string = "";
}
let aa = new A(1, 2);
let bb = new B(1);

// aa = bb;
// bb = aa;

class CC extends A {}
let cc = new CC(1, 2);
aa = cc;
cc = aa;

//泛型兼容性
interface Empty<T> {
    value: T;
}

// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2;

let logg1 = <T>(x: T): T => {
    console.log("x");
    return x;
};

let logg2 = <U>(y: U): U => {
    console.log("y");
    return y;
};
logg1 = logg2;
logg2 = logg1;
