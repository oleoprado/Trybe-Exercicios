export default class Subject {
  private _subject: string;

  constructor(subject: string) {
    this.validateSubject(subject);
    this._subject = subject;
  }

  get subject(): string { return this._subject; }
  set subject(value: string) {
    this.validateSubject(value);
    this._subject = value;
  }

  private validateSubject(value: string): void {
    if (value.length < 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres');
  }
}