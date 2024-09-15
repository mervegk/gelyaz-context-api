import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";

function Footer() {
  const { theme, changeTheme } = useTheme();
  const { lang } = useLang();

  return <div>
    <h5>FOOTER</h5>
    <div>Aktif Tema: <strong>{theme}</strong></div>
    <button onClick={changeTheme}>Change Theme</button>
    <div>Aktif Dil: <strong>{lang}</strong></div>
  </div>
}

export default Footer;