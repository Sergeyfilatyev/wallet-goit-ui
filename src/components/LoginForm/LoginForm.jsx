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
      border={["none", "1px solid #000000"]}
      borderRadius={["none", "20px"]}
      bgColor="#FFFFFF"
      minW="320px"
      maxW="533px"
      h="100%"
      overflow="hidden"
      paddingTop={["107px", "40px"]}
      paddingBottom={["107px", "62px"]}
      px={["20px", "61.5px"]}
    >
      <Box></Box>

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
