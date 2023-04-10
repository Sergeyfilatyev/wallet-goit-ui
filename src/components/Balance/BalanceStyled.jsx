import { Box } from "@chakra-ui/react";

export const BalanceBox = ({ children }) => {
  return (
    <Box
      width={{ xs: "280px", m: "336px", xl: "395px" }}
      height={{ xs: "80px", m: "80px", xl: "80px" }}
      backgroundColor="#ffffff"
      borderRadius="30px"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="100%"
      as="div"
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
