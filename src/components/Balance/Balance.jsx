import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/auth/auth-selectors";

import { BalanceBox, BalanceBoxTitle, BalanceBoxNumber } from "./BalanceStyled";

export const Balance = () => {
  const [currentBalance, setCurrentBalance] = useState(0);

  const dispatch = useDispatch();
  const { balance } = useSelector(getUser);

  useEffect(() => {
    setCurrentBalance(balance);
  }, [balance]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <BalanceBox>
      <BalanceBoxTitle />
      <BalanceBoxNumber value={currentBalance} />
    </BalanceBox>
  );
};
