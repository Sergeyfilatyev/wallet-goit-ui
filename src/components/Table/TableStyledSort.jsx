import { Box } from "@chakra-ui/react";

export const TransactionsTh1 = ({ children }) => {
  return (
    <Box
      height="58px"
      backgroundColor="#FFFFFF"
      fontSize="18px"
      lineHeight="1.5"
      textTransform="Capitalize"
      textAlign="left"
      as="th"
    >
      {children}
    </Box>
  );
};

export const TransactionsThDate1 = ({ children }) => {
  return (
    <Box
      height="58px"
      pl="20px"
      backgroundColor="#FFFFFF"
      borderLeftRadius="30px"
      fontSize="18px"
      lineHeight="1.5"
      textTransform="Capitalize"
      textAlign="left"
      as="th"
    >
      {children}
    </Box>
  );
};

export const TransactionsThSum1 = ({ children }) => {
  return (
    <Box
      colSpan="3"
      height="58px"
      backgroundColor="#FFFFFF"
      borderRightRadius="30px"
      fontSize="18px"
      lineHeight="1.5"
      textTransform="Capitalize"
      textAlign="left"
      as="th"
    >
      {children}
    </Box>
  );
};
