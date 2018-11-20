import React, { Component } from 'react';

import './Select.css';

class Select extends Component {
    render() {
        return (
            <div className="App-Select">
                <select>
                    <option value="" defaultValue>1 adulte (26 - 59ans)</option>
                    <option value="jeune">Jeune (0 - 25 ans)</option>
                    <option value="senior">Senior (60 +) </option>
                </select>
            </div>
        );
    }
}

export default Select;