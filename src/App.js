import './styles/todo.css'
import Header from './components/todo-app/Header';
import Content from './components/todo-app/Content';
import Footer from './components/todo-app/Footer';

/* TODO APP */
const App = () => (
  <>
    <section className="todoapp">
      <Header />
      <Content />
    </section>
    <Footer />
  </>
);

/* CONTEXT API EĞİTİMİ */
/* import { ThemeContextProvider } from './context/ThemeContext';
import { LangContextProvider } from './context/LangContext';
import Container from './Container'; 
 const App = () => (
  <LangContextProvider>
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider>
  </LangContextProvider>
); */


export default App;