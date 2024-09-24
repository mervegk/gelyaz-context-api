import React from 'react'
import { useTodo } from '../../context/todo-app/TodoContext'

export default function ContentFooter() {

  const { todos, filter, setFilter, clearCompletedTodo } = useTodo();

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong> item{todos.length > 1 && 's'} left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" onClick={() => setFilter('All')} className={filter === "All" && "selected"}>All</a>
        </li>
        <li>
          <a href="#/" onClick={() => setFilter('Active')} className={filter === "Active" && "selected"}>Active</a>
        </li>
        <li>
          <a href="#/" onClick={() => setFilter('Completed')} className={filter === "Completed" && "selected"}>Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => clearCompletedTodo()}>
        Clear completed
      </button>
    </footer>
  )
}
