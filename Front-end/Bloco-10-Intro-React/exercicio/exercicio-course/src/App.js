import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const compromissos = ['estudar react', 'ir ao dentista', 'aniversario final de semana', 'pagar internet', 'comprar ração', 'supermercado', 'ler um livro']
const jsxCompromissos = compromissos.map((compromisso) => Task(compromisso));
class App extends React.Component {
  render() {
    return (
      <ul>
        {jsxCompromissos}
      </ul>
    )
  }
}

export default App;
