import React from 'react';
import './Pizza.scss'

export const Pizza = () => {
    return (
        <>
            <label>
                <p className={'labelTitle'}>Number of slices:</p>
                <input className={'normalInput'} type="number"/>
            </label>
            <label>
                <p className={'labelTitle'}>Diameter:</p>
                <input className={'normalInput'} type="number"/>
            </label>
        </>
    );
};