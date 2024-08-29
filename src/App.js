import ThemeContext from './context/ThemeContext';
import ChangeTheme from './components/ChangeTheme';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={'light'}>
        <ChangeTheme />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;