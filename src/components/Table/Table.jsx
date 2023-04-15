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

import { selectTransactions } from "../../redux/transactions/transactions-selectors";

import {
  updateTransaction,
  deleteTransaction,
} from "../../redux/transactions/transactions-operations";

// const userTransactions = [
//   {
//     _id: "64327d7090632194c689a5b6",
//     amount: 200,
//     income: true,
//     category: "car",
//     comment:
//       "test this is loooong long comment for testing  react-ellipsis-text",
//     date: {
//       time: 1681030445404,
//       day: 9,
//       month: 1,
//       year: 2023,
//     },
//     owner: "64327d3790632194c689a5b0",
//     createdAt: "2023-04-09T08:55:12.508Z",
//     updatedAt: "2023-04-09T08:55:12.508Z",
//   },
//   {
//     _id: "64327e8b90632194c689a5bf",
//     amount: 300,
//     income: false,
//     category: "products",
//     comment: "test",
//     date: {
//       time: 1681030445404,
//       day: 9,
//       month: 2,
//       year: 2023,
//     },
//     owner: "64327d3790632194c689a5b0",
//     createdAt: "2023-04-09T08:59:55.547Z",
//     updatedAt: "2023-04-09T08:59:55.547Z",
//   },
//   {
//     _id: "64327e9590632194c689a5c5",
//     amount: 3300,
//     income: false,
//     category: "car",
//     comment: "test",
//     date: {
//       time: 1681030445404,
//       day: 9,
//       month: 3,
//       year: 2023,
//     },
//     owner: "64327d3790632194c689a5b0",
//     createdAt: "2023-04-09T09:00:05.907Z",
//     updatedAt: "2023-04-09T09:00:05.907Z",
//   },
//   {
//     _id: "64327e9590632194c689a5c3",
//     amount: 3300,
//     income: false,
//     category: "car",
//     comment: "test",
//     date: {
//       time: 1681030445404,
//       day: 9,
//       month: 4,
//       year: 2023,
//     },
//     owner: "64327d3790632194c689a5b0",
//     createdAt: "2023-04-09T09:00:05.907Z",
//     updatedAt: "2023-04-09T09:00:05.907Z",
//   },
//   {
//     _id: "64327d7090632194c689a5b0",
//     amount: 200,
//     income: true,
//     category: "car",
//     comment: "test",
//     date: {
//       time: 1681030445404,
//       day: 9,
//       month: 1,
//       year: 2023,
//     },
//     owner: "64327d3790632194c689a5b0",
//     createdAt: "2023-04-09T08:55:12.508Z",
//     updatedAt: "2023-04-09T08:55:12.508Z",
//   },
//   {
//     _id: "64327e8b90632194c689a5b0",
//     amount: 300,
//     income: false,
//     category: "products",
//     comment: "test",
//     date: {
//       time: 1681030445404,
//       day: 9,
//       month: 2,
//       year: 2023,
//     },
//     owner: "64327d3790632194c689a5b0",
//     createdAt: "2023-04-09T08:59:55.547Z",
//     updatedAt: "2023-04-09T08:59:55.547Z",
//   },
//   {
//     _id: "64327e9590632194c689a5c2",
//     amount: 3300,
//     income: false,
//     category: "car",
//     comment: "test",
//     date: {
//       time: 1681030445404,
//       day: 9,
//       month: 3,
//       year: 2023,
//     },
//     owner: "64327d3790632194c689a5b0",
//     createdAt: "2023-04-09T09:00:05.907Z",
//     updatedAt: "2023-04-09T09:00:05.907Z",
//   },
//   {
//     _id: "64327e9590632194c689a5c1",
//     amount: 3300,
//     income: false,
//     category: "car",
//     comment: "test",
//     date: {
//       time: 1681030445404,
//       day: 9,
//       month: 4,
//       year: 2023,
//     },
//     owner: "64327d3790632194c689a5b0",
//     createdAt: "2023-04-09T09:00:05.907Z",
//     updatedAt: "2023-04-09T09:00:05.907Z",
//   },
// ];

export const Table = () => {
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  const { t } = useTranslation();

  useEffect(() => {
    setCurrentTransactions(transactions);
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
            {currentTransactions.map((item) => (
              <TransactionsTr key={item._id}>
                <TransactionsTdDate
                  value={`${item.date.day}.${item.date.month + 1}.${
                    item.date.year
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
                <TransactionsTdButton>
                  <IconButton
                    onClick={() => setIsOpenEditForm(!isOpenEditForm)}
                    backgroundColor="transparent"
                    aria-label="Edit transaction"
                    icon={<EditIcon />}
                    _hover={{ color: "#24CCA7" }}
                    _active={{ bg: "transparent" }}
                  />
                  {isOpenEditForm && <ModalEditTransaction />}
                </TransactionsTdButton>
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
            ))}

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
