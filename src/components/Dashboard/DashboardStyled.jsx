import { Box } from "@chakra-ui/react";

import purpleEllips from "../../assets/images/purple-ellips-background.png";
import orangeEllips from "../../assets/images/orange-ellips-background.png";

export const DashboardBox = ({ children }) => {
  return (
    <Box
      background={{ xs: "#FFF", s: "#E7EAF2" }}
      backgroundImage={{ s: purpleEllips }}
      backgroundRepeat={{ s: "no-repeat" }}
      backgroundPosition={{ s: "bottom left" }}
      backgroundSize={{ s: "75%", xl: "45%" }}
      width="100%"
      height="100vh"
      as="div"
    >
      <Box
        backgroundImage={{ s: orangeEllips }}
        backgroundRepeat={{ s: "no-repeat" }}
        backgroundPosition={{ s: "top right" }}
        backgroundSize={{ xs: "65%", xl: "40%" }}
        width="100%"
        height="100vh"
        as="div"
      >
        <Box
          py={{ xs: "12px", m: "32px", xl: "40px" }}
          background={{ s: "rgba(255, 255, 255, 0.4)" }}
          backdropFilter={{ s: "blur(25px)" }}
          width="100%"
          height="100vh"
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
      mx="70px"
      mt="-40px"
      as="div"
    ></Box>
  );
};
