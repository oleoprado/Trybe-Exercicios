class Cliente {
  private _nome: string;
  constructor(nome: string) { this._nome = nome }

  get nome(): string { return this._nome }
  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve contem no minimo 3 caracteres')
    }
    this._nome = value;
  }
  
}

export default Cliente;