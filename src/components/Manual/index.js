import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './Manual.css';

class App extends Component {
  render() {
    return (
        <Container>
            <div className="App-Manual">
                <div className="App-Manual-Title"><h3>Mode d'emploi</h3></div>
                <ol>
                    <li>Dans la rubrique "Quel est votre trajet ?", cliquez dans un champ de choix de ville de départ ou d'arrivée</li>
                    <li>Saisissez la ville ou choisissez en une parmi celles présentées.</li>
                    <li>Et pour le moment, c'est tout !</li>
                    <li>Ah oui, n'hésitez pas à double cliquer lors du choix d'une ville, elles sont un peu sourdes d'oreille...</li>
                </ol>
            </div>
      </Container>
    );
  }
}

export default App;