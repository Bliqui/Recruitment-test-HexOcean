import './App.css';

function App() {
  return (
    <div className="App">
        <form onSubmit={() => console.log("Hello, I'am form")}>
            <label>
                Dish name:
                <input type="text"/>
            </label>
        </form>
    </div>
  );
}

export default App;
