import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
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
import { useTranslation } from "react-i18next";

export const RegisterForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [status, setStatus] = useState("");
  const navigate = useNavigate();

   useEffect(() => {
    if (status===201) {
      navigate("/verify");
      setStatus("")
    }
  }, [status, navigate]);

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

          dispatch(register(data)).then(response => {
            console.log(response)
              setStatus(response.payload.status)
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
            <LoginRegisterFormConfirmPasswordInput
              placeholder={t("confirmPas")}
            >
              <FieldErrorMessage
                error={<ErrorMessage name="confirmPassword" />}
              />
            </LoginRegisterFormConfirmPasswordInput>
            <LoginRegisterFormNameInput placeholder={t("name")}>
              <FieldErrorMessage error={<ErrorMessage name="name" />} />
            </LoginRegisterFormNameInput>
          </LoginRegisterFormInputsBox>
          <LoginRegisterFormButtonsBox>
            <LoginRegisterFormSubmitButton name={t("register")} />
            <LoginRegisterFormRedirectButton name={t("login")} to="/" />
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
