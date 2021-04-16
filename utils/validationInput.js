import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .required('No name provided.')
  .matches(/^[A-Z]/, 'The name must start with a capital letter.')
  .min(2, 'Name is too short - should be 2 chars minimum.')
  .matches(/[a-z]/, 'Name must be a valid')

export const LASTNAME_SCHEMA = Yup.string()
  .required('No last name provided.')
  .matches(/^[A-Z]/, 'The last name must start with a capital letter.')
  .min(2, 'Last name is too short - should be 2 chars minimum.')
  .matches(/[a-z]/, 'Last name must be a valid')

export const DISPLAYNAME_SCHEMA = Yup.string()
  .required('No display name provided.')
  .min(2, 'Display name is too short - should be 2 chars minimum.')
  .matches(/[a-z]/, 'Display name must be a valid')

export const EMAIL_SCHEMA = Yup.string()
  .required('No email provided.')
  .email('Email is not correct')

export const PASSWORD_SCHEMA = Yup.string()
  .required('No password provided.')
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  .matches(/[0-9]{2,}/, 'Password must contain numbers.')

export const PASSWORDCONFIRM_SCHEMA = Yup.string()
  .required('No password confirm provided.')
  .oneOf([Yup.ref('password')], 'Password mismatch.')

export const ROLE_SHEMA = Yup.string().oneOf(['Buyer', 'Creative']).required()


export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: LASTNAME_SCHEMA,
  displayName: DISPLAYNAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirm: PASSWORDCONFIRM_SCHEMA,
  role: ROLE_SHEMA,
});

