import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function ChangeTheme() {
  const { theme, changeTheme } = useContext(ThemeContext)


  return (
    <div>
      <div>Aktif Tema: <strong>{theme}</strong></div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}