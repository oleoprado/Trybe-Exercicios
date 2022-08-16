import React from "react";

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'JS', 'Teste unitários']
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)
    const name = 'Léo Prado'
    const aboutMe = 'Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio.Leite de capivaris, leite de mula manquis sem cabeça.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Copo furadis é disculpa de bebadis, arcu quam euismod magna.'

    return (
      <div>
        <h1>
          {name}
        </h1>
        <p>
          {aboutMe}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>{ jsxSkills }</ul>
      </div>
    );
  }
}

export default About;