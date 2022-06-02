import './App.scss'
import {useState} from "react";
import {Soup} from "./components/Soup/Soup";
import {Sandwich} from "./components/Sandwich/Sandwich";
import {Pizza} from "./components/Pizza/Pizza";
import './assets/styles/index.scss';
import { TimePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

function App() {
    const [dishType, setDishType] = useState('');
    const onChange = (time, timeString) => {
        console.log(time, timeString);
    };
    const onSubmit = (data) => {
    }

    return (
        <div className={'hexoceanMenu'}>
            <div className={'hexoceanWrapper'}>
                <form className={'hexoceanForm'} onSubmit={onSubmit}>
                    <label className={'formLabel'}>
                        <p className={'labelTitle'}>Dish name:</p>
                        <input className={'normalInput'} type="text"/>
                    </label>
                    <label className={'formLabel'}>
                        <p className={'labelTitle'}>Preparation time:</p>
                        <TimePicker className={'timeInput'} showNow={false} inputReadOnly={true} onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </label>
                    <label className={'formLabel'}>
                        <p className={'labelTitle'}>Dish type:</p>
                        <select className={'dishTypeSelector'} name="dishTypes"
                                onChange={(e) => setDishType(e.target.value)} id="1">
                            <option selected value="-">-</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="sandwich">Sandwich</option>
                        </select>
                    </label>
                    {dishType === 'pizza' ? <Pizza/> : null}
                    {dishType === 'soup' ? <Soup/> : null}
                    {dishType === 'sandwich' ? <Sandwich/> : null}
                    <div className={'buttonWrapper'}>
                        <button className={'submitBtn'}>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default App;
