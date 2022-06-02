import React, {useState} from 'react';
import './Soup.scss';
import { Slider } from 'antd';

export const Soup = () => {
    const onChange = (checked) => {

    };

    return (
        <label>
            <p className={'labelTitle'}>Spiciness scale:</p>
            <Slider defaultValue={1} min={1} max={10} dots={true}/>
        </label>
    );
};