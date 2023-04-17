import { useDispatch } from "react-redux";
import { deleteTransaction} from "../../redux/transactions/transactions-operations";

import "react-datetime/css/react-datetime.css";

import { ModalWindow } from "../ModalWindow";
import { ModalExitText} from "../User/ModalExitStyled";

export const ModalDelete = ({ id, isOpen, onClose }) => {

  const dispatch = useDispatch();

  const removeTransaсtion = () => {
    dispatch(deleteTransaction(id));
    onClose();
  };
  
  return (
    <>
      <ModalWindow
        modalHeader="Are you sure?"
        modalFunction={removeTransaсtion}
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
