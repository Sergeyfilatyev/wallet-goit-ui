import { useDispatch } from "react-redux";
import { deleteTransaction} from "../../redux/transactions/transactions-operations";

import "react-datetime/css/react-datetime.css";

import { ModalWindow } from "../ModalWindow";
import { ModalExitText} from "../User/ModalExitStyled";

export const ModalDelete = ({ id, isOpen, onClose }) => {

  const dispatch = useDispatch();

  const removeTransaktion = () => {
    dispatch(deleteTransaction(id))
    onClose()
    window.location.reload()
  };


  return (
    <>
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
