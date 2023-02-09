class Estudante {
  private _matricula: number;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(
    m: number,
    n: string,
    nP: number[],
    nT: number[]
  ) {
    this._matricula = m;
    this._nome = n;
    this._notasProva = nP;
    this._notasTrabalho = nT;
  }

  get soma() {
    const arrNotas = this._notasProva
      .concat(this._notasTrabalho).reduce((acc, cur) => acc + cur, 0);
    return console.log(`A soma das notas foi: ${arrNotas.toFixed(2)}`);
  }
  get media() {
    const qtdNota = this._notasProva
      .concat(this._notasTrabalho).length;
    const soma = this._notasProva
      .concat(this._notasTrabalho).reduce((acc, cur) => acc + cur, 0);
    return console.log(`A média das notas foi: ${(soma/qtdNota).toFixed(2)}`)
  }
}

const mariga = new Estudante(
  25420,
  'Carlos Marighela',
  [10,8,6,7],
  [6,8]
)

mariga.soma;
mariga.media;
