/**
 * @description 泛型函数与泛型接口
 * @author wfc
 * @date 2019-09-11
 * @template T
 * @param {T} value
 * @returns {T}
 */
function log<T>(value: T): T {
    console.log(value);
    return value;
}
log<string[]>(["a", "b"]);
log(["a", "b"]);

// type Log = <T>(value: T) => T;
// let mylog: Log = log;
// console.log(mylog);

interface Log<T = string> {
    <T>(value: T): T;
}
let myLog: Log<number> = log;
myLog(1);
myLog("1");

/**
 * @description 泛型类与泛型的约束
 * @author wfc
 * @date 2019-09-11
 * @class Log
 * @template T
 */
class LogTwo<T> {
    run(value: T) {
        console.log(value);
        return value;
    }
}
let log1 = new LogTwo();
log1.run(1);
log1.run("1");
log1.run(["a", "b"]);
// log1.run({ ["a", "b"]});//不能传入对象
let log2 = new LogTwo<number>();
log2.run(1);
// log2.run("1");

interface Length {
    length: number;
}
function logT<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}
logT([1]);
logT("123");
logT({ length: 1 });
