import * as yup from 'yup'

export const form1ValidationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is Required'),
    lastName: yup.string().required('Last Name is Required'),
    userName: yup.string().required('Username is Required'),
    countryCode: yup.string().required('Country Code is Required'),
    phoneNumber: yup.string().required('Phone Number is Required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    // password: yup
    //   .string()
    //   .required('Password is required')
    //   .min(8, 'Password must be at least 8 characters long')
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //     'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    //   ),
  });
  
  
  
  
  
  