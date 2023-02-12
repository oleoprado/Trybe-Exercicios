import IEmployee from "./interface/Employee";
import Person from "./Person";
import Subject from "./Subject";

class Teacher extends Person implements IEmployee {
  private _registration: string;
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(name: string, birthDate: Date, private _salary: number, subject: Subject){
    super(name, birthDate);

    this._registration = this.generateRegistration();
    this._admissionDate = new Date();
    this._subject = subject;
    this._salary = _salary;
  }

  get subject(): Subject { return this._subject; };
  set subject(value: Subject) { this._subject = value; };

  get registration(): string { return this._registration; }
  set registration(value: string) {
    this.validateRegistration(value);
    this._registration = value;
  }

  get salary(): number { return this._salary; }
  set salary(value: number) {
    this.validateSalary(value);
    this._salary = value;
  }

  get admissionDate(): Date { return this._admissionDate; }
  set admissionDate(value: Date) {
    this.validateAdmissionDate(value);
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `PRF${randomStr}`;
  }

  validateRegistration(value: string): void {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres.');
    }
  }

  validateSalary(value: number): void {
    if (value < 0) throw new Error('O salário não pode ser negativo.');
  }

  validateAdmissionDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }
  }
}

export default Teacher;