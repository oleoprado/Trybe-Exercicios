import React from 'react';
// import Counter from './Components/Counter';
import PersonDetails from './Components/PersonDetails';

// import './App.css';

class App extends React.Component {
  state = {
    users: [],
    carregandoApi: true,
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const URL = await fetch('https://api.randomuser.me/');
    const response = await URL.json();
    const data = response.results;
    this.setState({
      users: data,
      carregandoApi: false,
    })
    // console.log(data, 'carregou didMount');
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
