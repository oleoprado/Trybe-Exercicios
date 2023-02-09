class Estudante {
  matricula: number;
  nome: string;
  notasProva: number[];
  notasTrabalho: number[];

  constructor(m: number, n: string, nP: number[], nT: number[]) {
    this.matricula = m;
    this.nome = n;
    this.notasProva = nP;
    this.notasTrabalho = nT;
  }
}

const mariga = new Estudante(
  25420,
  'Carlos Marighela',
  [10,8,6,7],
  [6,8]
)

