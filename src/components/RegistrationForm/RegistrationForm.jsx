import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon, UnlockIcon, StarIcon } from "@chakra-ui/icons";

import { validationSchema } from "../../utils/validationSchema";

export const RegistrationForm = () => {
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
                children={<EmailIcon color="gray.300" />}
              />
              <Input
                as={Field}
                name="email"
                placeholder="E-mail"
                autoComplete="new-email"
              />
            </InputGroup>
            <Text as={ErrorMessage} name="email" fontSize="6xl" />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<UnlockIcon color="gray.300" />}
              />
              <Input
                as={Field}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="new-password"
              />
            </InputGroup>
            <Text as={ErrorMessage} name="password" />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input
                as={Field}
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                autoComplete="new-password"
              />
            </InputGroup>
            <Text as={ErrorMessage} name="confirmPassword" />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<StarIcon color="gray.300" />}
              />
              <Input
                as={Field}
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
