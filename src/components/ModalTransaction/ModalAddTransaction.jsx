import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { getAuth } from "../../redux/auth/auth-selectors";
import { fetchCategories } from "../../utils/fetchCategories";

import { useDispatch } from "react-redux";
import { addTransaction } from "../../shared/api/transactions";

import { currentDay } from "../../utils/currentDay";
import { amountValidation } from "../../utils/amountValidation";

import { Box, useDisclosure } from "@chakra-ui/react";
import "react-datetime/css/react-datetime.css";
import { ModalWindow } from "../ModalWindow";

import {
  ModalAddOpentButton,
  ModalAmount,
  ModalAmountDateBox,
  ModalComment,
  ModalComponentsBox,
  ModalDate,
  ModalSelectCategory,
} from "./ModalTransactionStyled";

import { ModalSwitch } from "./ModalTransactionSwitchStyled";
import { FieldErrorMessage } from "../FieldErrorMessage/FieldErrorMessage";

export const ModalAddTransaction = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isExpense, setIsExpense] = useState(false);
  const [category, setCategory] = useState("Income");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(currentDay());
  const [comment, setComment] = useState("");

  const [amountError, setAmountError] = useState(false);

  const dispatch = useDispatch();

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

  const [categories, setCategories] = useState([]);

  const token = useSelector(getAuth).token;

  useEffect(() => {
    fetchCategories(token).then((response) => setCategories(response));
  }, [token]);

  useEffect(() => {
    isExpense ? setCategory("Expense") : setCategory("Income");
  }, [isExpense]);

  const addNewTransaction = () => {
    if (!amountValidation(amount)) {
      return setAmountError(true);
    } else setAmountError(false);

    const transaction = {
      income: !isExpense,
      category,
      comment,
      amount,
      date,
    };

    dispatch(addTransaction(transaction));

    const expense = { isExpense, category, amount, date, comment };
    const income = { isExpense, category, amount, date, comment };

    isExpense ? console.log(expense) : console.log(income);

    setIsExpense(false);
    setCategory("Income");
    setAmount("");
    setDate(currentDay());
    setComment("");
  };

  return (
    <>
      <ModalAddOpentButton onClick={onOpen} />
      <ModalWindow
        modalHeader="Add transaction"
        modalFunction={addNewTransaction}
        modalFunctionName={t("add")}
        modalCancelName={t("cancel")}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalSwitch
          isSwitchExpense={isExpense}
          setIsSwitchExpense={setIsExpense}
          expenseLabel="expense"
          incomeLabel="income"
        />
        <ModalComponentsBox>
          {isExpense && (
            <ModalSelectCategory
              category={category}
              setCategory={handleChange.category}
              placeholder={"Select a category"}
            >
              {categories.map((item) => (
                <option value={item.category} key={item.id}>
                  {t(item.category)}
                </option>
              ))}
            </ModalSelectCategory>
          )}
          <ModalAmountDateBox>
            <Box>
              <ModalAmount amount={amount} setAmount={setAmount} />
              {amountError && <FieldErrorMessage error="amount is required" />}
            </Box>
            <ModalDate date={date} setDate={handleChange.date} />
          </ModalAmountDateBox>
          <ModalComment
            comment={comment}
            setComment={handleChange.comment}
            placeholder="Comment"
          />
        </ModalComponentsBox>
      </ModalWindow>
    </>
  );
};
