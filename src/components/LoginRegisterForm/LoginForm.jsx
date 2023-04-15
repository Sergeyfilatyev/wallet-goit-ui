import React from "react";

import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useState } from "react";

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
  // console.log(process.env.REACT_APP_URL);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [status, setStatus] = useState("");
  const [isError400, setIsError400] = useState(false);
  const [isError401, setIsError401] = useState(false);

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
          dispatch(login(values)).then((response) => {
            setStatus(response.payload.status);

            if (response.payload.status === 400) {
              setIsError400(true);
              setIsError401(false);
            }

            if (response.payload.status === 401) {
              setIsError401(true);
              setIsError400(false);
            }
          });

          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <LoginRegisterFormInputsBox>
            <LoginRegisterFormEmailInput placeholder={t("email")}>
              {isError400 && (
                <FieldErrorMessage error="You need to verify your account" />
              )}
              {isError401 && (
                <FieldErrorMessage error="The login or password is incorrect" />
              )}
              {isError400 && isError401 && (
                <FieldErrorMessage error={<ErrorMessage name="email" />} />
              )}
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
              to={`${process.env.REACT_APP_URL}/auth/google`}
            />
          </LoginRegisterFormButtonsBox>
        </Form>
      </Formik>
    </LoginRegisterFormBox>
  );
};
