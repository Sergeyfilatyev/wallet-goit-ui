import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Progress,
} from "@chakra-ui/react";
import { Field } from "formik";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon, Icon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { useTranslation } from "react-i18next";

export const LoginRegisterFormBox = ({ children, height }) => {
  const { i18n } = useTranslation();
  return (
    <Box
      fontFamily={i18n.language === "en" ? "Circe" : "Arial"}
      borderRadius={{ base: "none", s: "20px" }}
      bgColor="#FFFFFF"
      w={{ base: "100%", s: "480px", m: "533px" }}
      h={height}
      overflow="hidden"
      paddingTop={{ base: "90px", s: "30px" }}
      paddingBottom={{ base: "90px", s: "30px" }}
      px={{
        base: "20px",
        s: "36px",
        m: "62px",
      }}
      as="div"
    >
      {children}
    </Box>
  );
};

export const LoginRegisterFormLogoBox = ({ children }) => {
  return <Flex justifyContent="center">{children}</Flex>;
};

export const LoginRegisterFormInputsBox = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap="20px"
      mt="60px"
      as="div"
    >
      {children}
    </Flex>
  );
};

export const LoginRegisterFormButtonsBox = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap="20px"
      mt={{ base: "40px", s: "42px" }}
      as="div"
    >
      {children}
    </Flex>
  );
};

export const LoginRegisterFormSubmitButton = ({ name }) => {
  return (
    <Button
      type="submit"
      variant="greenButton"
      w={{ base: "280px", s: "300px" }}
    >
      {name}
    </Button>
  );
};

export const LoginRegisterFormRedirectButton = ({ name, to }) => {
  return (
    <Button
      as={Link}
      to={to}
      variant="whiteButton"
      w={{ base: "280px", s: "300px" }}
    >
      {name}
    </Button>
  );
};

export const GoogleButton = ({ name, to }) => {
  return (
    <Button
      as={Link}
      to={to}
      variant="whiteButton"
      w={{ base: "280px", s: "300px" }}
      rightIcon={<FcGoogle />}
    >
      {name}
    </Button>
  );
};

export const LoginRegisterFormEmailInput = ({ placeholder, children }) => {
  return (
    <Box>
      <InputGroup dislay="flex" flexDirection="row">
        <InputLeftElement
          pointerEvents="none"
          children={<LoginRegisterFormEmailIcon />}
        />
        <Input
          as={Field}
          w={{ base: "280px", s: "408px" }}
          name="email"
          placeholder={placeholder}
          _placeholder={{
            color: "#BDBDBD",
            fontSize: "18px",
          }}
        />
      </InputGroup>
      {children}
    </Box>
  );
};

const LoginRegisterFormEmailIcon = () => {
  return (
    <Icon viewBox="0 0 21 16" w="20px" h="20px">
      <path
        d="M18.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 14C0.5 15.1 1.4 16 2.5 16H18.5C19.6 16 20.5 15.1 20.5 14V2C20.5 0.9 19.6 0 18.5 0ZM18.5 4L10.5 9L2.5 4V2L10.5 7L18.5 2V4Z"
        fill="#E0E0E0"
      />
    </Icon>
  );
};

export const LoginRegisterFormPasswordInput = ({
  placeholder,
  children,
  onChange,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<LoginRegisterFormPasswordIcon />}
        />
        <Input
          w={{ base: "280px", s: "408px" }}
          type={show ? "text" : "password"}
          as={Field}
          name="password"
          placeholder={placeholder}
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
      {children}
    </Box>
  );
};

const LoginRegisterFormPasswordIcon = () => {
  return (
    <Icon viewBox="0 0 17 21" w="20px" h="20px">
      <path
        d="M14.5 7H13.5V5C13.5 2.24 11.26 0 8.5 0C5.74 0 3.5 2.24 3.5 5V7H2.5C1.4 7 0.5 7.9 0.5 9V19C0.5 20.1 1.4 21 2.5 21H14.5C15.6 21 16.5 20.1 16.5 19V9C16.5 7.9 15.6 7 14.5 7ZM8.5 16C7.4 16 6.5 15.1 6.5 14C6.5 12.9 7.4 12 8.5 12C9.6 12 10.5 12.9 10.5 14C10.5 15.1 9.6 16 8.5 16ZM11.6 7H5.4V5C5.4 3.29 6.79 1.9 8.5 1.9C10.21 1.9 11.6 3.29 11.6 5V7Z"
        fill="#E0E0E0"
      />
    </Icon>
  );
};

export const LoginRegisterFormConfirmPasswordInput = ({
  children,
  placeholder,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<LoginRegisterFormPasswordIcon />}
        />
        <Input
          w={{ base: "280px", s: "408px" }}
          type={show ? "text" : "password"}
          as={Field}
          name="confirmPassword"
          placeholder={placeholder}
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
      {children}
    </Box>
  );
};

export const FirstPasswordProgressBar = ({ value }) => {
  return (
    <Progress value={value} variant="progressBarPink" h="4px" mt="-12px" />
  );
};

export const SecondPasswordProgressBar = ({ value }) => {
  return (
    <Progress value={value} variant="progressBarGreen" h="4px" mt="-12px" />
  );
};

export const LoginRegisterFormNameInput = ({ children, placeholder }) => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<LoginRegisterFormNameIcon />}
        />
        <Input
          as={Field}
          w={{ base: "280px", s: "408px" }}
          name="name"
          placeholder={placeholder}
          _placeholder={{
            color: "#BDBDBD",
            fontSize: "18px",
          }}
        />
      </InputGroup>
      {children}
    </Box>
  );
};

const LoginRegisterFormNameIcon = () => {
  return (
    <Icon viewBox="0 0 19 18" w="18px" h="18px">
      <path
        d="M0.5 2V16C0.5 17.1 1.39 18 2.5 18H16.5C17.6 18 18.5 17.1 18.5 16V2C18.5 0.9 17.6 0 16.5 0H2.5C1.39 0 0.5 0.9 0.5 2ZM12.5 6C12.5 7.66 11.16 9 9.5 9C7.84 9 6.5 7.66 6.5 6C6.5 4.34 7.84 3 9.5 3C11.16 3 12.5 4.34 12.5 6ZM3.5 14C3.5 12 7.5 10.9 9.5 10.9C11.5 10.9 15.5 12 15.5 14V15H3.5V14Z"
        fill="#E0E0E0"
      />
    </Icon>
  );
};
