import React from 'react';
import './App.css';
import AllToDos from './Components/AllToDos/TaskList.js';
import TaskInput from './Components/ToDoInput/TaskInput.js';

function App() {
  return (
    <div className="App">
      <h1 id='name'>To-Do App</h1>
      <TaskInput/>
      <AllToDos/>
    </div>
  );
}

export default App;
