// você deve criar um arquivo para manter todo o seu CSS e então deverá importá-lo onde você deseja utiliza-lo e colocar as classes e ids que você criou nos elementos da sua página.
/* App.css */
.App {
  background-color: #282c34;
  text-align: center;
}

// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
    </div>
  );
}

export default App;