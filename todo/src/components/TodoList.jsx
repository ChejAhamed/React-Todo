import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState('');
  return (
    <div>
      <h1>
        Whats is the plan for Today
      </h1>
    </div>

  );
}

export default TodoList;
