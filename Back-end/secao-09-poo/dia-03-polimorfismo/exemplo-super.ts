class Animal2 {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird2 extends Animal2 {
  move() {
    super.move();
    console.log(`${this.name} está voando.`);
  }
}
class Mammal2 extends Animal2 {
  move() { console.log(`${this.name} está andando.`); }
}

const a1 = new Animal2('Tubarão');
const b1 = new Bird2('Papagaio');
const m1 = new Mammal2('Tatu');

const myMove1 = (animal: Animal) => {
  animal.move();
}
myMove1(a1);
myMove1(b1);
myMove1(m1);

/*
Saída:
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está andando.
*/