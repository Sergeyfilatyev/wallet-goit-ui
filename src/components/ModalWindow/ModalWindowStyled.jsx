import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export const ModalContentBox = ({ children }) => {
  return (
    <>
      <ModalContent pt="40px" pb="60px" px="73px" borderRadius="20px">
        {children}
      </ModalContent>
    </>
  );
};

export const ModalHeaderBox = ({ children }) => {
  return (
    <Box
      as="ModalHeader"
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
  return (
    <Box as="ModalBody" py="40px">
      {children}
    </Box>
  );
};

export const ModalFooterButtonBox = ({ children }) => {
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
