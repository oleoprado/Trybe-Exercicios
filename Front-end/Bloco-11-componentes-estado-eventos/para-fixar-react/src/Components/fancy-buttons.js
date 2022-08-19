import React from "react";

function ClickEsquerda () {
  console.log('clicou na esqueda');
}
function ClickCentro () {
  console.log('clicou na centro');
}
function ClickDireita () {
  console.log('clicou na direita');
}

class Buttons extends React.Component {
  render() {
    const { esquerda, centro, direita } = this.props;
    return (
      <span>
        <button onClick={ ClickEsquerda }>{ esquerda }</button>
        <button onClick={ ClickCentro }>{ centro }</button>
        <button onClick={ ClickDireita }>{ direita }</button>
      </span>
    )
  }
}

export default Buttons;
