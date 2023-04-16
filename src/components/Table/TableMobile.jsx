import EllipsisText from "react-ellipsis-text";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Box } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { selectTransactions } from "../../redux/transactions/transactions-selectors";
import { ModalEditTransaction } from "../../components/ModalTransaction/ModalEditTransaction";

import {
  Header,
  TransactionData,
  TransactionDataComment,
  DataRow,
  DataRowDivider,
} from "./TableMobileStyled";
import { DeleteButton } from "./TableStyled";
import { useTranslation } from "react-i18next";
const userTransactions = [
  {
    _id: "64327d7090632194c689a5b3",
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
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);

  const transactions = useSelector(selectTransactions);

  const { t } = useTranslation();
  return (
    <>
      {transactions.map((item) => (
        <Box
          key={item._id}
          width="280px"
          mb="8px"
          p="0 20px"
          borderRadius="10px"
          borderLeft={item.income ? "5px solid #24CCA7" : "5px solid #FF6596"}
          bg="#FFFFFF"
        >
          <DataRow>
            <Header value={t("date")} />
            <TransactionData
              value={`${item.date.day}.${item.date.month + 1}.${
                item.date.year
              }`}
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
              <EllipsisText text={item.comment} length={20} />
            </TransactionDataComment>
          </DataRow>
          <DataRowDivider />
          <DataRow>
            <Header value={t("sum")} />
            <Box
              fontSize="16px"
              lineHeight="1.5"
              fontWeight="700"
              textAlign="right"
              textTransform="Capitalize"
              color={item.income ? "#24CCA7" : "#FF6596"}
            >{`${item.amount}.00`}</Box>
            {/* <TransactionData value={`${item.amount}.00`} /> */}
          </DataRow>
          <DataRowDivider />
          <DataRow>
            <DeleteButton
              name={t("delete")}
              // onClick={() => dispatch(deleteTransaction(item._id))}
            />
            <Button
              onClick={() => setIsOpenEditForm(!isOpenEditForm)}
              leftIcon={<EditIcon />}
              backgroundColor="transparent"
              fontSize="14px"
              lineHeight="1.5"
              letterSpacing="0.6px"
              textTransform="Capitalize"
              _hover={{ color: "#24CCA7" }}
              _active={{ bg: "transparent" }}
            >
              Edit
            </Button>
            {isOpenEditForm && <ModalEditTransaction />}
          </DataRow>
        </Box>
      ))}
    </>
  );
};
