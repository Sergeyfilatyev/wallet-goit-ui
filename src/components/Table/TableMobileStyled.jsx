import { Box, Flex, Button } from "@chakra-ui/react";

export const Card = ({ children }) => {
  return (
    <Box
      width="280px"
      mb="8px"
      p="0 20px"
      borderRadius="10px"
      borderLeft="5px solid #FF6596"
      bg="#FFFFFF"
      // bg="#fae6e6"
    >
      {children}
    </Box>
  );
};

export const DataRow = ({ children }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height="47px"
      //borderBottom="1px solid #DCDCDF"
    >
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
      maxWidth="130px"
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

export const DataRowDivider = () => {
  return (
    <Box ml="-25px" border="1px solid #DCDCDF" width="280px" as="div"></Box>
  );
};
