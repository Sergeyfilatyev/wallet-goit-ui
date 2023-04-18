import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import { useState } from "react";
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
  FirstPasswordProgressBar,
  SecondPasswordProgressBar,
} from "./LoginRegisterFormStyled";
import { FieldErrorMessage } from "../FieldErrorMessage/FieldErrorMessage";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [firstPasswordProgress, setFirstPasswordProgress] = useState(0);
  const [secondPasswordProgress, setSecondPasswordProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [isError409, setIsError409] = useState(false);
  const [emailWithError, setEmailWithError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 201) {
      navigate("/verify");
      setStatus("");
    }
  }, [status, navigate]);

  const handleFormChange = ({ target }) => {
    setIsError409(false);
    if (target.name === "password") {
      let progress = 0;

      progress += target.value.length >= 8 ? 20 : 0;
      progress += /[a-z]/.test(target.value) ? 20 : 0;
      progress += /[A-Z]/.test(target.value) ? 20 : 0;
      progress += /\d/.test(target.value) ? 20 : 0;
      progress += /[^\w\d\s]/.test(target.value) ? 20 : 0;

      setFirstPasswordProgress(progress);
      setFirstPassword(target.value);
      setSecondPasswordProgress(0);

      target.value === secondPassword && setSecondPasswordProgress(100);
      target.value.length === 0 && setSecondPasswordProgress(0);
    }
    if (target.name === "confirmPassword") {
      let payload = 100 / firstPassword.length;
      setSecondPasswordProgress(0);

      for (let i = 0; i < firstPassword.length; i++) {
        if (firstPassword[i] !== target.value[i]) {
          return;
        }
        setSecondPasswordProgress((i + 1) * payload);
      }

      setSecondPassword(target.value);

      target.value !== firstPassword && setSecondPasswordProgress(0);
    }
  };

  return (
    <LoginRegisterFormBox height={{ base: "100%", s: "650px" }}>
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
          const { name, password, email } = values;
          const data = { name, password, email };

          dispatch(register(data)).then((response) => {
            setStatus(response.payload.status);

            if (response.payload.status === 409) {
              setIsError409(true);
              setEmailWithError(email);
            }
          });

          resetForm();
          setFirstPasswordProgress(0);
          setSecondPasswordProgress(0);
          setSubmitting(false);
        }}
      >
        <Form onChange={handleFormChange}>
          <LoginRegisterFormInputsBox>
            <LoginRegisterFormEmailInput placeholder={t("email")}>
              {isError409 ? (
                <FieldErrorMessage
                  error={`${emailWithError} ${t("errorAlready")}`}
                />
              ) : (
                <FieldErrorMessage error={<ErrorMessage name="email" />} />
              )}
            </LoginRegisterFormEmailInput>
            <LoginRegisterFormPasswordInput placeholder={t("password")}>
              <FieldErrorMessage error={<ErrorMessage name="password" />} />
              <FirstPasswordProgressBar
                value={firstPasswordProgress}
                colorScheme={firstPasswordProgress === 100 ? "green" : "pink"}
              />
            </LoginRegisterFormPasswordInput>
            <LoginRegisterFormConfirmPasswordInput
              placeholder={t("confirmPas")}
            >
              <FieldErrorMessage
                error={<ErrorMessage name="confirmPassword" />}
              />
              <SecondPasswordProgressBar
                value={secondPasswordProgress}
                colorScheme={secondPasswordProgress === 100 ? "green" : "pink"}
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
              to={`${process.env.REACT_APP_URL}/auth/google`}
            />
          </LoginRegisterFormButtonsBox>
        </Form>
      </Formik>
    </LoginRegisterFormBox>
  );
};
