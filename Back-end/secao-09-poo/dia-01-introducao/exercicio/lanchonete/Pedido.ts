import Cliente from "./Cliente";
import ItemPedido from "./ItemPedido";

class Pedido {
  private _cliente: Cliente;
  private _itensConsumidos: ItemPedido[] = [];
  private _formaDePagamento: string;
  private _desconto = 0;

  constructor(
    cliente: Cliente,
    itens: ItemPedido[],
    formaDePagamento: string,
    desconto: number
  ) {
    this._cliente = cliente;
    this._itensConsumidos = itens;
    this._formaDePagamento = formaDePagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente { return this._cliente; }
  set cliente(value: Cliente) { this._cliente = value }

  get itensConsumidos(): ItemPedido[] { return this._itensConsumidos }
  set itensConsumidos(value: ItemPedido[]) {
    if (!value.length) throw new Error('O pedido deve ter pelo menos um item.');
    this._itensConsumidos = value;
  }

  get formaDePagamento(): string { return this._formaDePagamento }
  set formaDePagamento(value: string) { this._formaDePagamento = value}

  get desconto(): number { return this._desconto }
  set desconto(value: number) {
    if (value < 0) throw new Error('O desconto não pode ser menor que zero');
    this._desconto = value;
  }

  total(): number {
    return this._itensConsumidos.reduce((acc, cur) => {
      
      return (acc + cur.preco);
    }, 0)
  }

  totalComDesconto(): number {
    const desconto = this.total() * this._desconto;
    return this.total() - desconto;
  }
}

export default Pedido;