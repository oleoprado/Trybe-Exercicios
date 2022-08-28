import React from 'react';

class PersonDetails extends React.Component {
  
  render() {
    const { carregandoApi, users } = this.props;
    const carregando = <div>Carregando...</div>;
    return(
      <>
      {
        carregandoApi
        ? carregando
        : users
          .map(({picture:{medium},
            name:{title, first, last},
            email,
            registered:{age}}) => 
            <div key={ email }>
              <img src={medium} alt='foto user'/>
              <h3>{title} {first} {last}</h3>
              <p><em>{email}</em></p>
              <p><strong>{age}</strong> anos</p>
            </div>
          )
      }
      </>
    )
  }
}

export default PersonDetails;
