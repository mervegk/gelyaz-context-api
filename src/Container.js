import React, { useContext } from 'react';
import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';
import ChangeLang from './components/ChangeLang';
import ThemeContext from './context/ThemeContext';

export default function Container() {
  const { theme } = useContext(ThemeContext);
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
