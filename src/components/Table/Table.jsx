import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EllipsisText from "react-ellipsis-text";

import { Button } from "@chakra-ui/react";

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
import { useTranslation } from "react-i18next";
import { DashboardEditTransactionButton } from "./TableMobileStyled";

import { selectTransactions } from "../../redux/transactions/transactions-selectors";

import {
  deleteTransaction,
} from "../../redux/transactions/transactions-operations";

export const Table = () => {

  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useDispatch();
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
                    {/* <DeleteButton
                    name={t("delete")}
                    //onClick={() => dispatch(deleteTransaction(item._id))}
                    id={item._id}
                  /> */}
                    <Button
                      type="submit"
                      variant="greenButton"
                      w="67px"
                      h="26px"
                      fontSize="14px"
                      lineHeight="1.5"
                      letterSpacing="0.6px"
                      textTransform="Capitalize"
                      onClick={() => dispatch(deleteTransaction(item._id))}
                    >
                      {t("delete")}
                    </Button>
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
        <p>There are no transactions yet</p>
      )}
      {transactions.length > 10 && <TablePagination handlePageClick={handlePageClick} pageCount={pageCount} />}
    </>
  );
};
