import React from 'react';
import './Pizza.scss'

export const Pizza = ({register, errors}) => {
    return (
        <>
            <label>
                <p className={'labelTitle'}>Number of slices:</p>
                <input className={'normalInput'} type="number" {...register('no_of_slices', { required: true, pattern: /\d/ })}/>
                <div className={'errorField'}>
                    {errors.no_of_slices?.type === 'required' && "Number of slices is required!"}
                </div>
            </label>
            <label>
                <p className={'labelTitle'}>Diameter:</p>
                <input className={'normalInput'} type="number" {...register('diameter', { required: true, pattern: /\d+\.?/gm })}/>
                <div className={'errorField'}>
                    {errors.diameter?.type === 'required' && "Diameter is required!"}
                </div>
            </label>
        </>
    );
};