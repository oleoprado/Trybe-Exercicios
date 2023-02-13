abstract class Character1 {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character1): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter1 extends Character1 {
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

class LongRangeCharacter1 extends Character1 {
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

const yoshi1 = new MeleeCharacter1('Yoshi', 'Super alucinogeno');
const samus1 = new LongRangeCharacter1('Samus', 'cuspidão mortal');

// yoshi1.talk();
// yoshi1.specialMove();
// samus1.talk();
// samus1.specialMove();

Character1.characterPresentation(yoshi1);
Character1.characterPresentation(samus1);
