import { Box, Text, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import noTransactionsPicture from "../../assets/images/noTransactions.png";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/transactions/transactions-selectors";

export const NoTransactions = () => {
  const { t } = useTranslation();
  const isLoading = useSelector(selectIsLoading);

  return (
    !isLoading && (
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
    )
  );
};
