import React from 'react';
import { Formik, Field, Form } from 'formik';
import validations from './validations';
import { useTodo } from '../../../../context/todo-app/TodoContext';

export default function NewTodoForm() {
  const { addTodo } = useTodo();

  return (
    <Formik
      initialValues={{
        todoInput: ''
      }}
      onSubmit={(values, bag) => {
        console.log(values);
        addTodo(values.todoInput);
        bag.resetForm();
      }}
      validationSchema={validations}
    >
      <Form>
        <Field id='todoInput' name="todoInput" className="new-todo" placeholder="What needs to be done?" />
      </Form>
    </Formik>
  )
}
