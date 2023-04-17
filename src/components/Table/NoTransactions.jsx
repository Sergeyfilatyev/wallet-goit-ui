import { Box, Text, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import noTransactionsPicture from "../../assets/images/noTransactions.png";

export const NoTransactions = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Text fontSize={{ s: "2xl", xs: "xl" }} textAlign="center">
        {t("transactionNull")}
      </Text>
      <Image
        src={noTransactionsPicture}
        alt="No Transactions"
        maxWidth={{ xl: "435px", l: "350px", s: "300px", xs: "260px" }}
      ></Image>
    </Box>
  );
};
