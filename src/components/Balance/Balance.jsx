import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/transactions/transactions-selectors";
import { useEffect, useState } from "react";

import { BalanceBox, BalanceBoxTitle, BalanceBoxNumber } from "./BalanceStyled";

export const Balance = () => {
  const [currentBalance, setCurrentBalance] = useState(0);

  const balance = useSelector(selectBalance);

  useEffect(() => {
    setCurrentBalance(balance);
  }, [balance]);

  return (
    <BalanceBox>
      <BalanceBoxTitle />
      <BalanceBoxNumber value={currentBalance} />
    </BalanceBox>
  );
};
