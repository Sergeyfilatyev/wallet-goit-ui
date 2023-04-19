import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Button, Flex } from "@chakra-ui/react";
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
import { selectIsLoading } from "../../redux/statistics/statistics-selectors";
import { Loader } from "../Loader";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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
  const isLoading = useSelector(selectIsLoading);

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

  const printRef = useRef();

  const categoryColors = {
    main: "#FED057",
    products: "#FFD8D0",
    car: "#4A56E2",
    "self care": "#FD9498",
    children: "#81E1FF",
    house: "#C5BAFF",
    education: "#24CCA7",
    leisure: "#6E78E8",
    other: "#00AD84",
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

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const mobileWidth = window.innerWidth <= 768;
    const tableWidth = window.innerWidth > 768 && window.innerWidth <= 1280;
    const desktopWidth = window.innerWidth >= 1280;

    const orientation = tableWidth ? "l" : "p";
    let canvas;

    if (desktopWidth) {
      canvas = await html2canvas(element, { scale: 1 });
    } else {
      canvas = await html2canvas(element, {
        scale: 1,
        width: window.innerWidth,
      });
    }

    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF(orientation, "mm", "a4");
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    const canvasWidth = canvas.width * 0.2;
    const canvasHeight = canvas.height * 0.2;

    const marginX = (pdfWidth - canvasWidth) / 2;
    const marginY = (pdfHeight - canvasHeight) / 2;

    const marginR = mobileWidth ? 60 : marginX;
    const marginL = mobileWidth ? 0 : marginY;

    pdf.addImage(
      data,
      "PNG",
      marginR,
      marginL,
      canvasWidth,
      canvasHeight,
      "a",
      "FAST"
    ); 
    pdf.save("statistics.pdf");
  };

  return (
    <>
      <Box w="100%">
        {isLoading && <Loader />}

        {Object.keys(statByCategory || {}).length > 0 ? (
          <>
            <Box
              ref={printRef}
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
            <Box mt={"100px"} display={"flex"} justifyContent={"flex-end"}>
              <Button
                variant={"greenButton"}
                alignItems={"center"}
                onClick={() => handleDownloadPdf()}
              >
                Export as pdf
              </Button>
            </Box>
          </>
        ) : (
          <NoDataDiagram totalExpense={totalExpense}></NoDataDiagram>
        )}
      </Box>
    </>
  );
}
