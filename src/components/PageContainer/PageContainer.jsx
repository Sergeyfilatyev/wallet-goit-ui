import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const PageContainer = ({ children }) => {
  const { i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <Box
      as="div"
      fontFamily={i18n.language === "en" ? "Circe" : "Arial"}
      px={{ base: "20px", m: "32px", l: "16px" }}
      width="100%"
    >
      {children}
    </Box>
  );
};
