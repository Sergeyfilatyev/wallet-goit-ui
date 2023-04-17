import { useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";

import "react-datetime/css/react-datetime.css";

import { ModalWindow } from "../Modal";
import { ModalExitText, ModalExitButton } from "./ModalExitStyled";
import { useTranslation } from "react-i18next";

export const ModalExit = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userSignOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <ModalExitButton onClick={onOpen}>{children}</ModalExitButton>
      <ModalWindow
        modalHeader={t("logoutTitle")}
        modalFunction={userSignOut}
        modalFunctionName={t("signOut")}
        modalCancelName={t("cancel")}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalExitText>{t("logoutText")}</ModalExitText>
      </ModalWindow>
    </>
  );
};
