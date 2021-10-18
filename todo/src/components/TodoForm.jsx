/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function TodoForm(props) {
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('');
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDeault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button type="button" className="todo-button">Add todo</button>
    </form>

  );
}

export default TodoForm;
