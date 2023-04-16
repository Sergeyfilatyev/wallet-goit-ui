import { Button, Box, useDisclosure, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/transactions-operations";

import "react-datetime/css/react-datetime.css";

import { ModalWindow } from "../ModalWindow";
import { ModalExitText, ModalExitButton } from "./ModalDeleteStyled";

export const ModalDelete = ({ children, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const removeTransaktion = () => {
    dispatch(deleteTransaction(id));
  };

  return (
    <>
      <ModalExitButton onClick={onOpen}>{children}</ModalExitButton>
      <ModalWindow
        modalHeader="Are you sure?"
        modalFunction={removeTransaktion}
        modalFunctionName="Delete"
        modalCancelName="Cancel"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalExitText>Do you want to delete the transaction?</ModalExitText>
      </ModalWindow>
    </>
  );
};
