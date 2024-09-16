import * as Yup from 'yup';

const validations = Yup.object().shape({
  todoInput: Yup.string().required('This field is can not be empty')
})

export default validations