import {
  Box,
  Button,
  IconButton,
  Input,
  Switch,
  useDisclosure,
} from "@chakra-ui/react";

import { ModalWindow } from "../ModalWindow";
import { EditIcon } from "@chakra-ui/icons";

export const ModalEditTransaction = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const editTransaction = () => {
    console.log(id);
  };

  return (
    <>
      <IconButton
        backgroundColor="transparent"
        aria-label="Edit transaction"
        icon={<EditIcon />}
        _hover={{ color: "#24CCA7" }}
        _active={{ bg: "transparent" }}
        onClick={onOpen}
      />
      {/* <Button variant="isOpenModalButton" onClick={onOpen}>
        FEEEE
      </Button> */}
      <ModalWindow
        modalHeader="Edit transaction"
        modalFunction={editTransaction}
        modalFunctionName="Edit"
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
