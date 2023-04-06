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
    <Box>
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
          <Button type="submit">Register</Button>
          <Button as={"a"}>Log In</Button>
        </Form>
      </Formik>
    </Box>
  );
};
