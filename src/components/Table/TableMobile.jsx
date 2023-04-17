import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import EllipsisText from "react-ellipsis-text";
import { animateScroll as scroll } from "react-scroll";
import { selectTransactions } from "../../redux/transactions/transactions-selectors";
import { ModalEditTransaction } from "../../components/ModalTransaction/ModalEditTransaction";
import { TablePagination } from "./TablePagination";
import { Button, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import {
  TransactionCard,
  Header,
  TransactionData,
  TransactionDataComment,
  TransactionDataSum,
  DataRow,
  DataRowDivider,
} from "./TableMobileStyled";
import { ModalDelete } from "./ModalDelete";
import { NoTransactions } from "./NoTransactions";

export const TableMobile = () => {
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const transactions = useSelector(selectTransactions);
  const { t } = useTranslation();
  const endOffset = itemOffset + 5;
  const pageCount = Math.ceil(transactions.length / 5);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % transactions.length;
    setItemOffset(newOffset);
    scroll.scrollToTop();
  };
  const goToPreviousPage = () => {setItemOffset(itemOffset-10)};

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
                  <EllipsisText text={item.comment} length={20} />
                </TransactionDataComment>
              </DataRow>
              <DataRowDivider />

              <DataRow>
                <Header value={t("sum")} />
                <TransactionDataSum
                  value={`${item.amount}.00`}
                  income={item.income}
                />
              </DataRow>
              <DataRowDivider />

              <DataRow>
                <ModalDelete id={item._id} goToPreviousPage={goToPreviousPage}/>
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
                  {t("edit")}
                </Button>
                {isOpenEditForm && <ModalEditTransaction />}
              </DataRow>
            </TransactionCard>
          ))}
        </>
      ) : (
        <NoTransactions />
      )}
      {transactions.length > 5 && (
        <TablePagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
        />
      )}
    </>
  );
};
