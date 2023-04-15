import { Button, Box } from "@chakra-ui/react";

export const VerifyButton = ({ name, func }) => {
  return (
    <Button
      onClick={func}
      type="button"
      variant="greenButton"
      w={{ base: "200px", s: "250px" }}
    >
      {name}
    </Button>
  );
};

export const VerifyText = ({ text }) => {
  return (
    <Box
      as="p"
      fontFamily="Poppins"
      fontWeight="600"
      fontSize="28px"
      lineHeight="1.5"
      mb="30px"
    >
      {text}
    </Box>
  );
};
