import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";

import { ErrorMessage } from "formik";

import { validationSchemaRegister } from "../../utils/validationSchema";
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
  const dispatch = useDispatch();

  return (
    <LoginRegisterFormBox>
      <LoginRegisterFormLogoBox>
        <Logo />
      </LoginRegisterFormLogoBox>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
        }}
        validationSchema={validationSchemaRegister}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const { name, password, email, confirmPassword } = values;
          const data = { name, password, email };

          if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
          }

          dispatch(register(data));
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <LoginRegisterFormInputsBox>
            <LoginRegisterFormEmailInput placeholder="E-mail" />
            <ErrorMessage name="email" />
            <LoginRegisterFormPasswordInput placeholder="Password" />
            <ErrorMessage name="password" />
            <LoginRegisterFormConfirmPasswordInput placeholder="Confirm Password" />
            <ErrorMessage name="confirmPassword" />
            <LoginRegisterFormNameInput placeholder="First Name" />
            <ErrorMessage name="firstName" />
          </LoginRegisterFormInputsBox>
          <LoginRegisterFormButtonsBox>
            <LoginRegisterFormSubmitButton name="Register " />
            <LoginRegisterFormRedirectButton name="Log In" to="/" />
          </LoginRegisterFormButtonsBox>
        </Form>
      </Formik>
    </LoginRegisterFormBox>
  );
};
