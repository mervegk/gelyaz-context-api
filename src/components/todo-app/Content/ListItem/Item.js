import React from 'react'

export default function Item({ todo }) {
  return (
    <li className={todo.complated === true ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.complated} />
        <label>{todo.text}</label>
        <button className="destroy"></button>
      </div>
    </li>
  )
}
