import { ModalWindow } from "../ModalWindow";
import { EditIcon } from "@chakra-ui/icons";
import {useDispatch, useSelector} from "react-redux"
import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import "react-datetime/css/react-datetime.css";
import { useState, useEffect } from "react";
import { selectCategories } from "../../redux/categories/categories-selectors";


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
import { selectTransactions } from "../../redux/transactions/transactions-selectors";
import { updateTransaction } from "../../redux/transactions/transactions-operations";
import { currentDay } from "../../utils/currentDay";
import { amountValidation } from "../../utils/amountValidation";

export const ModalEditTransaction = ({id}) => {
  const { t } = useTranslation();
const dispatch = useDispatch()
const transactions = useSelector(selectTransactions);
console.log('TRANSACTIONS:-', transactions);
const transToFind = transactions.filter((trans)=>trans.id===id)
console.log('Id Prop from Table: -', id);
console.log('TRANS to Find', transToFind);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isExpense, setIsExpense] = useState(false);
  // const [isExpense, setIsExpense] = useState(transToFind.expense);

  const [category, setCategory] = useState("Income");
  // const [category, setCategory] = useState(transToFind.expense);
  
  const [amount, setAmount] = useState("");
  // const [amount, setAmount] = useState(transToFind.amount);
 
  const [date, setDate] = useState(currentDay());
  // const [date, setDate] = useState(transToFind.date);

  const [comment, setComment] = useState("");
  // const [comment, setComment] = useState(transToFind.comment);

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
    isExpense ? setCategory("Expense") : setCategory("Income");
  }, [isExpense]);

  const editTransaction = () => {
    if (!amountValidation(amount)) {
      return setAmountError(true);
    } else setAmountError(false);

    const expense = { isExpense, category, amount, date, comment };
    const income = { isExpense, category, amount, date, comment };

    isExpense ? console.log(expense) : console.log(income);

    // dispatch(updateTransaction(transToFind))
    
    setIsExpense(false);
    setCategory("Income");
    setAmount("");
    setDate(currentDay());
    setComment("");
  };

  return (
    <>
      <IconButton
        backgroundColor="transparent"
        aria-label="Edit transaction"
        icon={<EditIcon />}
        _hover={{ color: "#24CCA7" }}
        _active={{ bg: "transparent" }}
        onClick={onOpen}
      />

      <ModalWindow
        modalHeader={t("edit")}
        modalFunction={editTransaction}
        modalFunctionName={t("save")}
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
              setCategory={handleChange.category}
              placeholder={t("select a category")}
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
            placeholder={t("comment")}
          />
        </ModalComponentsBox>
      </ModalWindow>
    </>
  );
};
