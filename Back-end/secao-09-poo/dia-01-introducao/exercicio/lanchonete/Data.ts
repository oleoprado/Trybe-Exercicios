class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes: number, ano: number) {
    // note que esse método não é chamado a partir do this, e sim a partir do Data
    // isso acontece pois ele é estático, ou seja, não está vinculado a nenhuma instância
    if (!Data.validateDate(dia, mes, ano)) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }

  get dia(): number { return this._dia; }
  set dia(value: number) { this._dia = value; }

  get mes(): number { return this._mes; }
  set mes(value: number) { this._mes = value; }

  get ano(): number { return this._ano; }
  set ano(value: number) { this._ano = value; }

  getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    return months[this.mes - 1];
  }

  isLeapYear(): boolean {
    return this._ano % 4 === 0;
  }

  compare(date: Data): number {
    const currentDateStr = `${this.ano}-${this.mes}-${this.ano}`;

    const dateStr = `${date.ano}-${date.mes}-${date.ano}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }

  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this.dia > 9 ? this.dia.toString() : `0${this.dia.toString()}`;
    const month = this.mes > 9 
      ? this.mes.toString() 
      : `0${this.mes.toString()}`;
    const year = this.ano.toString();

    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName()).replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }

  // esse método é estático pois ele não precisa acessar o `this` em momento algum
  // logo, não precisa estar vinculado a nenhuma instância
  private static validateDate(dia: number, mes: number, ano: number)
    : boolean {
    const dateStr = `${ano}-${mes}-${dia}`;

    if (new Date(dateStr).getDate() !== dia) return false;

    return true;
  }

}
export default Data;

const testDate = new Data(1,12,1989)

console.log(testDate);
console.log('Dia: ', testDate.dia);
console.log('Mês: ', testDate.mes);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.ano);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
const invalidDate = new Data(31, 2, 2021);
console.log('Teste data inválida: ', invalidDate);

// formato inválido
// console.log(invalidDate.format('a m d'));