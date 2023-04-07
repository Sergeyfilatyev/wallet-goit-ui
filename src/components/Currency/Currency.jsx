import { useState, useEffect } from "react";

import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

import { fetchCurrency } from "../../utils/fetchCurrency";
import { currencyCodesConverter } from "../../utils/currencyCodesConverter";
import { reserveCurrency } from "../../utils/reserveCurrency";

export const Currency = () => {
  const [rates, setRates] = useState(
    localStorage.getItem("rates")
      ? JSON.parse(localStorage.getItem("rates"))
      : null
  );

  useEffect(() => {
    fetchCurrency().then((data) => {
      if (data && !localStorage.getItem("rates")) {
        setRates(data);
        localStorage.setItem("rates", JSON.stringify(data));
      }

      if (data && localStorage.getItem("rates")) {
        const currentTime = new Date().getTime() / 1000;
        const localCurrencyTime = JSON.parse(localStorage.getItem("rates"))[0]
          .date;

        if (currentTime - localCurrencyTime > 86400) {
          setRates(data);
          localStorage.setItem("rates", JSON.stringify(data));
        }
      }

      if (!data && !localStorage.getItem("rates")) {
        setRates(reserveCurrency);
      }
    });
  }, []);

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Currency</Th>
              <Th>Purchase</Th>
              <Th>Sale</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rates &&
              rates.map((item) => (
                <Tr key={item.currencyCodeA + item.currencyCodeB}>
                  <Td>{`${currencyCodesConverter(
                    item.currencyCodeA
                  )} to ${currencyCodesConverter(item.currencyCodeB)}`}</Td>
                  <Td>{item.rateBuy}</Td>
                  <Td>{item.rateSell}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
