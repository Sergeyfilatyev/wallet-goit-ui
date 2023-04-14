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
} from "./LoginRegisterFormStyled";

export const RegisterForm = () => {
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
