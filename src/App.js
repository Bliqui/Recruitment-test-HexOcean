import './App.scss'
import {useState} from "react";
import {Soup} from "./components/Soup/Soup";
import {Sandwich} from "./components/Sandwich/Sandwich";
import {Pizza} from "./components/Pizza/Pizza";
import './assets/styles/index.scss'

function App() {
    const [dishType, setDishType] = useState('');

    return (
        <div className={'hexoceanMenu'}>
            <div className={'hexoceanWrapper'}>
                <form className={'hexoceanForm'} onSubmit={(e) => {
                    e.preventDefault()
                    console.log(dishType)
                }}>
                    <label className={'formLabel'}>
                        <p className={'labelTitle'}>Dish name:</p>
                        <input className={'normalInput'} type="text"/>
                    </label>
                    <label className={'formLabel'}>
                        <p className={'labelTitle'}>Preparation time:</p>
                        <input type="time"/>
                    </label>
                    <label className={'formLabel'}>
                        <p className={'labelTitle'}>Dish type:</p>
                        <select name="dishTypes" onChange={(e) => setDishType(e.target.value)} id="1">
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
