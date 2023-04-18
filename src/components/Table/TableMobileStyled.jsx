import { Box, Flex } from "@chakra-ui/react";
import { ModalEditTransaction } from "../Modal";

export const TransactionCard = ({ children, income }) => {
  return (
    <Box
      width="100%"
      mb="8px"
      p="0 20px"
      borderRadius="10px"
      borderLeft={income ? "5px solid #24CCA7" : "5px solid #FF6596"}
      bg="#FFFFFF"
    >
      {children}
    </Box>
  );
};

export const DataRow = ({ children }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" height="47px">
      {children}
    </Flex>
  );
};

export const Header = ({ value }) => {
  return (
    <Box
      fontWeight="700"
      fontSize="18px"
      lineHeight="1.5"
      textTransform="Capitalize"
      color="#000000"
    >
      {value}
    </Box>
  );
};

export const TransactionData = ({ value }) => {
  return (
    <Box
      fontSize="16px"
      lineHeight="1.5"
      textAlign="right"
      textTransform="Capitalize"
      color="#000000"
    >
      {value}
    </Box>
  );
};

export const TransactionDataComment = ({ children }) => {
  return (
    <Box
      fontSize="16px"
      lineHeight="1.5"
      textAlign="right"
      textTransform="Capitalize"
      color="#000000"
    >
      {children}
    </Box>
  );
};

export const TransactionDataSum = ({ value, income }) => {
  return (
    <Box
      fontSize="16px"
      lineHeight="1.5"
      fontWeight="700"
      textAlign="right"
      textTransform="Capitalize"
      color={income ? "#24CCA7" : "#FF6596"}
    >
      {value}
    </Box>
  );
};

export const DataRowDivider = () => {
  return (
    <Box
      ml="-25px"
      mr="-20px"
      border="1px solid #DCDCDF"
      width=""
      as="div"
    ></Box>
  );
};

export const DashboardEditTransactionButton = ({ transactionToUpdate }) => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      height="100%"
      maxWidth="40px"
    >
      <ModalEditTransaction transactionToUpdate={transactionToUpdate} />
    </Flex>
  );
};
