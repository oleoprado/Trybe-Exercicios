const Redux = require('redux');

// 1 - Crie uma store para a nossa aplicação.
const store = Redux.createStore(reducer)
console.log(store);
// 2 - Crie um reducer, implementando um switch que retorne apenas o estado inicial como default.
const reducer = (state) => {
  switch(state) {
    default: state
  }
}