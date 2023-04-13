import React from "react";

import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";

import { validationSchemaLogin } from "../../utils/validationSchema";
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
} from "./LoginRegisterFormStyled";
import { FieldErrorMessage } from "../FieldErrorMessage/FieldErrorMessage";

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <LoginRegisterFormBox height={{ base: "100%", s: "468px" }}>
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
          dispatch(login(values).then(console.log(values)));
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <LoginRegisterFormInputsBox>
            <LoginRegisterFormEmailInput placeholder="E-mail">
              <FieldErrorMessage error={<ErrorMessage name="email" />} />
            </LoginRegisterFormEmailInput>
            <LoginRegisterFormPasswordInput placeholder="Password">
              <FieldErrorMessage error={<ErrorMessage name="password" />} />
            </LoginRegisterFormPasswordInput>
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
