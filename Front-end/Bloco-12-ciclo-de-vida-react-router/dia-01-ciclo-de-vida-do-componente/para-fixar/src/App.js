import React from 'react';
// import Counter from './Components/Counter';
import PersonDetails from './Components/PersonDetails';

import './App.css';

class App extends React.Component {
  state = {
    users: [],
    carregandoApi: true,
  }
  
  fetchUsers = async () => {
    const URL = await fetch('https://api.randomuser.me/');
    const response = await URL.json();
    const data = response.results;
    this.setState({
      users: data,
      carregandoApi: false,
      idadeMaior50: false,
    })
    // console.log(data, 'carregou didMount');
  }

  componentDidMount() {
    // console.log('component did mount');
    this.fetchUsers();
  }

  shouldComponentUpdate(_nextProps, { users }) {
    const { dob:{ age } } = users[0];
    console.log(age);
    const AGE = 50;
    if(age < AGE) {
      return true
    } else {
      return false;
    }
  }

  render() {
    // console.log('renderizou');
    const { carregandoApi, users } = this.state;
    return (
      <PersonDetails
        carregandoApi={ carregandoApi }
        users={ users }
      />
    )
  }
}
export default App;
