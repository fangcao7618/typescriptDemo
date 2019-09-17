# TypeScript 开发实战

强类型语言中，当一个对象从调用函数传递到被调用函数时，其类型必须与被调用函数中声明的类型兼容。

强类型语言：不允许改变变量的数据类型，除非进行强制类型转换；

弱类型语言：变量可以被赋予不同的数据类型；

静态类型语言：在`编译阶段`确定所有变量的类型

动态类型语言：在`执行阶段`确定所有变量的类型，不允许程序在发生错误后继续执行

| 静态类型语言   | 动态类型语言的区别       |
| -------------- | ------------------------ |
| 对类型极度严格 | 对类型非常宽松           |
| 立即发现错误   | Bug 可能隐藏数月甚至数年 |
| 运行是性能好   | 运行时性能差             |
| 自文档化       | 可读性差                 |

动态类型语言的支持者认为：

-   性能是可以改善的（V8 引擎），而语言的灵活性更重要
-   隐藏的错误可以通过单元测试发现
-   文档可以通过工具生成

参考教程：

[TypeScript 入门教程](https://ts.xcatliu.com/basics/declaration-files)

[Class](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)

[TypeScript runoob 网教程](https://www.runoob.com/typescript/ts-ambient.html)

分支：

-   `typescript-babel` typescript、babel 结合，还有 JEST 测试
-   `gongcheng` 工程篇
-   `gongchengyinyong` 工程篇
-   `master` 基础篇

# 实战篇

## 创建项目

### 创建 react 项目一

npm i react react-dom
npm i @types/react @types/react-dom -D

### 创建 react 项目二

create-react-app ts-react-app --typescript
[ts-react-app]

