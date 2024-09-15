import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function ChangeTheme() {
  const { theme, changeTheme } = useTheme();


  return (
    <div>
      <div>Aktif Tema: <strong>{theme}</strong></div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}