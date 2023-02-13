import React from 'react';
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../text-input';
import './sign-in-form.css';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
});

const SignInForm = ({ onSubmit, onUserRegistration }) => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    <div className="sign-in-form">
      <h1 className="my-4">Sign in</h1>
      <Form>
        <TextInput label="Email" name="email" type="email" />
        <TextInput label="Password" name="password" type="password" />
        <div className="sign-in-form__buttons">
          <Button type="submit" variant="dark">
            Submit
          </Button>
          <Button type="reset" variant="danger">
            Reset
          </Button>
        </div>
        <span className="sign-in-form__registration" onClick={onUserRegistration}>
          Don&apos;t have an account?
        </span>
      </Form>
    </div>
  </Formik>
);

export default SignInForm;
