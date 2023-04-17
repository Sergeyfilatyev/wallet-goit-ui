import { Button, Modal, ModalOverlay } from "@chakra-ui/react";

import {
  MadalBodyBox,
  ModalCloseButtonStyle,
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
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContentBox>
          <ModalHeaderBox>{modalHeader}</ModalHeaderBox>
          <ModalCloseButtonStyle />
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
