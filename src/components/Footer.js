import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Footer() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return <div>
    <hr />
    <div>Aktif Tema: <strong>{theme}</strong></div>
    <button onClick={changeTheme}>Change Theme</button>
  </div>
}

export default Footer;