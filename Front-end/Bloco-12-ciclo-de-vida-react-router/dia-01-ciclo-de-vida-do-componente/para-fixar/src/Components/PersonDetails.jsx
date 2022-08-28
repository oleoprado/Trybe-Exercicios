import React from 'react';

class PersonDetails extends React.Component {
  
  render() {
    const { carregandoApi, users } = this.props;
    const carregando = <div>Carregando...</div>;
    return(
      <>
      {
        carregandoApi ? carregando : users[0].email
      }
      </>
    )
  }
}

export default PersonDetails;
