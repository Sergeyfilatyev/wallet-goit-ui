import { Box } from "@chakra-ui/react";

export const TransactionsTable = ({ children }) => {
  return (
    <Box
      width="100%"
      //width={{ m: "705px", xl: "715px" }}
      as="table"
    >
      {children}
    </Box>
  );
};

export const TransactionsTh = ({ value }) => {
  return (
    <Box
      height="58px"
      pl="20px"
      fontSize="18px"
      lineHeight="1.5"
      fontWeight="700"
      backgroundColor="#FFFFFF"
      textAlign="left"
      as="th"
    >
      {value}
    </Box>
  );
};

export const TransactionsThType = ({ value }) => {
  return (
    <Box
      width="37px"
      height="58px"
      fontSize="18px"
      lineHeight="1.5"
      fontWeight="700"
      backgroundColor="#FFFFFF"
      textAlign="center"
      as="th"
    >
      {value}
    </Box>
  );
};

export const TransactionsThCategory = ({ value }) => {
  return (
    <Box
      width="104px"
      height="58px"
      pl="20px"
      fontSize="18px"
      lineHeight="1.5"
      fontWeight="700"
      backgroundColor="#FFFFFF"
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
      fontWeight="700"
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
      fontWeight="700"
      color="black"
      textAlign="left"
      as="th"
    >
      {value}
    </Box>
  );
};

export const HeaderButton = ({ name }) => {
  return (
    <Box
      type="submit"
      fontSize="18px"
      lineHeight="1.5"
      fontWeight="700"
      textTransform="Capitalize"
      as="button"
    >
      {name}
    </Box>
  );
};

export const TransactionsTr = ({ children }) => {
  return (
    <Box
      borderBottom="1px solid #DCDCDF"
      boxShadow="0px 1px 0px rgba(255, 255, 255, 0.6)"
      // _after={{
      //   content: '""',
      //   w: "700px",
      //   height: "4px",
      //   bgColor: "red",
      //   display: "inline-block",
      //   mr: "5px",
      // }}
      as="tr"
    >
      {children}
    </Box>
  );
};

export const TransactionsTd = ({ value }) => {
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

export const TransactionsTdDate = ({ value }) => {
  return (
    <Box
      width="104px"
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

export const TransactionsTdType = ({ value }) => {
  return (
    <Box
      //width="104px"
      px="20px"
      height="52px"
      fontSize="16px"
      lineHeight="1.5"
      color="#000000"
      textAlign="center"
      as="td"
    >
      {value}
    </Box>
  );
};

export const TransactionsTdComment = ({ children }) => {
  return (
    <Box
      maxWidth={{ m: "280px" }}
      pl="20px"
      height="52px"
      fontSize="16px"
      lineHeight="1.5"
      color="#000000"
      textAlign="left"
      as="td"
    >
      {children}
    </Box>
  );
};

export const TransactionsTdSum = ({ value, income }) => {
  return (
    <Box
      height="52px"
      fontWeight="700"
      fontSize="16px"
      lineHeight="1.5"
      color={income ? "#24CCA7" : "#FF6596"}
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

export const TransactionsTdButton = ({ children }) => {
  return (
    <Box height="52px" textAlign="center" as="td">
      {children}
    </Box>
  );
};
