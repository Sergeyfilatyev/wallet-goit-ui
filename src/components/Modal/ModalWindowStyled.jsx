import { Box, Flex, ModalCloseButton, ModalContent } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const ModalContentBox = ({ children }) => {
  return (
    <>
      <ModalContent
        pt="40px"
        pb="60px"
        px="73px"
        borderRadius={{ base: "none", s: "20px" }}
        minH={{ xs: "100vh", s: "auto" }}
        maxH={{ xs: "100%", s: "auto" }}
        position={"fixed"}
      >
        {children}
      </ModalContent>
    </>
  );
};

export const ModalHeaderBox = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <Box
      textAlign="center"
      fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
      fontSize={{ base: "24px", s: "30px" }}
      fontWeight="400"
    >
      {children}
    </Box>
  );
};

export const ModalCloseButtonStyle = () => {
  return (
    <ModalCloseButton
      background="#FFFFFF"
      borderRadius="20px"
      _hover={{
        background: "#FFFFFF",
        color: "#4A56E2",
        border: "1px solid #4A56E2;",
        borderRadius: "20px",
        boxShadow: "0px 6px 15px  rgba(74, 86, 226, 0.35)",
        
      }}
    />
  );
};

export const MadalBodyBox = ({ children }) => {
  return <Box py="40px">{children}</Box>;
};

export const ModalFooterButtonBox = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <Flex
      flexDirection="column"
      fontFamily={i18n.language === "en" ? "Circe" : "Arial"}
      alignItems="center"
      gap="20px"
      as="div"
    >
      {children}
    </Flex>
  );
};
