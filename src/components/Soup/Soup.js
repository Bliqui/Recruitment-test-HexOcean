import React from 'react';

export const Soup = () => {
    return (
        <label>
            <p>Spiciness scale:</p>
            <input type="range" min="1" max="10"/>
        </label>
    );
};