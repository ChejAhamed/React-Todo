/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
// eslint-disable-next-line no-unused-vars
import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo }) {
  // eslint-disable-next-line no-unused-vars
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  return todos.map((todo, index) => (
    <>
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>

      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
      </div>
    </>
  ));
}

export default Todo;
