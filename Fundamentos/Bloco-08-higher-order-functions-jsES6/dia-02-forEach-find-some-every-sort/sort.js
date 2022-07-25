// ordenado string em ordem alfabetica.
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

const arr = ['z', 'l', 'p', 'a', 'm', 'c', 'b', 'y'];

console.log(arr.sort());

// ordenando numeros:
// crescente:
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); 
// decrescente:
const arrNum = [1,2,3,4,5,6,7,8,9,10];
arrNum.sort((a, b) => b - a);
console.log(arrNum);

// ordenando objetos
// ordenando ordem alfabetica pela propriedade name do obj
const gamers = [
  {
    name: 'Bob',
    points: [0, 100, 10, 10, 5, 20]
  },
  {
    name: 'Carlo',
    points: [3, 20, 10, 10, 10]
  },
  {
    name: 'Ana',
    points: [5, 10, 40, 100, 50, 120]
  },
  {
    name: 'Leo',
    points: [100, 100, 70, 10, 35, 10]
  },
]
gamers.sort((a, b) => a.name > b.name ? 1 : -1);

// ordenando pela propriedade points (pontuação) de forma crescente
gamers.sort((a,b) => {
  let pointsA = 0;
  let pointsB = 0;
  a.points.forEach((elemento) => pointsA += elemento);
  b.points.forEach((elemento) => pointsB += elemento);
  return pointsA - pointsB;
})
console.log(gamers);
//////////////////////////////////////

