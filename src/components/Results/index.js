import React from 'react';

import './Results.css';

const Results = ({ cityDeparture, cityArrival, cities }) => {
    const allCitiesDisplayed = cities.map(city =>
        <li>{cities.local_name}</li>
    )

    return (
        <div className="App-Results">
            <ul>{allCitiesDisplayed}</ul>
        </div>
    );
}

export default Results;