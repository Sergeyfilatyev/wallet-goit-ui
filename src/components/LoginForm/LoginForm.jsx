import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { validationSchema } from "../../utils/validationSchema";
import { Logo } from "../Logo";

export const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box
      borderRadius={{ base: "none", s: "20px" }}
      bgColor="#FFFFFF"
      w={{ base: "100vh", s: "480px", m: "533px" }}
      h={{ base: "100%", s: "468px" }}
      overflow="hidden"
      paddingTop={{ base: "107px", s: "40px" }}
      paddingBottom={{ base: "107px", s: "62px" }}
      px={{ base: "20px", s: "61.5px" }}
    >
      <Flex justifyContent="center">
        <Logo />
      </Flex>
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
          <Box pt="60px">
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
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
            mt={["40px", "42px"]}
          >
            <Button type="submit" variant="greenButton" w={["280px", "300px"]}>
              Log In
            </Button>
            <Button
              as={"a"}
              href="/register"
              variant="whiteButton"
              w={["280px", "300px"]}
            >
              Registers
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
