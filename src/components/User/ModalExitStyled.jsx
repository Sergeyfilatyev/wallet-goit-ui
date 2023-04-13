import { Text, Flex, Box, Button } from "@chakra-ui/react";

export const ModalExitText = ({ children }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Text fontFamily="Poppins" fontSize="18px" lineHeight="1.5">
        {children}
      </Text>
    </Flex>
  );
};

export const ModalExitButton = ({ children, onClick }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width={{ xs: "18xp", m: "60px" }}
      onClick={onClick}
      cursor="pointer"
      as="button"
    >
      {children}
    </Flex>
  );
};
