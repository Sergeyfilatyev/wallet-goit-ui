import { Box } from "@chakra-ui/react";

export const PageContainer = ({ children }) => {
  return (
    <Box as="div" px={{ xs: "20px", m: "32px", l: "16px" }} width="100%">
      {children}
    </Box>
  );
};
