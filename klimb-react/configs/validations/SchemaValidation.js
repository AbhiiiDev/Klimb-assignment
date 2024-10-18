import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    role: Yup.string().required('Role is required'),
    location: Yup.string().required('Location is required'),
    department: Yup.string().required('Department is required'),
  
  });