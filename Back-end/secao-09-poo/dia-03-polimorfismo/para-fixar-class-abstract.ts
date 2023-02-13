abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Olá, eu sou ${this._name}. Eu ataco perto.`);
  }
  specialMove(): void {
    console.log(`${this._name} usou ${this._specialMoveName}!`);
    ;
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Olá, eu sou ${this._name}. Eu posso atacar de longe.`);
  }
  specialMove(): void {
    console.log(`${this._name} usou ${this._specialMoveName}!`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super alucinogeno');
const samus = new LongRangeCharacter('Samus', 'cuspidão mortal');

yoshi.talk();
yoshi.specialMove();
samus.talk();
samus.specialMove();
