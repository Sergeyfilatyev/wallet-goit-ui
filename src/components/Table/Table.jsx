import { useState } from "react";
import { useSelector } from "react-redux";
import EllipsisText from "react-ellipsis-text";
import { TablePagination } from "./TablePagination";
import {
  TransactionsTable,
  TransactionsTh,
  TransactionsThDate,
  TransactionsThType,
  TransactionsThSum,
  TransactionsTr,
  TransactionsTd,
  TransactionsTdDate,
  TransactionsTdType,
  TransactionsThCategory,
  TransactionsTdComment,
  TransactionsTdSum,
  TransactionsTdButton,
  TransactionsLastTr,
  Tbody,
} from "./TableStyled";
import { ModalDelete } from "../Modal";
import { NoTransactions } from "./NoTransactions";
import { useTranslation } from "react-i18next";
import { DashboardEditTransactionButton } from "./TableMobileStyled";
import { selectTransactions } from "../../redux/transactions/transactions-selectors";

import { selectIsLoading } from "../../redux/transactions/transactions-selectors";
import { Loader } from "../Loader";
import { Flex } from "@chakra-ui/layout";

export const Table = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const transactions = useSelector(selectTransactions);
  const isLoading = useSelector(selectIsLoading);

  const { t } = useTranslation();
  const endOffset = itemOffset + 10;
  const pageCount = Math.ceil(transactions.length / 10);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % transactions.length;
    setItemOffset(newOffset);
  };
  const goToPreviousPage = () => {
    setItemOffset(itemOffset - 10);
  };
  const transactionsPaginated = transactions
    .slice()
    .sort(
      (a, b) =>
        b.date.time.localeCompare(a.date.time) ||
        b.createdAt.localeCompare(a.createdAt)
    )
    .filter((_, index) => index <= endOffset && index >= itemOffset);

  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"} h="100%" w="100%">
        {isLoading && transactions.length === 0 && <Loader />}
        {transactions.length > 0 ? (
          <TransactionsTable>
            <thead>
              <tr>
                <TransactionsThDate value={t("date")} />
                <TransactionsThType value={t("type")} />

                <TransactionsThCategory value={t("category")} />
                <TransactionsTh value={t("comment")} />

                <TransactionsThSum value={t("sum")} />
              </tr>
            </thead>

            <Tbody>
              {transactionsPaginated.map((item) => {
                const date = item.date;

                return (
                  <TransactionsTr key={item._id}>
                    <TransactionsTdDate
                      value={`${date.day
                        .toString()
                        .padStart(2, "0")}.${date.month
                        .toString()
                        .padStart(2, "0")}.${date.year}`}
                    />
                    <TransactionsTdType value={item.income ? "+" : "-"} />
                    <TransactionsTd value={t(item.category)} />
                    <TransactionsTdComment>
                      <EllipsisText text={item.comment} length={50} />
                    </TransactionsTdComment>

                    <TransactionsTdSum
                      value={item.amount.toFixed(2)}
                      income={item.income}
                    />

                    <TransactionsTdButton>
                      <DashboardEditTransactionButton
                        transactionToUpdate={item}
                      />
                      <ModalDelete
                        id={item._id}
                        goToPreviousPage={goToPreviousPage}
                      />
                    </TransactionsTdButton>
                  </TransactionsTr>
                );
              })}

              <TransactionsLastTr>
                <td></td>
              </TransactionsLastTr>
            </Tbody>
          </TransactionsTable>
        ) : (
          <NoTransactions />
        )}
        {transactions.length > 10 && (
          <TablePagination
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          />
        )}
      </Flex>
    </>
  );
};
