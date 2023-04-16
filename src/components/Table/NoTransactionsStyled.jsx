import { Text } from "@chakra-ui/react";

export const NoTransactionsText = ({ text }) => {
  return (
    <Text fontWeight="700" fontSize="28px" lineHeight="1.5">
      {text}
    </Text>
  );
};
