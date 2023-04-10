import { Image, Heading, Flex } from "@chakra-ui/react";
import logo from "../../assets/images/logo.svg";

export const LogoBox = ({ children }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width={{ base: "120px", s: "180px" }}
      as="div"
    >
      {children}
    </Flex>
  );
};

export const LogoImage = () => {
  return (
    <Image
      src={logo}
      alt="Logo"
      boxSize={{ xs: "30px", s: "40px" }}
      marginRight={{ xs: "16px", s: "20px" }}
    />
  );
};

export const LogoText = ({ text }) => {
  return (
    <Heading
      fontFamily="Poppins"
      fontWeight="700"
      fontSize={{ xs: "22px", s: "30px" }}
      lineHeight="1.5"
      as="h1"
    >
      {text}
    </Heading>
  );
};
