import Car from "./Car";
import Pizza from "./Pizza";

const gol = new Car('gol', 'prata', 4)

gol.turnOn();
gol.speedDown();
gol.speedUp();
gol.turn('Esquerda');
gol.speedUp();
gol.speedDown()
gol.turn('Direita');
gol.speedUp();
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.turn('Direita');
gol.speedUp();
gol.speedDown()
gol.stop();

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

const mareguerita: Pizza = {
  flavor: 'Mareguerita',
  slices: 6,
}

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4,
}
