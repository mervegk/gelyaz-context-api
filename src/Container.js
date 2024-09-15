import React from 'react';
import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';
import ChangeLang from './components/ChangeLang';
import { useTheme } from './context/ThemeContext';

export default function Container() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <ChangeLang />
      <hr />
      <ChangeTheme />
      <hr />
      <Footer />
    </div >
  )
}
