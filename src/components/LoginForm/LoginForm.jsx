import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

export const LoginForm = () => {
  const onSubmit = () => alert("Log In successfull");
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
      >
        <Form onSubmit={onSubmit}>
          <Field type="email" name="email" placeholder="E-mail" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Log in</button>
          <a href="./">Register</a>
        </Form>
      </Formik>
    </div>
  );
};
