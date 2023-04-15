import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const BalanceBox = ({ children }) => {
  return (
    <Box
      backgroundColor="#FFF"
      mb={{ xs: "32px", m: "0px", l: "32px" }}
      width={{ xs: "100%", l: "390px" }}
      borderRadius="30px"
      height="80px"
      pl={{ xs: "32px", m: "40px", xl: "40px" }}
      pt="8px"
    >
      {children}
    </Box>
  );
};

export const BalanceBoxTitle = () => {
  const { t } = useTranslation();
  return (
    <Box
      fontFamily="Circe"
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
  return (
    <Box
      fontFamily="Poppins"
      fontStyle="normal"
      fontWeight="400px"
      fontSize="30px"
      lineHeight="45px"
      color="#000000"
      as="p"
    >
      UAH {value}
    </Box>
  );
};
