import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import EllipsisText from "react-ellipsis-text";

import { selectTransactions } from "../../redux/transactions/transactions-selectors";
import { ModalEditTransaction } from "../../components/ModalTransaction/ModalEditTransaction";

import { Button, Box, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import {
  TransactionCard,
  Header,
  TransactionData,
  TransactionDataComment,
  TransactionDataSum,
  DataRow,
  DataRowDivider,
  DashboardEditTransactionButton,
} from "./TableMobileStyled";
import { DeleteButton } from "./TableStyled";

export const TableMobile = () => {
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);

  const transactions = useSelector(selectTransactions);

  const { t } = useTranslation();
  return (
    <>
      {transactions.length > 0 ? (
        <>
          {transactions.map((item) => (
            <TransactionCard key={item._id} income={item.income}>
              <DataRow>
                <Header value={t("date")} />
                <TransactionData
                  value={`${item.date.day
                    .toString()
                    .padStart(2, "0")}.${item.date.month
                    .toString()
                    .padStart(2, "0")}.${item.date.year}`}
                />
              </DataRow>
              <DataRowDivider />

              <DataRow>
                <Header value={t("type")} />
                <TransactionData value={item.income ? "+" : "-"} />
              </DataRow>
              <DataRowDivider />

              <DataRow>
                <Header value={t("category")} />
                <TransactionData value={t(item.category)} />
              </DataRow>
              <DataRowDivider />

              <DataRow>
                <Header value={t("comment")} />
                <TransactionDataComment>
                  <EllipsisText text={item.comment} length={20} />
                </TransactionDataComment>
              </DataRow>
              <DataRowDivider />

              <DataRow>
                <Header value={t("sum")} />
                <TransactionDataSum
                  value={`${item.amount}.00`}
                  income={item.income}
                />
              </DataRow>
              <DataRowDivider />

              <DataRow>
                <DeleteButton name={t("delete")} />
                <Button
                  onClick={() => setIsOpenEditForm(!isOpenEditForm)}
                  leftIcon={<EditIcon />}
                  backgroundColor="transparent"
                  fontSize="14px"
                  lineHeight="1.5"
                  letterSpacing="0.6px"
                  textTransform="Capitalize"
                  _hover={{ color: "#24CCA7" }}
                  _active={{ bg: "transparent" }}
                >
                  Edit
                </Button>
                {isOpenEditForm && <ModalEditTransaction />}
              </DataRow>
            </TransactionCard>
          ))}
        </>
      ) : (
        <Text fontSize="2xl">There are no transactions yet 💰</Text>
      )}
    </>
  );
};
