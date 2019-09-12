//类与接口的关系
interface Human {
    // new (name: string): void;
    name: string;
    eat(): void;
}
class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    eat() {}
    sleep() {}
}
interface Man extends Human {
    run(): void;
}
interface Child {
    cry(): void;
}
interface Boy extends Man, Child {}

let boy: Boy = {
    name: "",
    run() {},
    eat() {},
    cry() {}
};

class Auto {
    state = 1;
    // private state2 = 0;
}
interface AutoInterface extends Auto {}
//实现
class CB implements AutoInterface {
    state = 1;
}

class Bus extends Auto implements AutoInterface {}
