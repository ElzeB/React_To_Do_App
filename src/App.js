import React, { useState } from 'react';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Elze's To Do List</h1>
      </header>
      <Form inputText ={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
