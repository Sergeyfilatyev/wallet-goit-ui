import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/transactions/transactions-selectors";
import { BalanceBox, BalanceBoxTitle, BalanceBoxNumber } from "./BalanceStyled";

export const Balance = () => {
  const balance = useSelector(selectBalance);

  return (
    <BalanceBox>
      <BalanceBoxTitle />
      <BalanceBoxNumber value={balance} />
    </BalanceBox>
  );
};
