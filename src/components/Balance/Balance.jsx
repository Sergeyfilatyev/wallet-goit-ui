import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { BalanceBox, BalanceBoxTitle, BalanceBoxNumber } from "./BalanceStyled";

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  return (
    <BalanceBox>
      <BalanceBoxTitle />
      <BalanceBoxNumber value={balance} />
    </BalanceBox>
  );
};
