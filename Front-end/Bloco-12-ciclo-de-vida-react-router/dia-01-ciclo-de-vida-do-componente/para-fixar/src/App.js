import React from 'react';
// import Counter from './Components/Counter';

// import './App.css';

class App extends React.Component {
  state = {
    users: [],
    renderizouApi: false,
    // carregando: true,
  }

  async fetchUsers() {
    const URL = await fetch('https://api.randomuser.me/');
    const response = await URL.json();
    const data = response.results;
    this.setState({
      users: data,
      renderizouApi: true,
      // carregando: false,
    })
  }

  componentDidMount() {
    const { users } = this.state;
    this.fetchUsers();
   
  }


  render() {
    const { renderizouApi, users } = this.state;
    return (
      <>
      {
        !renderizouApi ? (<div>Carregando</div>) : users.map((user) => <p>{ user.email }</p>)
      }
      </>
    )
  }
}
export default App;
