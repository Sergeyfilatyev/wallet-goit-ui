import React from "react";
import { Formik, Form, ErrorMessage } from "formik";

import { validationSchema } from "../../utils/validationSchema";
import { Logo } from "../Logo";

import {
  LoginRegisterFormBox,
  LoginRegisterFormLogoBox,
  LoginRegisterFormInputsBox,
  LoginRegisterFormButtonsBox,
  LoginRegisterFormSubmitButton,
  LoginRegisterFormRedirectButton,
  LoginRegisterFormEmailInput,
  LoginRegisterFormPasswordInput,
  LoginRegisterFormNameInput,
  LoginRegisterFormConfirmPasswordInput,
} from "./LoginRegisterFormStyled";

export const RegisterForm = () => {
  return (
    <LoginRegisterFormBox>
      <LoginRegisterFormLogoBox>
        <Logo />
      </LoginRegisterFormLogoBox>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ email, password }, { setSubmitting, resetForm }) => {
          console.log(email);
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <LoginRegisterFormInputsBox>
            <LoginRegisterFormEmailInput placeholder="E-mail" />
            {/* <ErrorMessage name="email" /> */}
            <LoginRegisterFormPasswordInput placeholder="Password" />
            {/* <ErrorMessage name="password" /> */}
            <LoginRegisterFormConfirmPasswordInput placeholder="Confirm Password" />
            {/* <ErrorMessage name="confirmPassword" /> */}
            <LoginRegisterFormNameInput placeholder="First Name" />
            {/* <ErrorMessage name="firstName" /> */}
          </LoginRegisterFormInputsBox>
          <LoginRegisterFormButtonsBox>
            <LoginRegisterFormSubmitButton name="Register " />
            <LoginRegisterFormRedirectButton name="Log In" />
          </LoginRegisterFormButtonsBox>
        </Form>
      </Formik>
    </LoginRegisterFormBox>
  );
};
