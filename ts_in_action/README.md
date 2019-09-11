# 开始配置 typescript

1.npm i typescript -g ----全局安装 typescript
2.tsc -h ----查看帮助信息
3.tsc --init ----创建 tsconfig.json

4.建立打包配置

-   webpack.base.config.js 基本配置，公用的
-   webpack.config.js 公用的入口配置
-   webpack.dev.config.js 开发环境
-   webpack.pro.config.js 生产环境

5.更改 package.json

```json
"scripts": {
    "start": "webpack-dev-server --mode=development --config ./build/webpack.config.js",//指定开发环境启动，指定开发配置文件
    "build": "webpack --mode=production --config ./build/webpack.config.js"//指定生产打包，指定生产配置文件
}
```

6.运行

```bash
yarn start or npm run start //开启开发环境启动
yarn build or npm run build //打包
```

# 基本类型

# 函数类型接口

# 对象类型接口

# 函数相关知识点梳理

# 类的继承和成员修饰

# 抽象类与多态

# 类与接口的关系
