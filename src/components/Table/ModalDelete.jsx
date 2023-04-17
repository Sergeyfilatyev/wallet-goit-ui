import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/transactions-operations";
import "react-datetime/css/react-datetime.css";
import { ModalWindow } from "../ModalWindow";
import { ModalExitText } from "../User/ModalExitStyled";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
export const ModalDelete = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const removeTransaсtion = () => {
    dispatch(deleteTransaction(id));
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
        modalFunction={removeTransaсtion}
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
