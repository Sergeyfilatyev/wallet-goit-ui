import { Box, Flex, ModalContent } from "@chakra-ui/react";

export const ModalContentBox = ({ children }) => {
  return (
    <>
      <ModalContent
        pt="40px"
        pb="60px"
        px="73px"
        borderRadius={{ base: "none", s: "20px" }}
      >
        {children}
      </ModalContent>
    </>
  );
};

export const ModalHeaderBox = ({ children }) => {
  return (
    <Box
      textAlign="center"
      fontFamily="Poppins"
      fontSize={{ base: "24px", s: "30px" }}
      fontWeight="400"
    >
      {children}
    </Box>
  );
};

export const MadalBodyBox = ({ children }) => {
  return <Box py="40px">{children}</Box>;
};

export const ModalFooterButtonBox = ({ children }) => {
  return (
    <Flex flexDirection="column" alignItems="center" gap="20px" as="div">
      {children}
    </Flex>
  );
};
