import React from "react";

import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";

import { validationSchemaLogin } from "../../utils/validationSchema";
import { Logo } from "../Logo";
import { ErrorMessage } from "formik";

import {
  LoginRegisterFormBox,
  LoginRegisterFormLogoBox,
  LoginRegisterFormInputsBox,
  LoginRegisterFormButtonsBox,
  LoginRegisterFormSubmitButton,
  LoginRegisterFormRedirectButton,
  LoginRegisterFormEmailInput,
  LoginRegisterFormPasswordInput,
} from "./LoginRegisterFormStyled";

export const LoginForm = () => {
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
        }}
        validationSchema={validationSchemaLogin}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const { email, password } = values;
          const data = { password, email };

          dispatch(login(data));

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
          </LoginRegisterFormInputsBox>
          <LoginRegisterFormButtonsBox>
            <LoginRegisterFormSubmitButton name="Log In" />
            <LoginRegisterFormRedirectButton name="Register" to="register" />
          </LoginRegisterFormButtonsBox>
        </Form>
      </Formik>
    </LoginRegisterFormBox>
  );
};
