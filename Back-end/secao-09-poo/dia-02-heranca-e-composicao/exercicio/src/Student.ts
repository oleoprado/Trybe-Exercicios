import Person from "./Person"

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string { return this.enrollment; }
  set enrollment(value: string) {
    this.validateEnrollment(value);
    this._enrollment = value;
  }

  get examsGrades(): number[] { return this._examsGrades; }
  set examsGrades(value: number[]) {
    this.validateExamsGrades(value);
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] { return this._assignmentsGrades; }
  set assignmentsGrades(value: number[]) {
    this.validateAssignmentGrades(value)
    this._assignmentsGrades = value;
  }

  //esse método gera um id de inscrição aleatório baseado na data de cadastro da pessoa estudante
  private generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  private validateEnrollment(value: string): void {
    if (value.length < 16) throw new Error('A matricula deve possuir no mínimo 16 caracteres');
  }

  private validateExamsGrades(value: number[]): void {
    if (value.length > 4) throw new Error('A pessoa estudante só pode ter 4 notas de exame');
  }

  private validateAssignmentGrades(value: number[]): void {
    if (value.length > 2) throw new Error('A pessoa estudante só pode ter 2 notas de trabalho');
  }
}