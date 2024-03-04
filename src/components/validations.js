import {object, string, ref} from 'yup';

const messages = {
  required: "Bu alan zorunludur.",
  email: "Geçerli bir mail girin.",
  min: "En az 5 karakter girin.",
  oneOf: "password ile eşleşmedi."
};

const validations = object({
  username: string().required(messages.required),
  email: string().email(messages.email).required(messages.required),
  password: string().min(5, messages.min).required(messages.required),
  passwordConfirm: string()
    .oneOf([ref('password')], messages.oneOf)
    .required(messages.required),
});
export default validations;
