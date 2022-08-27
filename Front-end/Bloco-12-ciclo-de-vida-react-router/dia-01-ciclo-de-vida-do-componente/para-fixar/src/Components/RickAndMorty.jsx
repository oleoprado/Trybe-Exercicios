import React from 'react';

import './App.css';

class RickAndMorty extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
    }
  }

  // pode fazer assim com then
  // componentDidMount(){
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({characters: data.results})
  //   })
  // }

  // ou assim com async await
  
  async fetchRickAndMorty() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const requestObject = await response.json()
    this.setState({
      characters: requestObject.results
    })
  }

  componentDidMount() {
    this.fetchRickAndMorty()
  }

 

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
export default RickAndMorty;
