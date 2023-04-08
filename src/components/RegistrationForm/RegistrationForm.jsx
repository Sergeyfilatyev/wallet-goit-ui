import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon, UnlockIcon, StarIcon } from "@chakra-ui/icons";

import { validationSchema } from "../../utils/validationSchema";
import { Logo } from "../Logo";

export const RegistrationForm = () => {
  return (
    <Box
      borderRadius={{ base: "none", s: "20px" }}
      bgColor="#FFFFFF"
      w={{ base: "100%", s: "480px", m: "533px" }}
      h="100%"
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
                autoComplete="new-email"
              />
            </InputGroup>
            <Text as={ErrorMessage} name="email" fontSize="6xl" />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<UnlockIcon color="#E0E0E0" h="16px" w="21px" />}
              />

              <Input
                variant="flushed"
                as={Field}
                type="password"
                name="password"
                placeholder="Password"
                _placeholder={{ color: "#BDBDBD", fontSize: "18px" }}
                autoComplete="new-password"
              />
            </InputGroup>
            <Text as={ErrorMessage} name="password" />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="#E0E0E0" h="16px" w="21px" />}
              />

              <Input
                variant="flushed"
                as={Field}
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                _placeholder={{
                  color: "#BDBDBD",
                  fontSize: "18px",
                }}
                autoComplete="new-password"
              />
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
                as={Field}
                name="firstName"
                placeholder="First name"
                _placeholder={{ color: "#BDBDBD", fontSize: "18px" }}
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
            mt={["40px", "42px"]}
          >
            <Button type="submit" variant="greenButton" w={["280px", "300px"]}>
              Register
            </Button>
            <Button
              as={"a"}
              href="/"
              variant="whiteButton"
              w={["280px", "300px"]}
            >
              Log In
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
