import React from 'react';

import './Input.css';

const Input = ({ classname, placeholder, name, handleChange, inputFocus, value, openResults }) => {
    return (
        <div className="App-Input">
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                onClick={openResults}
                className={classname}
            />
        </div>
    );
}

export default Input;