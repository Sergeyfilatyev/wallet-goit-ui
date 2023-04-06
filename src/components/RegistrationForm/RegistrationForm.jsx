import { Formik, Field, Form, ErrorMessage } from "formik";
import { Box } from "@chakra-ui/react";

import { validationSchema } from "../../utils/validationSchema";

export const RegistrationForm = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(
          { email, password, confirmPassword, firstName },
          { setSubmitting, resetForm }
        ) => {
          if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
          }
          console.log(email);
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <Field name="email" placeholder="E-mail" autoComplete="new-email" />
          <ErrorMessage name="email" />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
          />
          <ErrorMessage name="password" />
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            autoComplete="new-password"
          />
          <ErrorMessage name="confirmPassword" />
          <Field
            name="firstName"
            placeholder="First name"
            autoComplete="new-name"
          />
          <ErrorMessage name="firstName" />
          <button type="submit">Register</button>
          <a href="/">Log In</a>
        </Form>
      </Formik>
    </Box>
  );
};
