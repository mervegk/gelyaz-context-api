import { useLang } from "../context/LangContext";

export default function ChangeLang() {
  const { lang, setLang } = useLang();

  return (
    <div>
      <p> Aktif Dil: <strong>{lang}</strong></p>
      <button onClick={() => setLang('tr')}>TR</button>
      <button onClick={() => setLang('en')}>EN</button>
      <button onClick={() => setLang('de')}>DE</button>
    </div>
  )
}
