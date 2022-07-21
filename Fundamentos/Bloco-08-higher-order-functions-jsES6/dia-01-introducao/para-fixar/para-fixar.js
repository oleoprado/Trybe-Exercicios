const acordando = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => func();

// console.log(doingThings(acordando));
// console.log(doingThings(cafe));
// console.log(doingThings(dormir));

const sum = (num1, num2) => num1 + num2; 
const sub = (num1, num2) => num1 - num2; 
const div = (num1, num2) => num1 / num2; 
const mult = (num1, num2) => num1 * num2; 

const calculator = (func) => func(10, 5);

console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(div));
console.log(calculator(mult));
