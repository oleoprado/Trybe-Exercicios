import React from "react";

class Buttons extends React.Component {
  // constructor() {
  //   super();
  //   this.clickEsquerda = this.clickEsquerda.bind(this);
  //   this.clickCentro = this.clickCentro.bind(this);
  //   this.clickDireita = this.clickDireita.bind(this);
  // }

  state = {
    numClickEsq: 0,
    numClickCent: 0,
    numClickDir: 0
  }

  clickEsquerda = () => this.setState((estadoAnterior) => ({numClickEsq: estadoAnterior.numClickEsq + 1}));
  clickCentro = () => this.setState((estadoAnterior) => ({numClickCent: estadoAnterior.numClickCent + 1}));
  clickDireita = () => this.setState((estadoAnterior) => ({numClickDir: estadoAnterior.numClickDir + 1}));
  
  render() {
    // console.log(this);
    // const { esquerda, centro, direita } = this.props;
    // const { numClickEsq, numClickCent, numClickDir } = this.props;
    return (
      <span>
        <button onClick={ this.clickEsquerda }>{ this.state.numClickEsq}</button>
        <button onClick={ this.clickCentro }>{ this.state.numClickCent }</button>
        <button onClick={ this.clickDireita }>{ this.state.numClickDir }</button>
      </span>
    )
  }
}

export default Buttons;
