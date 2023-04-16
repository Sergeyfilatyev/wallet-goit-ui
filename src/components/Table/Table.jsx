import { useSelector, useDispatch } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import EllipsisText from "react-ellipsis-text";
import { useState } from "react";
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
import { ModalDelete } from "./ModalDelete";
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
  
  const transactions = useSelector(selectTransactions);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation();

  useEffect(() => {
    setCurrentTransactions(transactions);
  }, [transactions]);

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
            {transactions.map((item) => {
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
                    onClick={() => dispatch(deleteTransaction(item._id))}
                    id={item._id}
                  /> */}
                    <ModalDelete
                      id={item._id}
                      isOpen={isOpen}
                      onClose={onClose}
                    />
                    <Button
                      type="button"
                      variant="greenButton"
                      w="67px"
                      h="26px"
                      fontSize="14px"
                      lineHeight="1.5"
                      letterSpacing="0.6px"
                      textTransform="Capitalize"
                      onClick={onOpen}
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
    </>
  );
};
