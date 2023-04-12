import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import {
  TransactionsTable,
  TransactionsTh,
  TransactionsThDate,
  TransactionsThSum,
  TransactionsTr,
  TransactionsTd,
  TransactionsTdDate,
  TransactionsTdSum,
  TransactionsTdButton,
  TransactionsLastTr,
} from "./TableStyled";

const userTransactions = [
  {
    _id: "64327d7090632194c689a5b6",
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
  return (
    <>
      {userTransactions.length > 0 ? (
        <TransactionsTable>
          <thead>
            <tr>
              <TransactionsThDate value="date" />
              <TransactionsTh value="type" />
              <TransactionsTh value="category" />
              <TransactionsTh value="comment" />
              <TransactionsThSum value="sum" />
            </tr>
          </thead>

          <tbody>
            {userTransactions.map((item) => (
              <TransactionsTr key={item._id}>
                <TransactionsTdDate
                  value={`${item.date.day}.${item.date.month + 1}.${
                    item.date.year
                  }`}
                />
                <TransactionsTd value={item.income ? "+" : "-"} />
                <TransactionsTd value={item.category} />
                <TransactionsTd value={item.comment} />
                <TransactionsTdSum value={item.amount} />

                <TransactionsTdButton>
                  <IconButton
                    backgroundColor="transparent"
                    aria-label="Edit transaction"
                    icon={<EditIcon />}
                  />
                </TransactionsTdButton>
                <TransactionsTdButton>
                  <Button variant="greenButton">Delete</Button>
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
