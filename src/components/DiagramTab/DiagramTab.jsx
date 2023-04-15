import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import fetchData from "./fetchStats";
import { Container } from "@chakra-ui/react";
import {
  ListItemCategory,
  CalculateNetIncome,
  SelectMonth,
  SelectYear,
  CategorySumBox,
  DiagramRenderer,
  NoDataDiagram,
} from "./DiagramTabStyled";

ChartJS.register(ArcElement, Tooltip, Legend);
const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);

export function DiagramTab() {
  const [year, setYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(
    months[currentMonth].value
  );
  const [statisticsData, setStatisticsData] = useState({});
  const [displayedMonths, setDisplayedMonths] = useState(
    months.slice(0, currentMonth + 1)
  );

  const totalExpense = statisticsData.totalExpense;
  const totalIncome = statisticsData.totalIncome;
  const statByCategory = statisticsData.expenseByCategory;

  useEffect(() => {
    fetchData(year, selectedMonth).then((statisticsData) => {
      setStatisticsData(statisticsData);
    });
  }, [year, selectedMonth]);

  const handleYearChange = (e) => {
    const newSelectedYear = e.target.value;
    setYear(newSelectedYear);
    if (newSelectedYear == currentYear) {
      setDisplayedMonths(months.slice(0, currentMonth + 1));
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
  const [isLargerThan1185] = useMediaQuery("(min-width: 1186px)");
  const [isLargerThan960] = useMediaQuery("(max-width: 960px)");
  const [isLargerThan767] = useMediaQuery("(max-width: 767px)");
  return (
    <Box w="100%">
      {Object.keys(statByCategory || {}).length > 0 ? (
        <>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="space-between">
              <DiagramRenderer
                totalExpense={totalExpense}
                totalIncome={totalIncome}
                statByCategory={statByCategory}
                options={options}
                chartData={chartData}
              ></DiagramRenderer>
            </Box>
            {/* <Box display="flex" flexDirection="column" mr="20px"> */}
            {/* // xs: "320px", // s: "480px", // m: "768px", // l: "960px", //
              xl: "1280px", */}
            <Box display={{ l: "flex" }} w="100%">
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
            {/* <CategorySumBox></CategorySumBox> */}
            {/* <ListItemCategory
                  statByCategory={statByCategory}
                ></ListItemCategory> */}
            {/* <CalculateNetIncome
                  totalExpense={totalExpense}
                  totalIncome={totalIncome}
                ></CalculateNetIncome> */}
          </Box>
          {/* </Box> */}
        </>
      ) : (
        <NoDataDiagram totalExpense={totalExpense}></NoDataDiagram>
      )}
    </Box>
  );
}
