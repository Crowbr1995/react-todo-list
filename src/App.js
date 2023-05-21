import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import { AddTodo } from './components/AddTodo';
import { Todo } from './components/Todo';
uuidv4();

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, {
     id: uuidv4(),
     task: todo,
     completed: false,
     edit: false
    }])
    console.log(todos)
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, task: newTask }
        }
        return todo;
      })
    )
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo 
          task={todo} 
          key={index} 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
    ))}
    </div>
  );
}

export default App;