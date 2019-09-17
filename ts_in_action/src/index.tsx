// import a = require("./amd");
// let hello: string = "Hello TypeScript";
// document.querySelectorAll(".app")[0].innerHTML = hello;

import React from "react";
import ReactDom from "react-dom";

import Hello from "./components/demo/Hello";

ReactDom.render(
    <Hello name="TypeScript!" />,
    document.querySelectorAll(".app")[0]
);
