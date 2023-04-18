import { Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const BalanceBox = ({ children }) => {
  return (
    <Flex
      backgroundColor="#FFF"
      mb={{ xs: "32px", m: "0px", xl: "32px" }}
      width="100%"
      borderRadius="30px"
      height="80px"
      pt="8px"
      px="20px"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
    >
      {children}
    </Flex>
  );
};

export const BalanceBoxTitle = () => {
  const { t } = useTranslation();
  return (
    <Box
      fontStyle="normal"
      fontWeight="400px"
      fontSize="12px"
      lineHeight="18px"
      textTransform="uppercase"
      color="#a6a6a6"
      as="p"
    >
      {t("balance")}
    </Box>
  );
};

export const BalanceBoxNumber = ({ value }) => {
  const { i18n } = useTranslation();
  return (
    <Box
      fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
      fontStyle="normal"
      fontWeight="400px"
      fontSize="30px"
      lineHeight="45px"
      color="#000000"
      as="p"
    >
      ₴ {value}
    </Box>
  );
};
