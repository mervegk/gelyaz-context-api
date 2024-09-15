import { ThemeContextProvider } from './context/ThemeContext';
import { LangContextProvider } from './context/LangContext';
import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';
import ChangeLang from './components/ChangeLang';

function App() {
  return (
    <div className="App">
      <LangContextProvider>
        <ThemeContextProvider>
          <ChangeLang />
          <hr />
          <ChangeTheme />
          <hr />
          <Footer />
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;