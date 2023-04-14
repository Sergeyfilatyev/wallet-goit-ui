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
  GoogleButton,
} from "./LoginRegisterFormStyled";
import { FieldErrorMessage } from "../FieldErrorMessage/FieldErrorMessage";
import { useTranslation } from "react-i18next";
export const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <LoginRegisterFormBox height={{ base: "100%", s: "518px" }}>
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
          dispatch(login(values));
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <LoginRegisterFormInputsBox>
            <LoginRegisterFormEmailInput placeholder={t("email")}>
              <FieldErrorMessage error={<ErrorMessage name="email" />} />
            </LoginRegisterFormEmailInput>
            <LoginRegisterFormPasswordInput placeholder={t("password")}>
              <FieldErrorMessage error={<ErrorMessage name="password" />} />
            </LoginRegisterFormPasswordInput>
          </LoginRegisterFormInputsBox>
          <LoginRegisterFormButtonsBox>
            <LoginRegisterFormSubmitButton name={t("login")} />
            <LoginRegisterFormRedirectButton
              name={t("register")}
              to="register"
            />
            <GoogleButton
              name={t("google")}
              to={`${process.env.REACT_APP_BASE_URL}/auth/google`}
            />
          </LoginRegisterFormButtonsBox>
        </Form>
      </Formik>
    </LoginRegisterFormBox>
  );
};
