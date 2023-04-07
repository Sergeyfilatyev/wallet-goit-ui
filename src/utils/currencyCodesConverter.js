import { currencyCodes } from "./currencyCodes";

export const currencyCodesConverter = (code) => {
  const currentCurrency = currencyCodes.find((item) => item.code === code);
  return currentCurrency.name;
};
