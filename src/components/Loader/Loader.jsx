import { Flex, Spinner } from "@chakra-ui/react";

export const Loader = () => {
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
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};
