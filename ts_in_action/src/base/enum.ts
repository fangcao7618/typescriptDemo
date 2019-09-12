//枚举类型  一组有名字的常量集合。
enum Flag {
    success = 1,
    error = 2
}
let s: Flag = Flag.success;
console.log(s);
let f: Flag = Flag.error;
console.log(f);

//数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

console.log(Role.Reporter);
console.log(Role);

//字符串枚举
enum Message {
    Success = "恭喜你，成功了",
    Fail = "抱歉，失败了"
}

console.log(Message);

//异构枚举
enum Answer {
    N,
    Y = "yew"
}
console.log(Answer);

//枚举成员
enum Char {
    //const 常量已经被计算了
    a, //没有初始值的
    b = Char.a, //对
    c = 1 + 3, //常量的表达式
    //computed 没有被计算，需要被计算的
    d = Math.random(),
    e = "123".length, // 需要被计算的，
    f = 4
}
//不会在编译阶段进行计算，保留到程序的执行阶段
console.log(Char);

//常量枚举 编译后没有任何的代码   当我们不需要对象，需要对象值时，就需要这个常量枚举，减少编译的代码
const enum Month {
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar];

//枚举类型
enum E {
    a,
    b
}
enum F {
    a = 0,
    b = 1
}
enum G {
    a = "apple",
    b = "banana"
}

let e: E = 3;
let n: F = 6;
// e === n
console.log("=======", e, n);

let e1: E.a = 1;
let e2: E.b;
// e1===e2
let e3: E.a = 1;
e1 === e3;

let g1: G = G.b;
let g2: G.a = G.a;
