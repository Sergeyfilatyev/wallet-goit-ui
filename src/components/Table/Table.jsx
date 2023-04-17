import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import EllipsisText from "react-ellipsis-text";
import { useState } from "react";
import ReactPaginate from 'react-paginate';
import { IconButton, Box, Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { ModalEditTransaction } from "../../components/ModalTransaction/ModalEditTransaction";
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
  DeleteButton,
  DeleteButtonTest,
  HeaderButton,
} from "./TableStyled";
import { useTranslation } from "react-i18next";
import { DashboardEditTransactionButton } from "./TableMobileStyled";

import { selectTransactions } from "../../redux/transactions/transactions-selectors";

import {
  updateTransaction,
  deleteTransaction,
} from "../../redux/transactions/transactions-operations";

export const Table = () => {
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  const { t } = useTranslation();

  useEffect(() => {
    setCurrentTransactions(transactions);
  }, [transactions]);

  const endOffset = itemOffset + 10;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = transactions.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(transactions.length / 10);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % transactions.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const transactionsPag = transactions.filter((item, index) => index < endOffset && index >= itemOffset);

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
            {transactionsPag.map((item) => {
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
      {transactions.length > 10 && <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />}
    </>
  );
};
