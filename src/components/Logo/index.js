import React, { Component } from 'react';

import './Logo.css';
import logoTicTacTrip from '../../images/tictactrip-logo.png';

class Logo extends Component {
    render() {
        return (
            <div className="App-Logo">
                <img src={ logoTicTacTrip } alt="Logo TicTacTrip" />
            </div>
        );
    }
}

export default Logo;