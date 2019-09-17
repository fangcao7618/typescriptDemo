import React from "react";
import ReactDOM from "react-dom";
// import Hello from "./components/demo/Hello";
// import HelloClass from "./components/demo/HelloClass";
// import HelloHOC from "./components/demo/HelloHOC";
import HelloHooks from "./components/demo/HelloHooks";

ReactDOM.render(
    // <HelloClass name="TypeScript" />,
    // <HelloHOC name="TypeScript" loading={false}></HelloHOC>,
    <HelloHooks name="TypeScript"></HelloHooks>,
    document.getElementById("root")
);
