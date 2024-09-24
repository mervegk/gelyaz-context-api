import './styles/todo.css'
import Header from './components/todo-app/Header';
import Content from './components/todo-app/Content';
import Footer from './components/todo-app/Footer';
import { TodoProvider } from './context/todo-app/TodoContext';

/* TODO APP */
const App = () => (
  <TodoProvider>
    <main className='todo-container'>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </main>
  </TodoProvider>
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