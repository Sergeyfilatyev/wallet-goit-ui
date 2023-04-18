import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ModalAddTransaction } from "../Modal";
import purpleEllips from "../../assets/images/purple-ellips-background.png";
import orangeEllips from "../../assets/images/orange-ellips-background.png";
import { useTranslation } from "react-i18next";

export const DashboardBox = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <Box
      fontFamily={i18n.language === "en" ? "Circe" : "Arial"}
      background="#E7EAF2"
      backgroundImage={{ s: purpleEllips }}
      backgroundRepeat={{ s: "no-repeat" }}
      backgroundPosition={{ s: "bottom left" }}
      backgroundSize={{ s: "75%", xl: "45%" }}
      width="100%"
      minHeight="100vh"
      maxHeight="100%"
      display="relative"
      as="div"
    >
      <Box
        backgroundImage={{ s: orangeEllips }}
        backgroundRepeat={{ s: "no-repeat" }}
        backgroundPosition={{ s: "top right" }}
        backgroundSize={{ xs: "65%", xl: "40%" }}
        width="100%"
        minHeight="100vh"
        maxHeight="100%"
        as="div"
      >
        <Box
          pb={{ xs: "12px", m: "32px", xl: "40px" }}
          pt={{ xs: "72px", m: "112px", xl: "120px" }}
          background={{ xs: "rgba(255, 255, 255, 0.4)" }}
          backdropFilter={{ xs: "blur(25px)" }}
          width="100%"
          minHeight="100vh"
          maxHeight="100%"
          as="div"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export const DashboardDivider = () => {
  return (
    <Box
      border="1px solid #E7E5F2"
      boxShadow="-1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);"
      h="auto"
      mx={{ xl: "60px" }}
      mt="-100px"
      mb="-40px"
      minHeight="100vh"
      maxHeight="100%"
      as="div"
    />
  );
};

export const DashboardAddTransactionButton = () => {
  const location = useLocation();
  const dontDisplay = () => {
    if (location.pathname === "/dashboard/statistics") {
      return "none";
    }
    return "block";
  };

  return (
    <Box
      position="fixed"
      bottom={{ xs: "20px", m: "40px" }}
      right={{ xs: "20px", m: "40px" }}
      display={dontDisplay()}
    >
      <ModalAddTransaction />
    </Box>
  );
};

export const DashboardContent = ({ children }) => {
  return (
    <Flex flexDirection={{ xs: "column", xl: "row" }} width="100%">
      {children}
    </Flex>
  );
};

export const DashboardNavigationBalanceBox = ({ children }) => {
  return (
    <Flex flexDirection="column" justifyContent="space-between" width="100%">
      {children}
    </Flex>
  );
};

export const DashboardContentFirstPart = ({ children }) => {
  return (
    <Flex
      flexDirection={{ m: "row", xl: "column" }}
      gap={{ xs: "0px", m: "32px", xl: "0px" }}
      width={{ xs: "100%" }}
      maxWidth={{ xl: "350px" }}
      marginBottom={{ m: "20px" }}
    >
      {children}
    </Flex>
  );
};

export const DashboardContentSecondPart = ({ children }) => {
  return (
    <Flex
      flexDirection={{ xs: "column", m: "row" }}
      justifyContent="center"
      alignItems="center"
      gap="15px"
      width="100%"
    >
      {children}
    </Flex>
  );
};

export const DashboardRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/dashboard/currency" && navigate("/dashboard/home");
  }, [navigate, location]);
};
