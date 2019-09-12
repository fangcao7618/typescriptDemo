/**
 * 高级类型（2）：高级索引
 */
let obj1 = {
    a: 1,
    b: 2,
    c: 3
};
// function getValues(obj: any, keys: string[]) {
//     return keys.map(key => obj[key]);
// }
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}
console.log(getValues(obj1, ["a", "b", "c", "c"]));
// console.log(getValues(obj1, ["a", "f"]));

//keyof T
interface Obj {
    a: number;
    b: number;
}
let key: keyof Obj;

//T[K]
let value: Obj["a"];

// T extends U 泛型变量继承网络类型获取某些变量
