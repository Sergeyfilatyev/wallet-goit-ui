import { Box, Heading, Flex } from "@chakra-ui/react";

export const SecondaryLogo = () => {
  return (
    <Box width="187px">
      <Flex justifyContent="center" alignItems="center">
        <Heading
          fontFamily="Poppins"
          fontWeight="400"
          fontSize="30px"
          lineHeight="1.5"
          as="h2"
        >
          Finanse App
        </Heading>
      </Flex>
    </Box>
  );
};
