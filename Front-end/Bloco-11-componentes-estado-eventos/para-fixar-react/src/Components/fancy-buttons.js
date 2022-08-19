import React from "react";

class Buttons extends React.Component {
  constructor() {
    super();
    this.clickEsquerda = this.clickEsquerda.bind(this);
    this.clickCentro = this.clickCentro.bind(this);
    this.clickDireita = this.clickDireita.bind(this);
  }

  state = {
    numClickEsq: 0,
    numClickCent: 0,
    numClickDir: 0
  }
  clickEsquerda = () => this.setState((estadoAnterior, _props) => ({numClickEsq: estadoAnterior.numClickEsq + 1}));
  clickCentro = () => this.setState((estadoAnterior, _props) => ({numClickCent: estadoAnterior.numClickCent + 1}));
  clickDireita = () => this.setState((estadoAnterior, _props) => ({numClickDir: estadoAnterior.numClickDir + 1}));
  
  render() {
    // console.log(this);
    // const { esquerda, centro, direita } = this.props;
    const { numClickEsq, numClickCent, numClickDir } = this.props;
    return (
      <span>
        {console.log(this.state)};
        <button onClick={ this.clickEsquerda }>{ numClickEsq }</button>
        <button onClick={ this.clickCentro }>{ numClickCent }</button>
        <button onClick={ this.clickDireita }>{ numClickDir }</button>
      </span>
    )
  }
}

export default Buttons;
