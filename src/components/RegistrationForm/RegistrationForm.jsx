import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import {
  EmailIcon,
  LockIcon,
  UnlockIcon,
  StarIcon,
  ViewOffIcon,
  ViewIcon,
} from "@chakra-ui/icons";

import { validationSchema } from "../../utils/validationSchema";
import { Logo } from "../Logo";
import { useState } from "react";

export const RegistrationForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box
      borderRadius={{ base: "none", s: "20px" }}
      bgColor="#FFFFFF"
      w={{ base: "100%", s: "480px", m: "533px" }}
      h={{ base: "100%", s: "616px" }}
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
          confirmPassword: "",
          firstName: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(
          { email, password, confirmPassword, firstName },
          { setSubmitting, resetForm }
        ) => {
          if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
          }
          console.log(email);
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
            mt="60px"
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="#E0E0E0" h="16px" w="20px" />}
              />
              <Input
                as={Field}
                variant="flushed"
                focusBorderColor="none"
                w={{ base: "280px", s: "408px" }}
                name="email"
                placeholder="E-mail"
                _placeholder={{
                  color: "#BDBDBD",
                  fontSize: "18px",
                }}
              />
            </InputGroup>
            <Text as={ErrorMessage} name="email" fontSize="6xl" />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="#E0E0E0" h="16px" w="21px" />}
              />
              <Input
                variant="flushed"
                focusBorderColor="none"
                w={{ base: "280px", s: "408px" }}
                type={show ? "text" : "password"}
                as={Field}
                name="password"
                placeholder="Password"
                _placeholder={{ color: "#BDBDBD", fontSize: "18px" }}
              />
              <InputRightElement>
                <Button
                  background="transparent"
                  onClick={handleClick}
                  _hover={{ background: "transparent" }}
                >
                  {show ? (
                    <ViewOffIcon
                      color="#4A56E2"
                      h="16px"
                      w="20px"
                      _hover={{ color: "#E0E0E0" }}
                    />
                  ) : (
                    <ViewIcon
                      color="#E0E0E0"
                      h="16px"
                      w="20px"
                      _hover={{ color: "#4A56E2" }}
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text as={ErrorMessage} name="password" />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="#E0E0E0" h="16px" w="21px" />}
              />
              <Input
                variant="flushed"
                focusBorderColor="none"
                w={{ base: "280px", s: "408px" }}
                type={show ? "text" : "password"}
                as={Field}
                name="confirmPassword"
                placeholder="Confirm Password"
                _placeholder={{ color: "#BDBDBD", fontSize: "18px" }}
              />
              <InputRightElement>
                <Button
                  background="transparent"
                  onClick={handleClick}
                  _hover={{ background: "transparent" }}
                >
                  {show ? (
                    <ViewOffIcon
                      color="#4A56E2"
                      h="16px"
                      w="20px"
                      _hover={{ color: "#E0E0E0" }}
                    />
                  ) : (
                    <ViewIcon
                      color="#E0E0E0"
                      h="16px"
                      w="20px"
                      _hover={{ color: "#4A56E2" }}
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text as={ErrorMessage} name="confirmPassword" />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<StarIcon color="#E0E0E0" h="16px" w="21px" />}
              />
              s
              <Input
                variant="flushed"
                focusBorderColor="none"
                w={{ base: "280px", s: "408px" }}
                as={Field}
                _placeholder={{ color: "#BDBDBD", fontSize: "18px" }}
                name="firstName"
                placeholder="First name"
                autoComplete="new-name"
              />
            </InputGroup>
            <Text as={ErrorMessage} name="firstName" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
            mt={{ base: "40px", s: "42px" }}
          >
            <Button
              type="submit"
              variant="greenButton"
              w={{ base: "280px", s: "300px" }}
            >
              Register
            </Button>
            <Button
              as={"a"}
              href="/"
              variant="whiteButton"
              w={{ base: "280px", s: "300px" }}
            >
              Log in
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
