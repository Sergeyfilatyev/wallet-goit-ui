import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import logo from "../../assets/images/logo.svg";

export const Logo = () => {
  return (
    <Box width={["120px", "180px"]}>
      <Flex justifyContent="center" alignItems="center">
        <Image
          src={logo}
          alt="Logo"
          boxSize={["30px", "40px"]}
          marginRight={["16px", "20px"]}
        />
        <Heading
          fontFamily="Poppins"
          fontWeight="700"
          fontSize={["17px", "30px"]}
          lineHeight="1.5"
          as="h1"
        >
          Wallet
        </Heading>
      </Flex>
    </Box>
  );
};
