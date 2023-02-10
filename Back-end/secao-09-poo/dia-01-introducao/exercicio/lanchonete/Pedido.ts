import Cliente from "./Cliente";

class Pedido {
  private _cliente: Cliente;
  private _itensConsumidos: string[];
  private _formaDePagamento: string;
  private _desconto?: number;

  constructor(
    cliente: Cliente,
    intensConsumidos: string[],
    formaDePagamento: string,
    desconto?: number
  ) {
    this._cliente = cliente;
    this._itensConsumidos = intensConsumidos;
    this._formaDePagamento = formaDePagamento;
    this._desconto = desconto;
  }

}

export default Pedido;