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
  GoogleButton,
} from "./LoginRegisterFormStyled";
import { FieldErrorMessage } from "../FieldErrorMessage/FieldErrorMessage";

export const RegisterForm = () => {
  const handleGoogleAuth = async () => {
    try {
      console.log("GoogleAuth");
    } catch (error) {
      console.error(error.message);
    }
  };
  const dispatch = useDispatch();

  return (
    <LoginRegisterFormBox height={{ base: "100%", s: "666px" }}>
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
            <LoginRegisterFormEmailInput placeholder="E-mail">
              <FieldErrorMessage error={<ErrorMessage name="email" />} />
            </LoginRegisterFormEmailInput>
            <LoginRegisterFormPasswordInput placeholder="Password">
              <FieldErrorMessage error={<ErrorMessage name="password" />} />
            </LoginRegisterFormPasswordInput>
            <LoginRegisterFormConfirmPasswordInput placeholder="Confirm Password">
              <FieldErrorMessage
                error={<ErrorMessage name="confirmPassword" />}
              />
            </LoginRegisterFormConfirmPasswordInput>
            <LoginRegisterFormNameInput placeholder="First Name">
              <FieldErrorMessage error={<ErrorMessage name="name" />} />
            </LoginRegisterFormNameInput>
          </LoginRegisterFormInputsBox>
          <LoginRegisterFormButtonsBox>
            <LoginRegisterFormSubmitButton name="Register " />
            <LoginRegisterFormRedirectButton name="Log In" to="/" />
            <GoogleButton
              name="Sign in with"
              handleGoogleAuth={handleGoogleAuth}
            />
          </LoginRegisterFormButtonsBox>
        </Form>
      </Formik>
    </LoginRegisterFormBox>
  );
};
