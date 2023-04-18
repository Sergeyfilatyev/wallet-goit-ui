import { Text, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const ModalExitText = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <Flex justifyContent="center" alignItems="center">
      <Text
        fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
        fontSize="18px"
        lineHeight="1.5"
      >
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
      px={"5px"}
      py={"5px"}
      borderRadius={"10px"}
      onClick={onClick}
      cursor="pointer"
      _hover={{ backgroundColor: "gray.100" }}
      as="button"
    >
      {children}
    </Flex>
  );
};
