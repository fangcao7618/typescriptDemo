//原始类型
let bool: boolean = true;
//一个元素可能是 number类型 可能是null 可能是undefined
let num: number | undefined | null = 123;
let str: string = "123";

//数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let arr3: Array<number | string> = [1, 2, 3, "4"];

//元组
let tuple: [number, string] = [0, "1"];
//实际中，强烈不建议像下面这样使用
// tuple.push(2);
// console.log(tuple);
// console.log(tuple[1]);

//函数
let add = (x: number, y: number): number => x + y;
let add2 = (x: number, y: number) => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

//对象
// let obj: object = { x: 1, y: 2 }; 错误
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;

//symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1, s2, s1 === s2);

//undefined,null 定义没有赋值就是
let un: undefined = undefined;
let nu: null = null;
num = undefined;
num = null;

//void typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。   是一个类型，只不过是一个空类型
let noReturn = () => {};

//any 任意类型
let x;
x = 1;
x = [];
x = () => {};

//never 是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值 永远不会返回值的类型   表示不会有返回类型，死循环和报错属于此列
//1.抛出异常函数
let error = () => {
    throw new Error("error");
};
//2.死循坏函数
let endless = () => {
    while (true) {}
};
//这意味着声明never的变量只能被never类型所赋值。
let a: never;
