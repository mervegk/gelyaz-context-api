import { ThemeContextProvider } from './context/ThemeContext';
import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ChangeTheme />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;