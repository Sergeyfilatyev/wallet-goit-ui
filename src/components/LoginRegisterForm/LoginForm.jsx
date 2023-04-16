import React from "react";

import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  console.log(process.env.REACT_APP_URL);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 400) {
      navigate("/verify");
      setStatus("");
    }
  }, [status, navigate]);

  return (
    <LoginRegisterFormBox height={{ base: "100%", s: "559px" }}>
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
            console.log(response);
            setStatus(response.payload.status);
          });
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
              to={`${process.env.REACT_APP_URL}/auth/google`}
            />
          </LoginRegisterFormButtonsBox>
        </Form>
      </Formik>
    </LoginRegisterFormBox>
  );
};
