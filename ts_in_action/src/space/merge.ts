//接口的合并
interface AV {
    x: number;
    // y: string;
    foo(bar: number): number; //查找顺序：3 ======5
    foo(bar: "a"): number; //=====2
}
interface AV {
    y: number;
    foo(bar: string): string; //查找顺序：1 ======3
    foo(bar: number[]): number[]; //查找顺序：2 ======4
    foo(bar: "b"): number; // =====1 有明确的值查找顺序
}

let a: AV = {
    x: 1,
    y: 1,
    foo(bar: any) {
        return bar;
    }
};

//命名空间和函数的合并
function Lib() {}
namespace Lib {
    export let version = "1.0.0";
}
console.log(Lib, Lib.version);

class C {}
namespace C {
    export let state = 1;
}
console.log(C.state);

namespace Color {
    export function mix() {}
}
enum Color {
    Reds,
    Yellows,
    Blue
}
console.log(Color);
