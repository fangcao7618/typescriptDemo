//抽象类与多态
abstract class Animal {
    eat() {
        console.log("eat");
    }
    abstract sleep(): void;
}
// let animal=new Animal()

class Dogs extends Animal {
    constructor(name: string) {
        super();
        this.name = name;
    }
    public name: string;
    run() {}
    private pri() {}
    protected pro() {}
    readonly legs: number = 4;
    static food: string = "bones";
    sleep() {
        console.log("dogs sleep");
    }
}

let dogs = new Dogs("wangwang");
dogs.eat();

//多态
class Cat extends Animal {
    sleep() {
        console.log("Cat sleep");
    }
}
let cat = new Cat();

let animals: Animal[] = [dogs, cat];
animals.forEach(i => {
    i.sleep();
});

//链式调用
class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

let work = new WorkFlow().step1().step2();
console.log("======", work);

class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}
let works = new MyFlow()
    .next()
    .step1()
    .next()
    .step2();
console.log("======", works);

//类的继承和成员修饰
class Dog {
    constructor(name: string) {
        this.name = name;
    }
    public name: string;
    run() {}
    private pri() {}
    protected pro() {}
    readonly legs: number = 4;
    static food: string = "bones";
}
console.log(Dog.prototype);
let dog = new Dog("wangwang");
console.log(dog);
// dog.pri()
// dog.pro()
console.log(dog.legs);
console.log(Dog.food); //dog.food() bukeyi

class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name);
        this.color = color;
        // this.pri()
        this.pro();
    }
    // color: string;
}

let husky = new Husky("lion", "gray");
console.log(husky);

console.log(Husky.food);
