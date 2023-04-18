import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/auth/auth-operations";
import {
  validationSchemaLogin,
  validationSchemaLoginUa,
  validationSchemaLoginRu,
} from "../../utils/validationSchema";
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
  const [isError400, setIsError400] = useState(false);
  const [isError403, setIsError403] = useState(false);
  const { i18n } = useTranslation();
  return (
    <LoginRegisterFormBox height={{ base: "100%", s: "520px" }}>
      <LoginRegisterFormLogoBox>
        <Logo />
      </LoginRegisterFormLogoBox>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={
          i18n.language === "en"
            ? validationSchemaLogin
            : i18n.language === "ua"
            ? validationSchemaLoginUa
            : validationSchemaLoginRu
        }
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(login(values)).then((response) => {
            if (response.payload.status === 400) {
              setIsError400(true);
              setIsError403(false);
            }

            if (response.payload.status === 403) {
              setIsError403(true);
              setIsError400(false);
            }
          });

          setSubmitting(false);
        }}
      >
        <Form>
          <LoginRegisterFormInputsBox>
            <LoginRegisterFormEmailInput placeholder={t("email")}>
              {isError400 && <FieldErrorMessage error={t("errorVerify")} />}
              {isError403 && <FieldErrorMessage error={t("errorIncorrect")} />}
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
