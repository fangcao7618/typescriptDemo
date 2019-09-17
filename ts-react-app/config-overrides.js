const { override, fixBabelImports } = require("customize-cra");
console.log("antd");
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css"
    })
);
