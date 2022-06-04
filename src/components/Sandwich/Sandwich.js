import React from 'react';
import './Sandwich.scss'

export const Sandwich = ({register, errors}) => {
    return (
        <label>
            <p className={'labelTitle'}>Slices of bread:</p>
            <input className={'normalInput'} type="number" {...register('slices_of_bread', { required: true})}/>
            <div className={'errorField'}>
                {errors.slices_of_bread?.type === 'required' && "Number of slices is required!"}
            </div>
        </label>
    );
};