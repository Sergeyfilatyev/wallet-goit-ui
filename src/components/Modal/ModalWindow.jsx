import { Button, Modal, ModalOverlay } from "@chakra-ui/react";
import Media from "react-media";

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
      <Media
        queries={{
          s: "(min-width: 480px)",
        }}
      >
        {(matches) => (
          <>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContentBox>
                <ModalHeaderBox>{modalHeader}</ModalHeaderBox>
                {matches.s && <ModalCloseButtonStyle />}
                <MadalBodyBox>{children}</MadalBodyBox>
                <ModalFooterButtonBox>
                  <Button
                    variant="greenButton"
                    w="300px"
                    onClick={modalFunction}
                  >
                    {modalFunctionName}
                  </Button>
                  <Button variant="whiteButton" w="300px" onClick={onClose}>
                    {modalCancelName}
                  </Button>
                </ModalFooterButtonBox>
              </ModalContentBox>
            </Modal>
          </>
        )}
      </Media>
    </>
  );
};
