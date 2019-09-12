/**
 * @description 类型检查机制（3）：类型保护
 * @enum {number}
 */
enum Type {
    Strong,
    Week
}
class Java {
    helloJava() {
        console.log("Hello Java");
    }
    java: any; //型保护方法二 in
}
class JavaScript {
    helloJavaScript() {
        console.log("Hello JavaScript");
    }
    javascript: any; //型保护方法二 in
}
//方法四
function isJava(lang: Java | JavaScript): lang is Java {
    console.log((lang as Java).helloJava);
    return (lang as Java).helloJava !== undefined;
}

//1.断言
// function getLanguage(type: Type) {
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//     if ((lang as Java).helloJava) {
//         (lang as Java).helloJava();
//     } else {
//         (lang as JavaScript).helloJavaScript();
//     }
//     return lang;
// }
//2.类型保护  instanceof
// function getLanguage(type: Type) {
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//     //instanceof
//     if (lang instanceof Java) {
//         lang.helloJava();
//     } else {
//         lang.helloJavaScript();
//     }
//     return lang;
// }
//3.类型保护方法二 in
// function getLanguage(type: Type) {
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//     //in
//     if ("java" in lang) {
//         lang.helloJava();
//     } else {
//         lang.helloJavaScript();
//     }
//     return lang;
// }
// getLanguage(Type.Strong);
//4.类型保护方法三 typeof
// function getLanguage(type: Type, x: string | number) {
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//     //typeof

//     if (typeof x === "string") {
//         x.length;
//     } else {
//         x.toFixed(2);
//     }

//     return lang;
// }
// getLanguage(Type.Strong, "");
//5.类型保护方法四
function getLanguage(type: Type) {
    let lang = type === Type.Strong ? new Java() : new JavaScript();
    //typeof

    if (isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    return lang;
}
getLanguage(Type.Week);
