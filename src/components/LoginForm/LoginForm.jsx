import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { validationSchema } from "../../utils/validationSchema";

export const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box
      w={["280px", "400px", "450px", "500px"]}
      borderWidth="1px"
      borderRadius="20px"
      overflow="hidden"
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ email, password }, { setSubmitting, resetForm }) => {
          console.log(email);
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="#E0E0E0" h="16px" w="20px" />}
            />
            <Input
              variant="flushed"
              as={Field}
              name="email"
              placeholder="E-mail"
              _placeholder={{ color: "#BDBDBD", fontSize: "18px" }}
            />
          </InputGroup>
          <ErrorMessage name="email" />
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="#E0E0E0" h="16px" w="21px" />}
            />
            <Input
              variant="flushed"
              pr="4.5rem"
              type={show ? "text" : "password"}
              as={Field}
              name="password"
              placeholder="Password"
              _placeholder={{ color: "#BDBDBD", fontSize: "18px" }}
            />
            <InputRightElement width="4.5rem">
              <Button background={"transparent"} onClick={handleClick}>
                {show ? (
                  <ViewOffIcon color="#E0E0E0" h="16px" w="20px" />
                ) : (
                  <ViewIcon color="#E0E0E0" h="16px" w="20px" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <ErrorMessage name="password" />
          <Box position="">
            <Button type="submit">Log In</Button>
            <Button as={"a"} href="./">
              Register
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
