import { Box, Button, Input, Switch, useDisclosure } from "@chakra-ui/react";

import { ModalWindow } from "../ModalWindow";

export const ModalAddTransaction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Switch variant="switchTransaction" />
          <Input placeholder="Comment" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
          ></Box>
        </Box>
      </ModalWindow>
    </>
  );
};
