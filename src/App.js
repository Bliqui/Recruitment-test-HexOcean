import './App.css';
import {useState} from "react";
import {Soup} from "./components/Soup/Soup";
import {Sandwich} from "./components/Sandwich/Sandwich";
import {Pizza} from "./components/Pizza/Pizza";

function App() {
    const [dishType, setDishType] = useState('');

  return (
    <div className="App">
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(dishType)
        }}>
            <label>
                <p>Dish name:</p>
                <input type="text"/>
            </label>
            <label>
                <p>Preparation time:</p>
                <input type="time"/>
            </label>
            <label>
                <p>Dish type:</p>
                <select name="dishTypes" onChange={(e) => setDishType(e.target.value)} id="1">
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="sandwich">Sandwich</option>
                </select>
            </label>
            {dishType === 'pizza' ? <Pizza/> : null}
            {dishType === 'soup' ? <Soup/> : null}
            {dishType === 'sandwich' ? <Sandwich/> : null}
            <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
