import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { BalanceBox, BalanceBoxTitle, BalanceBoxNumber } from "./BalanceStyled";

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  const authToken = useSelector((state) => state.auth.token);


  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("/api/users/current", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBalance();
  }, [authToken]); */

  return (
    <BalanceBox>
      <BalanceBoxTitle />
      <BalanceBoxNumber value={balance} />
    </BalanceBox>
  );
};
