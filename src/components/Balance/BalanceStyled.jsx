import { Box } from "@chakra-ui/react";

export const BalanceBox = ({ children }) => {
  return (
    <Box
      backgroundColor="#FFF"
      mb={{ xs: "32px", m: "0px", xl: "32px" }}
      width={{ xs: "280px", m: "335px", xl: "390px" }}
      borderRadius="30px"
      height="80px"
    >
      {children}
    </Box>
  );
};
