// import { useSelector, useDispatch } from "react-redux";
import EllipsisText from "react-ellipsis-text";

import { IconButton, Box } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import {
  TransactionsTable,
  TransactionsTh,
  TransactionsThDate,
  TransactionsThSum,
  TransactionsTr,
  TransactionsTd,
  TransactionsTdDate,
  TransactionsTdComment,
  TransactionsTdButton,
  TransactionsLastTr,
  DeleteButton,
  HeaderButton,
} from "./TableStyled";
import { useTranslation } from "react-i18next";

// import { selectTransactions } from "../../redux/transactions/transactions-selectors";
// import {
//   deleteTransaction,
//   updateTransaction,
// } from "../../redux/transactions/transactions-operations";

const userTransactions = [
  {
    _id: "64327d7090632194c689a5b6",
    amount: 200,
    income: true,
    category: "car",
    comment:
      "test this is loooong long comment for testing  react-ellipsis-text",
    date: {
      time: 1681030445404,
      day: 9,
      month: 1,
      year: 2023,
    },
    owner: "64327d3790632194c689a5b0",
    createdAt: "2023-04-09T08:55:12.508Z",
    updatedAt: "2023-04-09T08:55:12.508Z",
  },
  {
    _id: "64327e8b90632194c689a5bf",
    amount: 300,
    income: false,
    category: "products",
    comment: "test",
    date: {
      time: 1681030445404,
      day: 9,
      month: 2,
      year: 2023,
    },
    owner: "64327d3790632194c689a5b0",
    createdAt: "2023-04-09T08:59:55.547Z",
    updatedAt: "2023-04-09T08:59:55.547Z",
  },
  {
    _id: "64327e9590632194c689a5c5",
    amount: 3300,
    income: false,
    category: "car",
    comment: "test",
    date: {
      time: 1681030445404,
      day: 9,
      month: 3,
      year: 2023,
    },
    owner: "64327d3790632194c689a5b0",
    createdAt: "2023-04-09T09:00:05.907Z",
    updatedAt: "2023-04-09T09:00:05.907Z",
  },
  {
    _id: "64327e9590632194c689a5c3",
    amount: 3300,
    income: false,
    category: "car",
    comment: "test",
    date: {
      time: 1681030445404,
      day: 9,
      month: 4,
      year: 2023,
    },
    owner: "64327d3790632194c689a5b0",
    createdAt: "2023-04-09T09:00:05.907Z",
    updatedAt: "2023-04-09T09:00:05.907Z",
  },
  {
    _id: "64327d7090632194c689a5b0",
    amount: 200,
    income: true,
    category: "car",
    comment: "test",
    date: {
      time: 1681030445404,
      day: 9,
      month: 1,
      year: 2023,
    },
    owner: "64327d3790632194c689a5b0",
    createdAt: "2023-04-09T08:55:12.508Z",
    updatedAt: "2023-04-09T08:55:12.508Z",
  },
  {
    _id: "64327e8b90632194c689a5b0",
    amount: 300,
    income: false,
    category: "products",
    comment: "test",
    date: {
      time: 1681030445404,
      day: 9,
      month: 2,
      year: 2023,
    },
    owner: "64327d3790632194c689a5b0",
    createdAt: "2023-04-09T08:59:55.547Z",
    updatedAt: "2023-04-09T08:59:55.547Z",
  },
  {
    _id: "64327e9590632194c689a5c2",
    amount: 3300,
    income: false,
    category: "car",
    comment: "test",
    date: {
      time: 1681030445404,
      day: 9,
      month: 3,
      year: 2023,
    },
    owner: "64327d3790632194c689a5b0",
    createdAt: "2023-04-09T09:00:05.907Z",
    updatedAt: "2023-04-09T09:00:05.907Z",
  },
  {
    _id: "64327e9590632194c689a5c1",
    amount: 3300,
    income: false,
    category: "car",
    comment: "test",
    date: {
      time: 1681030445404,
      day: 9,
      month: 4,
      year: 2023,
    },
    owner: "64327d3790632194c689a5b0",
    createdAt: "2023-04-09T09:00:05.907Z",
    updatedAt: "2023-04-09T09:00:05.907Z",
  },
];

export const Table = () => {
  // const transactions = useSelector(selectTransactions);
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <>
      {userTransactions.length > 0 ? (
        <TransactionsTable>
          <thead>
            <tr>
              {/* <TransactionsThDate value="date" />
              <TransactionsTh value="type" />
              <TransactionsTh value="category" />
              <TransactionsTh value="comment" />
              <TransactionsThSum value="sum" /> */}
              <TransactionsThDate>
                <HeaderButton name={t("date")} />
                {/* <button id="date">date</button> */}
              </TransactionsThDate>
              <TransactionsTh>
                <HeaderButton name={t("type")} />
                {/* <button id="type">type</button> */}
              </TransactionsTh>
              <TransactionsTh>
                <HeaderButton name={t("category")} />
                {/* <button id="category">category</button> */}
              </TransactionsTh>
              <TransactionsTh>
                <HeaderButton name={t("comment")} />
                {/* <button id="comment">comment</button> */}
              </TransactionsTh>
              <TransactionsThSum>
                <HeaderButton name={t("sum")} />
                {/* <button id="sum">sum</button> */}
              </TransactionsThSum>
            </tr>
          </thead>

          <tbody id="table-content">
            {userTransactions.map((item) => (
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
                {/* <TransactionsTdSum value={`${item.amount}.00`} /> */}
                <Box
                  height="52px"
                  fontWeight="700"
                  fontSize="16px"
                  lineHeight="1.5"
                  // color="#000000"
                  color={item.income ? "#24CCA7" : "#FF6596"}
                  textAlign="left"
                  as="td"
                >{`${item.amount}.00`}</Box>
                <TransactionsTdButton>
                  <IconButton
                    backgroundColor="transparent"
                    aria-label="Edit transaction"
                    icon={<EditIcon />}
                    _hover={{ color: "#24CCA7" }}
                    _active={{ bg: "transparent" }}
                  />
                </TransactionsTdButton>
                <TransactionsTdButton>
                  <DeleteButton
                    name={t("delete")}
                    // onClick={() => dispatch(deleteTransaction(item._id))}
                  />
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
