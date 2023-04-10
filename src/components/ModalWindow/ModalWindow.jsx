import {
  Button,
  Modal,
  ModalCloseButton,
  ModalOverlay,
} from "@chakra-ui/react";

import {
  MadalBodyBox,
  ModalContentBox,
  ModalFooterButtonBox,
  ModalHeaderBox,
} from "./ModalWindowStyled";

export const ModalWindow = ({
  modalHeader,
  modalFunction,
  modalFunctionName,
  modalCancelName,
  children,
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContentBox>
          <ModalHeaderBox>{modalHeader}</ModalHeaderBox>
          <ModalCloseButton />
          <MadalBodyBox>{children}</MadalBodyBox>
          <ModalFooterButtonBox>
            <Button variant="greenButton" w="300px" onClick={modalFunction}>
              {modalFunctionName}
            </Button>
            <Button variant="whiteButton" w="300px" onClick={onClose}>
              {modalCancelName}
            </Button>
          </ModalFooterButtonBox>
        </ModalContentBox>
      </Modal>
    </>
  );
};
