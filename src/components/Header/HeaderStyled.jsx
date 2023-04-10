import { Flex } from "@chakra-ui/react";

export const HeaderBox = ({ children }) => {
  return (
    <Flex
      height={{ xs: "60px", m: "80px" }}
      justifyContent="space-between"
      alignItems="center"
      as="header"
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
