import { Box } from "@chakra-ui/react";

export const TransactionsTable = ({ children }) => {
  return (
    <Box width={{ m: "705px", xl: "715px" }} as="table">
      {children}
    </Box>
  );
};

export const TransactionsTh = ({ value }) => {
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
      {value}
    </Box>
  );
};

export const TransactionsThDate = ({ value }) => {
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
      {value}
    </Box>
  );
};

export const TransactionsThSum = ({ value }) => {
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
      {value}
    </Box>
  );
};

export const TransactionsTr = ({ children }) => {
  return (
    <Box boxShadow="0px 1px 0px 0px #FFFFFF99;" as="tr">
      {children}
    </Box>
  );
};

export const TransactionsTd = ({ value }) => {
  return (
    <Box
      height="52px"
      fontSize="16px"
      lineHeight="1.5"
      color="#000000"
      textAlign="left"
      as="td"
    >
      {value}
    </Box>
  );
};

export const TransactionsTdDate = ({ value }) => {
  return (
    <Box
      pl="20px"
      height="52px"
      fontSize="16px"
      lineHeight="1.5"
      color="#000000"
      textAlign="left"
      as="td"
    >
      {value}
    </Box>
  );
};

export const TransactionsTdSum = ({ value }) => {
  return (
    <Box
      height="52px"
      fontWeight="700"
      fontSize="16px"
      lineHeight="1.5"
      color="#000000"
      textAlign="left"
      as="td"
    >
      {value}
    </Box>
  );
};

export const TransactionsLastTr = ({ children }) => {
  return (
    <Box lineHeight="0" as="tr">
      {children}
    </Box>
  );
};

export const TransactionsTdDelete = ({ children }) => {
  return (
    <Box height="52px" textAlign="center" as="td">
      {children}
    </Box>
  );
};
