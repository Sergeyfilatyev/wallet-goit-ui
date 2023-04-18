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
} from "./TableStyled";
import { ModalDelete } from "../Modal";
import { NoTransactions } from "./NoTransactions";
import { useTranslation } from "react-i18next";
import { DashboardEditTransactionButton } from "./TableMobileStyled";
import { selectTransactions } from "../../redux/transactions/transactions-selectors";

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
  const transactionsPaginated = transactions
    .slice()
    .sort(
      (a, b) =>
        b.date.time.localeCompare(a.date.time) ||
        b.createdAt.localeCompare(a.createdAt)
    )
    .filter((_, index) => index < endOffset && index >= itemOffset);

  return (
    <>
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
                  <TransactionsTdType value={item.income ? "+" : "-"} />
                  <TransactionsTd value={t(item.category)} />
                  <TransactionsTdComment>
                    <EllipsisText text={item.comment} length={50} />
                  </TransactionsTdComment>

                  <TransactionsTdSum
                    value={`${item.amount}.00`}
                    income={item.income}
                  />

                  <DashboardEditTransactionButton transactionToUpdate={item} />
                  <TransactionsTdButton>
                    <ModalDelete id={item._id} />
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
    </>
  );
};
