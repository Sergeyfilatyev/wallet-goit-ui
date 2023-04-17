import { Box, Heading, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const SecondaryLogo = () => {
  const { i18n } = useTranslation();
  return (
    <Box width="188px">
      <Flex justifyContent="center" alignItems="center">
        <Heading
          fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
          fontWeight="400"
          fontSize="30px"
          lineHeight="1.5"
          as="h2"
        >
          Finance App
        </Heading>
      </Flex>
    </Box>
  );
};
