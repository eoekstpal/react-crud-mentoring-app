import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'hi',
      checked: true
    }
  ])

  return (
    <div>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
