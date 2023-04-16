export const amountValidation = (amount) => {
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
