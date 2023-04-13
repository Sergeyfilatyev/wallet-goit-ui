import { Text, Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import {
  Header,
  TransactionData,
  Card,
  DataRow,
  DataRowDivider,
} from "./TableMobileStyled";

const userTransactions = [
  {
    _id: "64327d7090632194c689a5b3",
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
    _id: "64327e8b90632194c689a5bg",
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
    _id: "64327e9590632194c689a5c4",
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
    _id: "64327e9590632194c689a5c3",
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
    _id: "64327e9590632194c689a5c2",
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

export const TableMobile = () => {
  return (
    <>
      {userTransactions.map((item) => (
        <Card key={item._id}>
          <DataRow>
            <Header value="date" />
            <TransactionData
              value={`${item.date.day}.${item.date.month + 1}.${
                item.date.year
              }`}
            />
          </DataRow>
          <DataRowDivider />
          <DataRow>
            <Header value="type" />
            <TransactionData value={item.income ? "+" : "-"} />
          </DataRow>
          <DataRowDivider />
          <DataRow>
            <Header value="category" />
            <TransactionData value={item.category} />
          </DataRow>
          <DataRowDivider />
          <DataRow>
            <Header value="comment" />
            <TransactionData value={item.comment} />
          </DataRow>
          <DataRowDivider />
          <DataRow>
            <Header value="sum" />
            <TransactionData value={item.amount} />
          </DataRow>
          <DataRowDivider />
          <DataRow>
            <Button variant="greenButton">Delete</Button>
            <IconButton
              backgroundColor="transparent"
              aria-label="Edit transaction"
              icon={<EditIcon />}
            />
            <Text>Edit</Text>
          </DataRow>
        </Card>
      ))}
    </>
  );
};
