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

export const BalanceBoxTitle = () => {
  return (
    <Box
      font-family="Circe"
      font-style="normal"
      font-weight="400px"
      font-size="12px"
      line-height="18px"
      text-transform="uppercase"
      color="#a6a6a6"
      as="p"
    >
      Your balance
    </Box>
  );
};

export const BalanceBoxNumber = ({ value }) => {
  return (
    <Box
      font-family="Poppins"
      font-style="normal"
      font-weight="400px"
      font-size="30px"
      line-height="45px"
      color="#000000"
      as="p"
    >
      {value}
    </Box>
  );
};
