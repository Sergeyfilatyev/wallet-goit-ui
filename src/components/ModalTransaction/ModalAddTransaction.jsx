import { Box, Button, useDisclosure } from "@chakra-ui/react";

import "react-datetime/css/react-datetime.css";

import { useState, useEffect } from "react";

import { ModalWindow } from "../ModalWindow";
import {
  ModalAmount,
  ModalAmountDateBox,
  ModalComment,
  ModalComponentsBox,
  ModalDate,
  ModalSelectCategory,
} from "./ModalTransactionStyled";
import { ModalSwitch } from "./ModalTransactionSwitchStyled";
import { FieldErrorMessage } from "../FieldErrorMessage/FieldErrorMessage";

const currentDay = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  const today = year + "-" + month + "-" + day;
  return today;
};

const amountValidation = (amount) => {
  if (
    amount === "0.00" ||
    amount === "" ||
    amount === false ||
    amount === 0 ||
    amount === "0"
  ) {
    return false;
  } else {
    return true;
  }
};

export const ModalAddTransaction = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isExpense, setIsExpense] = useState(false);
  const [category, setCategory] = useState("Income");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(currentDay());
  const [comment, setComment] = useState("");

  const [amountError, setAmountError] = useState(false);

  const handleChange = {
    category: ({ target: { value } }) => {
      setCategory(value);
    },
    date: ({ target: { value } }) => {
      setDate(value);
    },
    comment: ({ target: { value } }) => {
      setComment(value);
    },
  };

  useEffect(() => {
    isExpense ? setCategory("Expense") : setCategory("Income");
  }, [isExpense]);

  const addTransaction = () => {
    if (!amountValidation(amount)) {
      return setAmountError(true);
    } else setAmountError(false);

    const expense = { isExpense, category, amount, date, comment, id };
    const income = { isExpense, category, amount, date, comment, id };

    isExpense ? console.log(expense) : console.log(income);
  };

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
        <ModalSwitch
          isSwitchExpense={isExpense}
          setIsSwitchExpense={setIsExpense}
        />
        <ModalComponentsBox>
          {isExpense && (
            <ModalSelectCategory
              category={category}
              setCategory={handleChange.category}
            >
              <option value="Other">Other</option>
            </ModalSelectCategory>
          )}
          <ModalAmountDateBox>
            <Box>
              <ModalAmount amount={amount} setAmount={setAmount} />
              {amountError && <FieldErrorMessage error="amount is required" />}
            </Box>
            <ModalDate date={date} setDate={handleChange.date} />
          </ModalAmountDateBox>
          <ModalComment comment={comment} setComment={handleChange.comment} />
        </ModalComponentsBox>
      </ModalWindow>
    </>
  );
};
