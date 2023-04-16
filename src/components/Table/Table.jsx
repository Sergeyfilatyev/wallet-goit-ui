import { useSelector, useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  const { t } = useTranslation();
  console.log(transactions[0].date.day);

  useEffect(() => {
    setCurrentTransactions(transactions);
    console.log(transactions)
  }, [transactions]);

  return (
    <>
      {currentTransactions.length > 0 ? (
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
              console.log(date);
              return (
                <TransactionsTr key={item._id}>
                  <TransactionsTdDate
                    value={`${date.day}.${date.month + 1}.${
                      date.year
                    }`}
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

                    <DashboardEditTransactionButton id={item._id} />

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
        )
      }
    </>
  );
};
