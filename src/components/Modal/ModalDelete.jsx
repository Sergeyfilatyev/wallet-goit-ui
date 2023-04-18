import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/transactions-operations";
import "react-datetime/css/react-datetime.css";
import { ModalWindow } from "../Modal";
import { ModalExitText } from "./ModalExitStyled";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { selectTransactions } from "../../redux/transactions/transactions-selectors";

export const ModalDelete = ({ id, goToPreviousPage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const removeTransaction = async () => {
    dispatch(deleteTransaction(id));
    if (transactions.length % 10 === 1) {
      goToPreviousPage();
    }
    onClose();
  };

  return (
    <>
      <Button
        type="button"
        variant="deleteButton"
        onClick={() => {
          onOpen();
        }}
      >
        {t("delete")}
      </Button>
      <ModalWindow
        modalHeader={t("logoutTitle")}
        modalFunction={removeTransaction}
        modalFunctionName={t("delete")}
        modalCancelName={t("cancel")}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalExitText>{t("deleteTr")}</ModalExitText>
      </ModalWindow>
    </>
  );
};
