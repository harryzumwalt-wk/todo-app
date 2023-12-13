import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState(''); 
  const [items, setItems] = useState([]); 

  function handleClick(e) {
    setItems([...items, text])
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div className="container">
        <div className="todo-app">
            <h2>To-Do List <img src="/images/icon.png" /></h2>
            <div className="row">
                <input type="text" id="input-box" placeholder="Add your text" value={text} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </div>
            <ul id="list-container">
              {items.map(function(todo) {
                return <li>{todo}<><span>{"\u00D7"}</span></></li>
              })}
            </ul>
        </div>
    </div>
  );
}

export default App;