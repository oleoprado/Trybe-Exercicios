class Superclass {
  isSuper: boolean;

  constructor() { this.isSuper = true; }

  public sayHello(): void {
    console.log('Hello world');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (objeto: Superclass) => {
  objeto.sayHello();
  console.log(objeto.isSuper ? 'Super!' : 'Sub!');
}

const soper = new Superclass();
const sub = new Subclass();

// myFunc(soper);
myFunc(sub);