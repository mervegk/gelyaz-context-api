import React from 'react';
import { Formik, Field, Form } from 'formik';
import validations from './validations';

export default function NewTodoForm() {
  return (
    <Formik
      initialValues={{
        todoInput: ''
      }}
      onSubmit={(values, bag) => {
        console.log(values);
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
