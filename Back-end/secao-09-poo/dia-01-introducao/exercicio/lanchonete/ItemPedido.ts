class ItemPedido {
  private _nome: string;
  private _preco: number;

  constructor(n: string, p: number) {
    this._nome = n;
    this._preco = p;
  }

  get nome(): string { return this._nome; }
  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve contem no minimo 3 caracteres')
    }
    this._nome = value;
  }

  get preco(): number { return this._preco; }
  set preco(value: number) {
    if (value < 0) throw new Error('O preço deve ser maior que zero')
    this._preco = value;
  }
  
}

export default ItemPedido;


