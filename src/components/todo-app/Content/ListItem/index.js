import React from 'react'
import { useTodo } from '../../../../context/todo-app/TodoContext'
import Item from './Item'

let filtered = null

export default function List() {
  const { todos, filter } = useTodo();

  filtered = todos;

  if (filter !== 'All') {
    filtered = todos.filter(todo => filter === 'Active' ?
      todo.completed === false && todo :
      todo.completed === true && todo
    )
  }

  return (
    <ul className="todo-list">
      {
        filtered.map((todo) => <Item key={todo.id} todo={todo} />)
      }
    </ul>
  )
}
