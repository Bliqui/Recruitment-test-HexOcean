import React from 'react';
import './Sandwich.scss'

export const Sandwich = () => {
    return (
        <label>
            <p className={'labelTitle'}>Slices of bread:</p>
            <input className={'normalInput'} type="number"/>
        </label>
    );
};