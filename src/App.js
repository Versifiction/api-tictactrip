import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Logo from '../src/components/Logo';
import Title from '../src/components/Title';
import Form from '../src/components/Form';
import background from '../src/images/background.png';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cityDeparture: "",
      cityArrival: "",
      depart: "",
      return: "",
      cities: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.swapCities = this.swapCities.bind(this);
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

  handleChange = (evt) => {
    let state = this.state;
    state[evt.target.name] = evt.target.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    this.setState(state);

    axios.get(`https://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${this.state.cityDeparture}`)
      .then((response) => {
          console.log(response);
          this.setState({
            cities: response
          }, () => {
          })
          console.log(this.state.cityDeparture);
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
    const { cityDeparture, cityArrival, cities } = this.state;
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
        />
      </div>
    );
  }
}

export default App;
