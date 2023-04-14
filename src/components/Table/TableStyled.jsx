import { Box, Button } from "@chakra-ui/react";

export const TransactionsTable = ({ children }) => {
  return (
    <Box width={{ m: "705px", xl: "715px" }} as="table">
      {children}
    </Box>
  );
};

export const TransactionsTh = ({ children }) => {
  return (
    <Box height="58px" backgroundColor="#FFFFFF" textAlign="left" as="th">
      {children}
    </Box>
  );
};

export const TransactionsThDate = ({ children }) => {
  return (
    <Box
      height="58px"
      pl="20px"
      backgroundColor="#FFFFFF"
      borderLeftRadius="30px"
      textAlign="left"
      as="th"
    >
      {children}
    </Box>
  );
};

export const TransactionsThSum = ({ children }) => {
  return (
    <Box
      colSpan="3"
      height="58px"
      backgroundColor="#FFFFFF"
      borderRightRadius="30px"
      textAlign="left"
      as="th"
    >
      {children}
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

export const TransactionsTdComment = ({ children }) => {
  return (
    <Box
      maxWidth="125px"
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

export const TransactionsTdButton = ({ children }) => {
  return (
    <Box height="52px" textAlign="center" as="td">
      {children}
    </Box>
  );
};

export const DeleteButton = ({ name }) => {
  return (
    <Button
      type="submit"
      variant="greenButton"
      w="67px"
      h="26px"
      fontSize="14px"
      lineHeight="1.5"
      letterSpacing="0.6px"
      textTransform="Capitalize"
    >
      {name}
    </Button>
  );
};

// export const DataRowDivider = () => {
//   return (
//     <Box
//       // ml="-25px"
//       border="1px solid #DCDCDF"
//       boxShadow="0px 1px 0px rgba(255, 255, 255, 0.6)"
//       width="700px"
//       as="div"
//     ></Box>
//   );
// };
