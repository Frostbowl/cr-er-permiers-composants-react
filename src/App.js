import logo from './logo.svg';
import React from 'react';
import './App.css';

class Article extends React.Component{
  render(){
    return(
      <article>
        <h2>
          {this.props.prenom} {this.props.nom}
        </h2>
        <img src={`./img/${this.props.src}.jpg`}
        alt={`${this.props.prenom} ${this.props.nom}`}
        title={`${this.props.prenom} ${this.props.nom}`}
        />
        <p>{this.props.tags}</p>
      </article>
    );
  }
}


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>5 personnes qui ont façonnés l'industrie du web</h1>
      </header>

      <main className='App-main'>
        <Article nom="Berners-Lee" prenom="Tim" tags="HTML, World Wide Web" src="tim"/>
        <Article nom="Eich" prenom="Brendan" tags="JavaScript" src="brendan"/>
        <Article nom="Resig" prenom="John" tags="jQuery" src="john" />
        <Article nom="Marcotte" prenom="Ethan" tags="Responsive Web
        Design" src="ethan" />
        <Article nom="Verou" prenom="Lea" tags="Web design, CSS secrets"
        src="lea" />
      </main>

    </div>
  );
}

export default App;
