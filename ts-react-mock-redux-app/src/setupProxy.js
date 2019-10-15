const proxy = require("http-proxy-middleware");

// module.exports = function(app) {
//     app.use(
//         // proxy("/api/**/*.action", {
//         //     target: "http://localhost:4000",
//         //     pathRewrite(path) {
//         //         return path.replace("/api", "/").replace(".action", ".json");
//         //     }
//         // })
//         proxy("/api", {
//             target: "http://localhost:4000"
//         })
//     );
// };
module.exports = function(app) {
    // app.use(
    //     // proxy("/api/**/*.action", {
    //     //     target: "http://localhost:4000",
    //     //     pathRewrite(path) {
    //     //         return path.replace("/api", "/").replace(".action", ".json");
    //     //     }
    //     // })
    //     proxy("/api", {
    //         target: "http://localhost:4000"
    //     })
    // );
    // app.use(
    //     proxy("/api", {
    //         target: "http://localhost:4000",
    //         pathRewrite(path) {
    //             return path.replace(/^\/api([^?]+)/, "$1.json");
    //         }
    //     })
    // );
    // app.use(
    //     proxy("/api", {
    //         target: "http://localhost:4000"
    //     })
    // );
    app.use(
        proxy("/api", {
            target: "http://localhost:4001"
        })
    );
};
