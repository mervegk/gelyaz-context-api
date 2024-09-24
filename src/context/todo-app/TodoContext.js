import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState('All');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: true
    },
    {
      id: 2,
      text: "Learn Javascript",
      completed: false
    }
  ]);

  const addTodo = (text) => setTodos(prev => [...prev, { id: uuidv4(), text: text, completed: false }]);

  const toggleTodo = (todoId) => {
    const duplicatedTodos = [...todos];
    const itemIndex = duplicatedTodos.findIndex(todo => todo.id === todoId);
    const item = todos[itemIndex];

    item.completed = !item.completed;
    setTodos(duplicatedTodos)
  }

  const destroyTodo = (todoId) => {
    const duplicatedTodos = [...todos];
    const itemIndex = duplicatedTodos.findIndex(todo => todo.id === todoId);

    duplicatedTodos.splice(itemIndex, 1);
    setTodos(duplicatedTodos)
  }

  const clearCompletedTodo = () => setTodos(prev => prev.filter(todo => !todo.completed));

  const values = { todos, setTodos, addTodo, toggleTodo, destroyTodo, filter, setFilter, clearCompletedTodo }

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error('useTodo hook must be called inside TodoProvider')
  }
  return context;
}