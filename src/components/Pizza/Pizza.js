import React from 'react';

export const Pizza = () => {
    return (
        <>
            <label>
                <p>Number of slices:</p>
                <input type="number"/>
            </label>
            <label>
                <p>Diameter:</p>
                <input type="number"/>
            </label>
        </>
    );
};