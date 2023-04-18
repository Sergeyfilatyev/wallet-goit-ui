import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const PageContainer = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <Box
      as="div"
      fontFamily={i18n.language === "en" ? "Circe" : "Arial"}
      px={{ xs: "20px", m: "30px" }}
      width={{ xs: "100%", s: "460px", m: "738px", l: "930px", xl: "1250px" }}
      mx="auto"
    >
      {children}
    </Box>
  );
};
