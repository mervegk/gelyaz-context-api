import { ThemeContextProvider } from './context/ThemeContext';
import ChangeTheme from './components/ChangeTheme';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ChangeTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;