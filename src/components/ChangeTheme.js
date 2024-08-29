import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function ChangeTheme() {
  const data = useContext(ThemeContext)
  console.log(data);

  return (
    <div>
      <button>Change Theme</button>
    </div>
  )
}