import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/transactions/transactions-selectors";
import { useEffect, useState } from "react";
import numeral from "numeral";

import { BalanceBox, BalanceBoxTitle, BalanceBoxNumber } from "./BalanceStyled";

export const Balance = () => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [formattedBalance, setFormattedBalance] = useState("");

  const balance = useSelector(selectBalance);

  useEffect(() => {
    setCurrentBalance(balance);
  }, [balance]);

  useEffect(() => {
    function formatBalance(number) {
      const formattedBalance = numeral(number)
        .format("₴ 0,0.00")
        .replace(",", " ");
      return formattedBalance;
    }
    setFormattedBalance(formatBalance(currentBalance));
  }, [currentBalance]);

  return (
    <BalanceBox>
      <BalanceBoxTitle />
      <BalanceBoxNumber value={formattedBalance} />
    </BalanceBox>
  );
};
