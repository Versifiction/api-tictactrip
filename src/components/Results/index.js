import React from 'react';

import './Results.css';

const Results = ({ destinationMessage, getValueFromLi, cityDeparture, cityArrival, cities, resultMessage }) => {
    const allCitiesDisplayed = cities.slice(0, 5).map(city =>
        <div
            className="App-Result"
            key={city.city_id}
        >
            <li
                onClick={getValueFromLi}
                data-value={city.local_name}
            >
                {city.local_name}
            </li>
        <div className="separator small white"></div>
        </div>
    )

    return (
        <div className="App-Results">
            <p className="App-Results-Destination">{destinationMessage}</p>
            <p className="App-Results-Message">{resultMessage}</p>
            <ul className="App-Results-List">{allCitiesDisplayed}</ul>
        </div>
    );
}

export default Results;