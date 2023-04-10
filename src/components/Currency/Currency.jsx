import { useState, useEffect } from "react";

import { fetchCurrency } from "../../utils/fetchCurrency";
import { currencyCodesConverter } from "../../utils/currencyCodesConverter";
import { reserveCurrency } from "../../utils/reserveCurrency";

import {
  CurrencyBox,
  CurrencyTableHead,
  CurrencyTableHeadValue,
  CurrencyTableBody,
  CurrencyTableBodyLine,
  CurrencyTableBodyLineValue,
  CurrencySpinner,
} from "./CurrencyStyled";

export const Currency = () => {
  const [rates, setRates] = useState(
    localStorage.getItem("rates")
      ? JSON.parse(localStorage.getItem("rates"))
      : null
  );

  useEffect(() => {
    const writeRatesData = (data) => {
      setRates(data);
      localStorage.setItem("rates", JSON.stringify(data));
    };
    if (localStorage.getItem("rates")) {
      const currentTime = new Date().getTime() / 1000;
      const localCurrencyTime = JSON.parse(localStorage.getItem("rates"))[0]
        .date;
      if (currentTime - localCurrencyTime > 86400) {
        fetchCurrency().then((data) => {
          data ? writeRatesData(data) : setRates(reserveCurrency);
        });
      }
    }
    if (!localStorage.getItem("rates")) {
      fetchCurrency().then((data) => {
        data ? writeRatesData(data) : setRates(reserveCurrency);
      });
    }
  }, []);

  return (
    <CurrencyBox>
      <CurrencyTableHead>
        <CurrencyTableHeadValue value="Currency" />
        <CurrencyTableHeadValue value="Purchase" />
        <CurrencyTableHeadValue value="Sale" />
      </CurrencyTableHead>
      {!rates && <CurrencySpinner />}
      {rates && (
        <CurrencyTableBody>
          {rates.map((item) => (
            <CurrencyTableBodyLine
              key={item.currencyCodeA + item.currencyCodeB}
            >
              <CurrencyTableBodyLineValue
                value={`${currencyCodesConverter(
                  item.currencyCodeA
                )}/${currencyCodesConverter(item.currencyCodeB)}`}
              />
              <CurrencyTableBodyLineValue value={item.rateBuy.toFixed(2)} />
              <CurrencyTableBodyLineValue value={item.rateSell.toFixed(2)} />
            </CurrencyTableBodyLine>
          ))}
        </CurrencyTableBody>
      )}
    </CurrencyBox>
  );
};
