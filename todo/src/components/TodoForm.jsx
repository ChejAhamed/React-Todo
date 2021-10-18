/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDeault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
    console.log(input);
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
        ref={inputRef}
      />
      <button type="button" className="todo-button">Add todo</button>
    </form>

  );
}

export default TodoForm;
