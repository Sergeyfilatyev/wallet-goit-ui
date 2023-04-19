import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import EllipsisText from "react-ellipsis-text";
import { animateScroll as scroll } from "react-scroll";
import { selectTransactions } from "../../redux/transactions/transactions-selectors";
import { ModalEditTransaction } from "../Modal";
import { TablePagination } from "./TablePagination";
import {
  TransactionCard,
  Header,
  TransactionData,
  TransactionDataComment,
  TransactionDataSum,
  DataRow,
  DataRowDivider,
} from "./TableMobileStyled";
import { ModalDelete } from "../Modal";
import { NoTransactions } from "./NoTransactions";

import { Balance } from "../Balance/Balance";

export const TableMobile = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const transactions = useSelector(selectTransactions);
  const { t } = useTranslation();
  const endOffset = itemOffset + 10;
  const pageCount = Math.ceil(transactions.length / 10);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % transactions.length;
    setItemOffset(newOffset);
    scroll.scrollToTop();
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
    <>
      <Balance />
      {transactions.length > 0 ? (
        <>
          {transactionsPaginated.map((item) => (
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
                  <EllipsisText text={item.comment} length={35} />
                </TransactionDataComment>
              </DataRow>
              <DataRowDivider />

              <DataRow>
                <Header value={t("sum")} />
                <TransactionDataSum
                  value={Number(item.amount.toFixed(2))
                    .toLocaleString()
                    .replaceAll(",", " ")}
                  income={item.income}
                />
              </DataRow>
              <DataRowDivider />

              <DataRow>
                <ModalDelete
                  id={item._id}
                  goToPreviousPage={goToPreviousPage}
                />
                <ModalEditTransaction transactionToUpdate={item} />
              </DataRow>
            </TransactionCard>
          ))}
        </>
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
