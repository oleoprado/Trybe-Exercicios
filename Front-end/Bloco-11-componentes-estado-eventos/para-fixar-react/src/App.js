import React from 'react';
import './App.css';
import Buttons from './Components/fancy-buttons';

class App extends React.Component {
  render() {
    return (
      <div>
        <Buttons esquerda="esquerda" centro="centro" direita="direita" />
      </div>
    )
  }
}

export default App;
