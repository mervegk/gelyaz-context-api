import React from 'react'
import { useTodo } from '../../../../context/todo-app/TodoContext'

export default function Item({ todo }) {
  const { todos, setTodos, toggleTodo, destroyTodo } = useTodo();

  const onChange = todoId => toggleTodo(todoId);
  const onDestroy = todoId => destroyTodo(todoId)

  return (
    <li className={todo.completed === true ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
      </div>
    </li>
  )
}