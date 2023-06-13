import * as yup from 'yup'

export const form1ValidationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is Required'),
    lastName: yup.string().required('Last Name is Required'),
    userName: yup.string().required('Username is Required'),
    countryCode: yup.string().required('Country Code is Required'),
    phoneNumber: yup.string().required('Phone Number is Required'),
    email: yup.string().email('Invalid email').required('Email is required'),
  });

  export const form2ValidationSchema = yup.object().shape({
    country: yup.string().required('Country is Required'),
    town_city: yup.string().required('City is Required'),
  });

  export const form3ValidationSchema = yup.object().shape({
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      ),
    password_confirmaion: yup.string().required('Confirm Password is Required').oneOf([yup.ref('password')], 'Passwords must match'),
    checkbox: yup.boolean().oneOf([true], 'Accept the terms and conditions of ECS Pay'),
  });
  
  
  
  
  
  