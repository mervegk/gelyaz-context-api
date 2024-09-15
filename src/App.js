import './styles/style.css';
import { ThemeContextProvider } from './context/ThemeContext';
import { LangContextProvider } from './context/LangContext';
import Container from './Container';

const App = () => (
  <LangContextProvider>
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider>
  </LangContextProvider>
);


export default App;