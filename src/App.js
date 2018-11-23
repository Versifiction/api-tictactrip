import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Logo from '../src/components/Logo';
import Title from '../src/components/Title';
import Form from '../src/components/Form';
import Manual from '../src/components/Manual';
import background from '../src/images/background.png';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cityDeparture: "",
      cityArrival: "",
      depart: "",
      return: "",
      cities: [],
      resultMessage: "",
      destinationMessage: "",
      inputActive: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.swapCities = this.swapCities.bind(this);
    this.getValueFromLi = this.getValueFromLi.bind(this);
    this.openResults = this.openResults.bind(this);
  }

  getFavorites = () => {
    let state = this.state;
    let cutCityDeparture = state.cityDeparture.toLowerCase().split(",");
    let finalCutCityDeparture = cutCityDeparture[0];

    let cutCityArrival = state.cityArrival.toLowerCase().split(",");
    let finalCutCityArrival = cutCityArrival[0];

    if (state.cityDeparture !== "" && state.inputActive === "cityDeparture") {
      axios.get(`https://www-uat.tictactrip.eu/api/cities/popular/from/${finalCutCityDeparture}/5`)
      .then((response) => {
          this.setState({
            cities: response.data,
          }, () => {
          })
      })
      .catch((error) => {
          console.log(error);
      })
      this.setState({
        resultMessage: "Les destinations préférées de nos voyageurs depuis " + state.cityDeparture,
      });
      this.getValueFromLiReversed();
    } else if (state.cityDeparture !== "" && state.inputActive === "cityArrival") {
      axios.get(`https://www-uat.tictactrip.eu/api/cities/popular/from/${finalCutCityArrival}/5`)
      .then((response) => {
          this.setState({
            cities: response.data,
          }, () => {
          })
      })
      .catch((error) => {
          console.log(error);
      })
      this.setState({
        resultMessage: "Les destinations préférées de nos voyageurs depuis " + state.cityArrival,
      });
      this.getValueFromLiReversed();
    }
  }

  getValueFromLi = (evt) => {
    if (this.state.inputActive === "cityDeparture") {
      $('.App-Result-Li').on('click',function() {
        var content= $(this).text();
        $('.App-Form-Trips-cityDeparture').val(content);
      });
      this.setState({
        cityDeparture: $('.App-Form-Trips-cityDeparture').val(),
      });
    } else {
      $('.App-Result-Li').on('click',function() {
        var content= $(this).text();
        $('.App-Form-Trips-cityArrival').val(content);
      });
      this.setState({
        cityArrival: $('.App-Form-Trips-cityArrival').val(),
      });
    }
    this.getFavorites();
  }

  getValueFromLiReversed = (evt) => {
    if (this.state.inputActive === "cityDeparture") {
      $('.App-Result-Li').on('click',function() {
        var content= $(this).text();
        $('.App-Form-Trips-cityArrival').val(content);
      });
      this.setState({
        cityDeparture: $('.App-Form-Trips-cityDeparture').val(),
      });
    } else {
      $('.App-Result-Li').on('click',function() {
        var content= $(this).text();
        $('.App-Form-Trips-cityDeparture').val(content);
      });
      this.setState({
        cityArrival: $('.App-Form-Trips-cityArrival').val(),
      });
    }
  }

  handleChange = (evt) => {
    let state = this.state;
    state[evt.target.name] = evt.target.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    this.setState(state);

    if (evt.target.name === "cityDeparture") {
      axios.get(`https://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${this.state.cityDeparture}`)
      .then((response) => {
          this.setState({
            cities: response.data,
          }, () => {
          })
      })
      .catch((error) => {
          console.log(error);
      })
      if (state.cityDeparture === "" && state.cityArrival === "") {
        this.setState({
          resultMessage: "Les destinations préférées de nos voyageurs",
        });
      }
    } else {
      axios.get(`https://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${this.state.cityArrival}`)
      .then((response) => {
          this.setState({
            cities: response.data
          }, () => {
          })
      })
      .catch((error) => {
          console.log(error);
      })
    }
  }

  openResults = (evt) => {
    let resultsDiv = document.getElementsByClassName("App-Results")[0];
    resultsDiv.style.visibility = "visible";

    if (evt.target.name === "cityDeparture") {
      this.setState({
        destinationMessage: "Choisissez votre lieu de départ",
        inputActive: "cityDeparture",
      });
    } else {
      this.setState({
        destinationMessage: "Choisissez votre lieu d'arrivée",
        inputActive: "cityArrival",
      });
    }

    axios.get("https://www-uat.tictactrip.eu/api/cities/popular/5")
      .then((response) => {
          this.setState({
            cities: response.data
          }, () => {
          })
      })
      .catch((error) => {
          console.log(error);
      })
  }

  swapCities = (evt) => {
    evt.preventDefault();
    this.setState({
      cityDeparture: this.state.cityArrival,
      cityArrival: this.state.cityDeparture,
    });
  }

  render() {
    const { cityDeparture, cityArrival, cities, resultMessage, destinationMessage } = this.state;
    return (
      <div className="App">
        <Logo />
        <Title />
        <Form
          backgroundImage={ background }
          handleChange={this.handleChange}
          swapCities={this.swapCities}
          cityDeparture={cityDeparture}
          cityArrival={cityArrival}
          cities={cities}
          resultMessage={resultMessage}
          destinationMessage={destinationMessage}
          getValueFromLi={this.getValueFromLi}
          openResults={this.openResults}
        />
        <Manual />
      </div>
    );
  }
}

export default App;