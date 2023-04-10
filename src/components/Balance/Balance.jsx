import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./OverallBalance.module.css";

const OverallBalance = () => {
  const [balance, setBalance] = useState(0);
  const authToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("/api/wallet/balance", {
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
  }, [authToken]);

  return (
    <div className={styles.totalBalance}>
      <p className={styles.totalBalanceTitle}>Your balance</p>
      <p className={styles.totalBalanceNumber}>{balance}</p>
    </div>
  );
};

export default OverallBalance;
