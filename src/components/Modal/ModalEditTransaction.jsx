import { ModalWindow } from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import "react-datetime/css/react-datetime.css";
import { useState, useEffect } from "react";
import { selectCategories } from "../../redux/categories/categories-selectors";
import {
  ModalAmount,
  ModalAmountDateBox,
  ModalComment,
  ModalComponentsBox,
  ModalDate,
  ModalSelectCategory,
  EditIcon,
} from "./ModalTransactionStyled";
import { ModalSwitch } from "./ModalTransactionSwitchStyled";
import { FieldErrorMessage } from "../FieldErrorMessage/FieldErrorMessage";
import { updateTransaction } from "../../redux/transactions/transactions-operations";
import { amountValidation } from "../../utils/amountValidation";

export const ModalEditTransaction = ({ transactionToUpdate }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isExpense, setIsExpense] = useState(!transactionToUpdate.income);
  const [category, setCategory] = useState(transactionToUpdate.category);
  const [amount, setAmount] = useState(transactionToUpdate.amount);
  const [date, setDate] = useState(transactionToUpdate.date.time);
  const [comment, setComment] = useState(transactionToUpdate.comment);
  const [functionButtonName, setFunctionButtonName] = useState(t("save"));
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
  const categories = useSelector(selectCategories);

  useEffect(() => {
    isExpense ? setCategory("other") : setCategory("income");
  }, [isExpense]);

  const editTransaction = () => {
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

    const updatedData = {
      amount: Number(amount),
      category,
      comment,
      date: transactionDate,
      income: !isExpense,
    };

    dispatch(
      updateTransaction({ id: transactionToUpdate._id, updatedData })
    ).then(() => {
      onClose();
      setFunctionButtonName(t("save"));
    });
  };
  return (
    <>
      <IconButton
        backgroundColor="transparent"
        aria-label="Edit transaction"
        icon={<EditIcon />}
        _hover={{ color: "#24CCA7" }}
        _active={{ bg: "transparent" }}
        onClick={() => {
          window.scrollTo(0, 0);
          onOpen();
        }}
        p="0px"
      />

      <ModalWindow
        modalHeader={t("editTr")}
        modalFunction={editTransaction}
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
              {amountError && <FieldErrorMessage error="amount is required" />}
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
