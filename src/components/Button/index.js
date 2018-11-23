import React from 'react';

import './Button.css';


const Button = ({ swapCities, cityArrival, cityDeparture }) => {
    return (
        <button
            className="App-Button"
            onClick={swapCities}
        >
            Echanger la ville de départ et d'arrivée
        </button>
    );
}

export default Button;