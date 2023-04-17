import { Button, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const VerifyButton = ({ name, func }) => {
  return (
    <Button
      onClick={func}
      type="button"
      variant="greenButton"
      w={{ base: "200px", s: "250px" }}
    >
      {name}
    </Button>
  );
};

export const VerifyText = ({ text }) => {
  const { i18n } = useTranslation();
  return (
    <Box
      as="p"
      fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
      fontWeight="600"
      fontSize={{ base: "18px", s: "28px" }}
      lineHeight="1.5"
      mb="30px"
      mr="auto"
      ml="auto"
    >
      {text}
    </Box>
  );
};
