// As props são umas das partes mais importantes de um componente. São por elas que você passa os valores para o componente, e é como o torna reutilizável em diferentes contextos.

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;

//Agora o chamamos dentro do componente App:

import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
    </main>
  );
}

// export default App;
// Ao atribuir as props name e lastName ao componente Greeting, o React automaticamente monta um objeto contendo as informações passadase as disponibiliza para o componente
// Esse objeto props, por sua vez, é passado para o componente Greeting, o qual poderá resgatar tanto o nome como o sobrenome através do this.props.name e this.props.lastName.