import React from 'react';

import './Results.css';

const Results = ({ destinationMessage, getValueFromLi, cityDeparture, cityArrival, cities, resultMessage }) => {
    function closeResults(evt) {
        let resultsDiv = document.getElementsByClassName("App-Results")[0];
        resultsDiv.style.visibility = "hidden";
    }

    /* function cutRegion(str) {
        var res = str.split(", ");
        document.getElementsByClassName("App-Results")[0].innerHTML = res[0] + ", " + res[2];
    }

    const citiesRegionsCutted = cities.slice(0, 5).map(city => {
        return cutRegion(city.local_name);
    }); */

    const allCitiesDisplayed = cities.slice(0, 7).map(city =>
        <div
            className="App-Result"
            key={city.city_id}
        >
            <li
                onClick={getValueFromLi}
                data-value={city.unique_name}
                className="App-Result-Li"
            >
                <p className="capitalize">{city.unique_name}</p>
            </li>
        </div>
    )

    return (
        <div className="App-Results">
            <div className="App-Results-Close" onClick={closeResults}>x</div>
            <h2 className="App-Results-Destination">{destinationMessage}</h2>
            <p className="App-Results-Message">{resultMessage}</p>
            <ul className="App-Results-List">{allCitiesDisplayed}</ul>
        </div>
    );
}

export default Results;