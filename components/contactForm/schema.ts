import * as yup from "yup";

export const schemaContact = yup.object().shape({
  firstName: yup.string().required().label('First name'),
  lastName: yup.string().required().label('Last name'),
  email: yup.string().email().required().label('Email'),
  phone: yup.string().max(10).required().label('Phone'),
});
