import { Box, Button, useDisclosure } from "@chakra-ui/react";

import "react-datetime/css/react-datetime.css";

import { useState } from "react";

import { ModalWindow } from "../ModalWindow";
import {
  ModalAmount,
  ModalComment,
  ModalDatatime,
  ModalSelectCategory,
} from "./ModalTransactionStyled";
import { ModalSwitch } from "./ModalTransactionSwitchStyled";

export const ModalAddTransaction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSwitchExpense, setIsSwitchExpense] = useState(false);

  const addTransaction = () => {};

  return (
    <>
      <Button variant="isOpenModalButton" onClick={onOpen}></Button>
      <ModalWindow
        modalHeader="Add transaction"
        modalFunction={addTransaction}
        modalFunctionName="Add"
        modalCancelName="Cancel"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Box>
          <ModalSwitch
            isSwitchExpense={isSwitchExpense}
            setIsSwitchExpense={setIsSwitchExpense}
          />
          {isSwitchExpense && <ModalSelectCategory />}
          <ModalAmount />
          <ModalDatatime />
          <ModalComment />
        </Box>
      </ModalWindow>
    </>
  );
};
