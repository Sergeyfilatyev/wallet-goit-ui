import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const HeaderBox = ({ children }) => {
  return (
    <Flex
      height={{ xs: "60px", m: "80px" }}
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      zIndex="99"
      as="header"
      backgroundColor="#FFF"
      width="100%"
    >
      {children}
    </Flex>
  );
};

export const HeaderContentBox = ({ children }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" as="div">
      {children}
    </Flex>
  );
};

export const HeaderLogoLink = ({ children }) => {
  return (
    <Box to="/dashboard/home" as={Link}>
      {children}
    </Box>
  );
};
