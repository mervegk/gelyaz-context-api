import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      complated: true
    },
    {
      id: 2,
      text: "Learn Javascript",
      complated: false
    }
  ]);

  const values = { todos, setTodos }

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error('useTodo hook must be called inside TodoProvider')
  }
  return context;
}