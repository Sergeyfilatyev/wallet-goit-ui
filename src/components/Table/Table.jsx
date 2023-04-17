import { useState } from "react";
import { useSelector } from "react-redux";
import EllipsisText from "react-ellipsis-text";
import { TablePagination } from "./TablePagination";
import {
  TransactionsTable,
  TransactionsTh,
  TransactionsThDate,
  TransactionsThSum,
  TransactionsTr,
  TransactionsTd,
  TransactionsTdDate,
  TransactionsTdComment,
  TransactionsTdSum,
  TransactionsTdButton,
  TransactionsLastTr,
  HeaderButton,
} from "./TableStyled";
import { ModalDelete } from "./ModalDelete";
import { NoTransactions } from "./NoTransactions";
import { useTranslation } from "react-i18next";
import { DashboardEditTransactionButton } from "./TableMobileStyled";
import { selectTransactions } from "../../redux/transactions/transactions-selectors";
import { Flex } from "@chakra-ui/layout";

export const Table = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const transactions = useSelector(selectTransactions);

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
    .filter((_, index) => index < endOffset && index >= itemOffset);

  return (
    <Flex flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} h={"85vh"}>
      {transactions.length > 0 ? (
        <TransactionsTable>
          <thead>
            <tr>
              <TransactionsThDate>
                <HeaderButton name={t("date")} />
              </TransactionsThDate>
              <TransactionsTh>
                <HeaderButton name={t("type")} />
              </TransactionsTh>
              <TransactionsTh>
                <HeaderButton name={t("category")} />
              </TransactionsTh>
              <TransactionsTh>
                <HeaderButton name={t("comment")} />
              </TransactionsTh>
              <TransactionsThSum>
                <HeaderButton name={t("sum")} />
              </TransactionsThSum>
            </tr>
          </thead>

          <tbody id="table-content">
            {transactionsPaginated.map((item) => {
              const date = item.date;

              return (
                <TransactionsTr key={item._id}>
                  <TransactionsTdDate
                    value={`${date.day.toString().padStart(2, "0")}.${date.month
                      .toString()
                      .padStart(2, "0")}.${date.year}`}
                  />
                  <TransactionsTd value={item.income ? "+" : "-"} />
                  <TransactionsTd value={t(item.category)} />
                  <TransactionsTdComment>
                    <EllipsisText text={item.comment} length={26} />
                  </TransactionsTdComment>

                  <TransactionsTdSum
                    value={`${item.amount}.00`}
                    income={item.income}
                  />

                  <DashboardEditTransactionButton transactionToUpdate={item} />
                  <TransactionsTdButton>
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
          </tbody>
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
  );
};
