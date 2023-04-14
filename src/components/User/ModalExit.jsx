import { Button, Box, useDisclosure, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";

import "react-datetime/css/react-datetime.css";

import { ModalWindow } from "../ModalWindow";
import { ModalExitText, ModalExitButton } from "./ModalExitStyled";

export const ModalExit = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const userSignOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <ModalExitButton onClick={onOpen}>{children}</ModalExitButton>
      <ModalWindow
        modalHeader="Are you sure?"
        modalFunction={userSignOut}
        modalFunctionName="Sign Out"
        modalCancelName="Cancel"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalExitText>Do you really want to sign out?</ModalExitText>
      </ModalWindow>
    </>
  );
};
