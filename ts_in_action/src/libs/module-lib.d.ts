/**
 * 模块的类库的声明文件
 */
declare function moduleLib(options: Options): void;
interface Options {
    [key: string]: any;
}
declare namespace moduleLib {
    const version: string;
    function doSomething(): void;
}

export = moduleLib;
