import React from 'react';
import { Container } from 'reactstrap';

import './Form.css';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import Results from '../Results';

const Form = ({ backgroundImage, cityDeparture, cityArrival, handleChange, inputFocus, swapCities, cities }) => {
    const style = {
        backgroundImage: "url("+ backgroundImage +")",
        backgroundSize: "cover",
        backgroundPosition: "center center",
    };
    return (
        <div className="App-Form" style={ style }>
            <Container>
                <form className="App-Form-Trips">
                    <div className="App-Form-Trips-Content">
                        <div className="App-Form-Trips-Content-Places">
                            <h2>Quel est votre trajet ?</h2>
                            <Input
                                name="cityDeparture"
                                placeholder="Saisissez votre ville de départ"
                                handleChange={handleChange}
                                value={cityDeparture}
                            />
                            <Input
                                name="cityArrival"
                                placeholder="Saisissez votre ville d'arrivée"
                                handleChange={handleChange}
                                value={cityArrival}
                            />
                            <Button
                                swapCities={swapCities}
                            />
                        </div>
                        <div className="App-Form-Trips-Content-Dates">
                            <Input
                                name="depart"
                                placeholder="Aller (JJ/MM/AAAA)"
                                handleChange={handleChange}
                            />
                            <Input
                                name="return"
                                placeholder="Retour (JJ/MM/AAAA)"
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="App-Form-Trips-Content-Persons">
                            <Select />
                        </div>
                    </div>
                </form>
                <Results
                    cityDeparture={cityDeparture}
                    cityArrival={cityArrival}
                    cities={cities}
                />
            </Container>
        </div>
    );
}

export default Form;