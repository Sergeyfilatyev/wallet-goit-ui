import { Box } from "@chakra-ui/react";
export const FieldErrorMessage = ({ error }) => {
  return (
    <Box
      h="10px"
      py="5px"
      color="#FF6596"
      fontSize="14px"
      fontFamily="Circe"
      width="100%"
    >
      {error}
    </Box>
  );
};
