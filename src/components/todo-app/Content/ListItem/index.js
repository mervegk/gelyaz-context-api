import React from 'react'
import { useTodo } from '../../../../context/todo-app/TodoContext'
import Item from './Item'

export default function List() {
  const { todos } = useTodo();

  return (
    <ul className="todo-list">
      {
        todos.map((todo) => <Item key={todo.id} todo={todo} />)
      }
      {/*       <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learn JavaScript</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learn React</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Have a life!</label>
          <button className="destroy"></button>
        </div>
      </li> */}
    </ul>
  )
}
