import { Box, Flex, Spinner } from "@chakra-ui/react";

import currencyBackground from "../../assets/images/currency-background.svg";

export const CurrencyBox = ({ children }) => {
  return (
    <Box
      width={{ xs: "100%", l: "390px" }}
      height={{ xs: "175px", m: "180px", l: "330px" }}
      backgroundColor="#4A56E2"
      borderRadius="30px"
      backgroundImage={currencyBackground}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="100%"
      as="div"
    >
      {children}
    </Box>
  );
};

export const CurrencyTableHead = ({ children }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      borderRadius="30px 30px 0 0"
      backgroundColor="#FFFFFF33"
      height={{ xs: "50px", l: "60px" }}
      gap={{ xs: "25px", m: "40px", l: "40px" }}
      as="div"
    >
      {children}
    </Flex>
  );
};

export const CurrencyTableHeadValue = ({ value }) => {
  return (
    <Box
      color="#FFF"
      textTransform="Capitalize"
      fontWeight="700"
      fontSize="18px"
      lineHeight="1.5"
      textAlign="center"
      display="block"
      width="72px"
      as="p"
    >
      {value}
    </Box>
  );
};

export const CurrencyTableBody = ({ children }) => {
  return (
    <Box py={{ xs: "12px", m: "16px", l: "20px" }} as="div">
      {children}
    </Box>
  );
};

export const CurrencyTableBodyLine = ({ children }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={{ xs: "25px", m: "40px", l: "40px" }}
      as="div"
    >
      {children}
    </Flex>
  );
};

export const CurrencyTableBodyLineValue = ({ value }) => {
  return (
    <Box
      color="#FFF"
      fontSize="16px"
      lineHeight="1.5"
      borderBottom="none"
      textAlign="center"
      display="block"
      width="74px"
      mb={{ xs: "12px", l: "24px" }}
      as="p"
    >
      {value}
    </Box>
  );
};

export const CurrencySpinner = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height={{ xs: "125px", m: "130px", l: "270px" }}
      as="div"
    >
      <Spinner
        thickness="5px"
        speed="1s"
        emptyColor="#FFFFFF33"
        color="#FFF"
        size="xl"
      />
    </Flex>
  );
};
