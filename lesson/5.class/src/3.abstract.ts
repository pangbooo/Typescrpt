abstract class P {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    run() {
        console.log('run')
    }

    abstract sayHello(): void;
}

class B extends P{
    sayHello() {
        console.log('aaaa')
    }
}