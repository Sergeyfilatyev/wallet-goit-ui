import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Flex } from "@chakra-ui/react";
import {
  ListItemCategory,
  CalculateNetIncome,
  SelectMonth,
  SelectYear,
  CategorySumBox,
  DiagramRenderer,
  NoDataDiagram,
} from "./DiagramTabStyled";
import { getStatistics } from "../../redux/statistics/statistics-operations";
import { selectStatistics } from "../../redux/statistics/statistics-selectors";

ChartJS.register(ArcElement, Tooltip, Legend);
const months = [
  { value: "01", label: "january" },
  { value: "02", label: "february" },
  { value: "03", label: "march" },
  { value: "04", label: "april" },
  { value: "05", label: "may" },
  { value: "06", label: "june" },
  { value: "07", label: "july" },
  { value: "08", label: "august" },
  { value: "09", label: "september" },
  { value: "10", label: "october" },
  { value: "11", label: "november" },
  { value: "12", label: "december" },
];
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);

export function DiagramTab() {
  const [year, setYear] = useState(String(currentYear));
  const [selectedMonth, setSelectedMonth] = useState(
    months[currentMonth].value
  );
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistics);

  useEffect(() => {
    dispatch(getStatistics({ year, selectedMonth }));
  }, [dispatch, year, selectedMonth]);

  const [displayedMonths, setDisplayedMonths] = useState(
    months.slice(0, currentMonth + 1)
  );

  const totalExpense = statistics.totalExpense;
  const totalIncome = statistics.totalIncome;
  const statByCategory = statistics.expenseByCategory;

  const handleYearChange = (e) => {
    const newSelectedYear = e.target.value;
    setYear(newSelectedYear);
    if (newSelectedYear === String(currentYear)) {
      const newDisplayedMonths = months.slice(0, currentMonth + 1);
      setDisplayedMonths(newDisplayedMonths);
      if (selectedMonth > months[currentMonth].value) {
        setSelectedMonth(months[currentMonth].value);
      }
    } else {
      setDisplayedMonths(months);
    }
  };

  const handleMonthChange = (e) => {
    const newSelectedMonth = e.target.value;
    setSelectedMonth(newSelectedMonth);
  };

  const categoryColors = {
    "main expenses": "#FED057",
    products: "#FFD8D0",
    car: "#4A56E2",
    "self care": "#FD9498",
    "child care": "#81E1FF",
    "household products": "#C5BAFF",
    education: "#24CCA7",
    leisure: "#6E78E8",
    "other expenses": "#00AD84",
  };
  const chartData = {
    labels: {},
    datasets: [
      {
        label: "",
        data: Object.values(statByCategory || { default: 50 }),
        backgroundColor: Object.keys(categoryColors).map(
          (category) => categoryColors[category]
        ),
      },
    ],
  };
  const options = {
    cutout: "70%",
  };
  return (
    <Box w="100%">
      {Object.keys(statByCategory || {}).length > 0 ? (
        <>
          <Box
            display="flex"
            flexDirection={{ m: "initial", xs: "column" }}
            justifyContent={{ m: "normal", xs: "center" }}
            alignItems={{ m: "normal", xs: "center" }}
          >
            <Box display="flex">
              <DiagramRenderer
                totalExpense={totalExpense}
                totalIncome={totalIncome}
                statByCategory={statByCategory}
                options={options}
                chartData={chartData}
              ></DiagramRenderer>
            </Box>
            <Box display="flex" flexDir="column" ml={{ m: "40px", xs: "0" }}>
              <Box
                marginTop={{ xl: "0", m: "20px", xs: "30px" }}
                display={{ m: "flex", xs: "block" }}
                w="100%"
              >
                <SelectMonth
                  selectedMonth={selectedMonth}
                  handleMonthChange={handleMonthChange}
                  displayedMonths={displayedMonths}
                ></SelectMonth>
                <SelectYear
                  year={year}
                  years={years}
                  handleYearChange={handleYearChange}
                ></SelectYear>
              </Box>
              <Flex mt="20px">
                <CategorySumBox></CategorySumBox>
              </Flex>
              <ListItemCategory
                statByCategory={statByCategory}
              ></ListItemCategory>
              <CalculateNetIncome
                totalExpense={totalExpense}
                totalIncome={totalIncome}
              ></CalculateNetIncome>
            </Box>
          </Box>
        </>
      ) : (
        <NoDataDiagram totalExpense={totalExpense}></NoDataDiagram>
      )}
    </Box>
  );
}
