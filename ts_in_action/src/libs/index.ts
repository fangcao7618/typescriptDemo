import $ from "jquery";

$(".app").css("color", "red");

globalLib({ x: 1 });
globalLib.doSomething();

import moduleLib from "./module-lib";
moduleLib.doSomething();

import umdLib from "./umd-lib";
// "allowUmdGlobalAccess": true 就可以不用导入了
umdLib.doSomething();

//给已经有的库添加一些自定义方法
import m from "moment";
declare module "moment" {
    export function myFunction(): void;
}
m.myFunction = () => {};

declare global {
    namespace globalLib {
        function doAnything(): void;
    }
}
globalLib.doAnything = () => {};

