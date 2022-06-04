import React from 'react';
import './Soup.scss';
import {Slider} from 'antd';
import {Controller} from "react-hook-form";

export const Soup = ({errors, control}) => {
    return (
        <label>
            <p className={'labelTitle'}>Spiciness scale:</p>
            <Controller
                control={control}
                rules={{ required: true }}
                name="spiciness_scale"
                render={({ field: {onChange, value} }) =>
                    <Slider defaultValue={1}
                            selected={value}
                            onChange={onChange}
                            min={1}
                            max={10}
                            dots={true}/>}
            />
            <div className={'errorField'}>
                {errors.spiciness_scale?.type === 'required' && "Spiciness is required!"}
            </div>
        </label>
    );
};