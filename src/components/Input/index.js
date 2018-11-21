import React from 'react';

import './Input.css';

const Input = ({ placeholder, name, handleChange, inputFocus, value, openResults }) => {
    return (
        <div className="App-Input">
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                onClick={openResults}
            />
        </div>
    );
}

export default Input;