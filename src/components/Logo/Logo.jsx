import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import logo from "../../assets/images/logo.svg";

export const Logo = () => {
  return (
    <Box width={{ base: "120px", s: "180px" }}>
      <Flex justifyContent="center" alignItems="center">
        <Image
          src={logo}
          alt="Logo"
          boxSize={{ xs: "30px", s: "40px" }}
          marginRight={{ xs: "16px", s: "20px" }}
        />
        <Heading
          fontFamily="Poppins"
          fontWeight="700"
          fontSize={{ xs: "22px", s: "30px" }}
          lineHeight="1.5"
          as="h1"
        >
          Wallet
        </Heading>
      </Flex>
    </Box>
  );
};
