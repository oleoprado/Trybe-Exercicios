class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(
    m: string,
    n: string,
  ) {
    this._matricula = m;
    this._nome = n;
    this._notasProva = [];
    this._notasTrabalho = [];
  }

  get matricula(): string { return this._matricula; }
  set matricula(value: string) { this._matricula = value; }

  get nome(): string { return this._nome; }
  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve contem no mínimo 3 caracteres')
    }
    this._nome = value;
  }

  get notasProva(): number[] { return this._notasProva }
  set notasProva(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A pessoa estudante tem que possuir 4 notas de prova')
    }
    this._notasProva = value;
  }

  get notasTrabalho(): number[] { return this._notasTrabalho }
  set notasTrabalho(value: number[]) {
    if (value.length !== 2) {
      throw new Error('A pessoa estudante tem que possuir 2 notas de trabalho')
    }
    this._notasTrabalho = value;
  }

  soma(): number {
    const soma = this._notasProva
      .concat(this._notasTrabalho).reduce((acc, cur) => acc + cur, 0);
    return soma;
  }
  media(): number {
    const soma = this.soma();
    const divisao = this._notasProva.concat(this._notasTrabalho).length;
    
    return Math.round(soma/divisao);
  }
}

const mariga = new Estudante(
  '25420',
  'Carlos Marighela',
)
mariga.matricula = '025588888'
mariga.nome = 'Derbão brabo'
mariga.notasProva = [10,5,6,8]
mariga.notasTrabalho = [7,9]
// console.log('matricula:', mariga.matricula);
// console.log('nome:', mariga.nome);
// console.log('notaProva:', mariga.notasProva);
// console.log('notaTrabalho:', mariga.notasTrabalho);
console.log('soma das notas:', mariga.soma());
console.log('media das notas:', mariga.media());

