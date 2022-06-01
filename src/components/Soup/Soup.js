import React from 'react';
import './Soup.scss'

export const Soup = () => {
    return (
        <label>
            <p className={'labelTitle'}>Spiciness scale:</p>
            <input type="range" min="1" max="10"/>
        </label>
    );
};