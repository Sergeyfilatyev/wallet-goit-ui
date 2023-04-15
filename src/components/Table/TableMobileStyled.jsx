import { Box, Flex, Button } from "@chakra-ui/react";
import { ModalEditTransaction } from "../ModalTransaction/ModalEditTransaction";

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

export const DashboardEditTransactionButton = ({ id }) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} as="td">
      <ModalEditTransaction id={id} />
    </Flex>
  );
};
