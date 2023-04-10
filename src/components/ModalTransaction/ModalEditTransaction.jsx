import { Box, Button, Input, Switch, useDisclosure } from "@chakra-ui/react";

import { ModalWindow } from "../ModalWindow";

export const ModalEditTransaction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const editTransaction = () => {};

  return (
    <>
      <Button variant="isOpenModalButton" onClick={onOpen}></Button>
      <ModalWindow
        modalHeader="Add transaction"
        modalFunction={editTransaction}
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
