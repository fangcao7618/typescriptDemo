// import a = require("./amd");
let hello: string = "Hello TypeScript";
document.querySelectorAll(".app")[0].innerHTML = hello;

hello = 1;
document.body.addEventListener(
    "click",
    function() {
        console.warn("2");
    },
    false
);
document.body.click(); // 模拟用户点击
