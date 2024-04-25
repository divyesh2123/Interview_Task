import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
    empName: yup
    .string('Enter your email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const Login = () => {
  const formik = useFormik({
    initialValues: {
        empName: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("loginInfo", JSON.stringify(values))
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="empName"
          name="empName"
          type="text"
          label="Employee Name"
          value={formik.values.empName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.empName && Boolean(formik.errors.empName)}
          helperText={formik.touched.empName && formik.errors.empName}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};