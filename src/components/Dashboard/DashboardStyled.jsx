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
      backgroundSize={{ s: "75%", l: "45%" }}
      width="100vw"
      height="100vh"
      display="relative"
      as="div"
    >
      <Box
        backgroundImage={{ s: orangeEllips }}
        backgroundRepeat={{ s: "no-repeat" }}
        backgroundPosition={{ s: "top right" }}
        backgroundSize={{ xs: "65%", l: "40%" }}
        width="100%"
        height="100%"
        as="div"
      >
        <Box
          pb={{ xs: "12px", m: "32px", l: "40px" }}
          pt={{ xs: "72px", m: "112px", l: "120px" }}
          background={{ xs: "rgba(255, 255, 255, 0.4)" }}
          backdropFilter={{ xs: "blur(25px)" }}
          width="100%"
          height="100%"
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
      h="100vh"
      mx={{ l: "20px", xl: "70px" }}
      mt="-120px"
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
    <Flex flexDirection={{ xs: "column", l: "row" }} width="100%">
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
      flexDirection={{ m: "row", l: "column" }}
      gap={{ xs: "0px", m: "32px", l: "0px" }}
      width={{ xs: "100%", l: "280px", xl: "auto" }}
      marginBottom={{ m: "20px" }}
    >
      {children}
    </Flex>
  );
};

export const DashboardContentSecondPart = ({ children }) => {
  return (
    <Flex
      // flexDirection={{ xs: "column" }}
      flexWrap="wrap"
      justifyContent="center"
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
