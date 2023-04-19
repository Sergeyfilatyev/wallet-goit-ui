import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectCategories } from "../../redux/categories/categories-selectors";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../redux/transactions/transactions-operations";
import { currentDay } from "../../utils/currentDay";
import { amountValidation } from "../../utils/amountValidation";
import { Box, useDisclosure } from "@chakra-ui/react";
import "react-datetime/css/react-datetime.css";
import { ModalWindow } from "../Modal";
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
  const [category, setCategory] = useState("income");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(currentDay());
  const [comment, setComment] = useState("");
  const [amountError, setAmountError] = useState(false);
  const [functionButtonName, setFunctionButtonName] = useState(t("add"));
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

  const categories = useSelector(selectCategories);

  useEffect(() => {
    isExpense ? setCategory("other") : setCategory("income");
  }, [isExpense]);

  const addNewTransaction = () => {
    if (!amountValidation(amount)) {
      return setAmountError(true);
    } else setAmountError(false);

    setFunctionButtonName("...");

    const transactionDate = {
      day: Number(date.slice(8, 10)),
      month: Number(date.slice(5, 7)),
      year: Number(date.slice(0, 4)),
      time: date,
    };

    const transaction = {
      income: !isExpense,
      category,
      comment,
      amount: Number(amount),
      date: transactionDate,
    };

    dispatch(addTransaction(transaction)).then(() => {
      setIsExpense(false);
      setCategory("income");
      setAmount("");
      setDate(currentDay());
      setComment("");
      onClose();
      setFunctionButtonName(t("add"));
    });
  };

  return (
    <>
      <ModalAddOpentButton
        onClick={() => {
          window.scrollTo(0, 0);
          onOpen();
        }}
      />
      <ModalWindow
        modalHeader={t("addTr")}
        modalFunction={addNewTransaction}
        modalFunctionName={functionButtonName}
        modalCancelName={t("cancel")}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalSwitch
          isSwitchExpense={isExpense}
          setIsSwitchExpense={setIsExpense}
          expenseLabel={t("expense")}
          incomeLabel={t("income")}
        />
        <ModalComponentsBox>
          {isExpense && (
            <ModalSelectCategory
              category={category}
              setCategory={setCategory}
              placeholder={t("select a category")}
              categories={categories}
              t={t}
            />
          )}
          <ModalAmountDateBox>
            <Box>
              <ModalAmount amount={amount} setAmount={setAmount} />
              {amountError && <FieldErrorMessage error={t("amountIsReq")} />}
            </Box>
            <ModalDate date={date} setDate={handleChange.date} />
          </ModalAmountDateBox>
          <ModalComment
            comment={comment}
            setComment={handleChange.comment}
            placeholder={t("comment")}
          />
        </ModalComponentsBox>
      </ModalWindow>
    </>
  );
};
