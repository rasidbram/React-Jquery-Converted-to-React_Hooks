import React, { useState } from 'react';
import './App.css';
import removeSound from '../src/components/sounds';
import {toggleSound} from '../src/components/sounds';

function App() {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([]);
  const [exist, setExist] = useState(true)
  

  function handleNewItem(e) {
    setValue(e.target.value)
  }

  function handleNewTodo(e) {
    e.preventDefault();
    if (value === '') return
    setTodos([...todos, { id: Date.now(), text: value }])
    setValue('')
  }
// to remove--------------------------------
  function removeTodo(id) {
    setTodos(todos.filter((n) => n.id !== id))
  }
  // toggle---------------------------------
  function toggleTopics() {
    setExist(false)
  }
  function toggleTopics1() {
    setExist(true)
  }

  return (
    <div className="wrapper">
      <h1 style={{letterSpacing:'2px'}}>LiveCoding Topics</h1>
      {/* IMPORTANT!!!!  There are two function in onClick event */}

      <form onSubmit={handleNewTodo}>
        <input onChange={handleNewItem} placeholder="Add a topic..." value={value} />
        <button type="submit">Add</button>
      <button onClick={() => { (exist ? toggleTopics() : toggleTopics1()); toggleSound() }}>{exist ? 'Hide' : 'Show'} Topics</button>
        {exist ?
          <ul style={{ listStyle: 'none' }}>

            {todos.map((n) => (<li key={n.id}>{n.text}
              {/* IMPORTANT!!!!  There are two function in onClick event */}
              <button className='delete' onClick={() => { removeTodo(n.id); removeSound() }}>Remove</button>

            </li>))}
          </ul>
          : null}

      </form>
      
	   

    </div>
  );
}

export default App;
