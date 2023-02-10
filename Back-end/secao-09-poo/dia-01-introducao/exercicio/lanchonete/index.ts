//index.ts
import Cliente from './Cliente';
import Pedido from './Pedido';
import ItemPedido from './ItemPedido';

const client = new Cliente('João');

const sandwich = new ItemPedido('Sanduíche Natural', 5.00);
const juice = new ItemPedido('Suco de Abacaxi', 5.00);
const dessert = new ItemPedido('Gelatina de Uva', 2.50);

const order = new Pedido(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log(`O total do seu pedido: ${order.total()}`);
console.log(`Aplicado o desconto de ${order.desconto}, total: ${order.totalComDesconto()}`);

