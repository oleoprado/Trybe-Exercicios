const acordando = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(acordando));
console.log(doingThings(cafe));
console.log(doingThings(dormir));