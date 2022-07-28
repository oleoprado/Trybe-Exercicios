// forma verbosa
// const newUser = (id, name, email) => {
//   return {
//     id: id,
//     name: name,
//     email: email,
//   };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

///////////////////////////////////////////////
// usando shorthand
// const newUser = (id, name, email) => ({id, name, email})
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

///////////////////////////////////////////////////
// PARA FIXAR
// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));