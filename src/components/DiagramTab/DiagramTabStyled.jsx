import { Select, Box, List, Text, ListItem, Flex } from "@chakra-ui/react";

import { Doughnut } from "react-chartjs-2";
import { useMediaQuery } from "@chakra-ui/react";

export const ListItemCategory = ({ statByCategory }) => {
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

  return (
    <List display="flex" flexDirection="column" alignItems="flex-end" mb="14px">
      {Object.entries(statByCategory)
        .filter(([category, value]) => value !== 0)
        .map(([category, value]) => (
          <ListItem
            paddingLeft="18px"
            key={category}
            display="flex"
            alignItems="center"
            w="100%"
            h="50px"
            pos="relative"
          >
            <Box
              h="24px"
              w="24px"
              backgroundColor={categoryColors[category]}
              borderRadius="2px"
              mr="16px"
            />
            <Flex
              justifyContent="space-between"
              alignItems="flex-start"
              flexGrow={1}
            >
              <Text
                fontFamily="Circe"
                fontStyle="normal"
                fontWeight="400"
                fontSize={["14px", "16px", "16px", "16px"]}
                lineHeight={["16px", "18px", "18px", "18px"]}
                display="flex"
                alignItems="center"
                color="#000000"
              >
                {category}:
              </Text>
              <Text
                fontFamily="Circe"
                fontStyle="normal"
                fontWeight="400"
                fontSize={["14px", "16px", "16px", "16px"]}
                lineHeight={["16px", "24px", "24px", "24px"]}
                textAlign="right"
                color="#000000"
                paddingRight="20px"
              >
                {value}
              </Text>
              <Box
                position="absolute"
                bottom="0"
                right="0"
                w="100%"
                h="0px"
                border="1px solid #DCDCDF"
                boxShadow="0px 1px 0px rgba(255, 255, 255, 0.6)"
              ></Box>
            </Flex>
          </ListItem>
        ))}
    </List>
  );
};

export const CalculateNetIncome = ({ totalIncome, totalExpense }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" position="relative" justifyContent="space-between">
        <Text
          fontFamily="'Circe', sans-serif"
          fontWeight="700"
          fontSize={["14px", null, "16px"]}
          lineHeight={["20.58px", null, "23.58px"]}
          color="#000000"
          paddingLeft="18px"
        >
          Expenses:
        </Text>
        <Text
          fontFamily="'Circe', sans-serif"
          fontWeight="700"
          fontSize={["14px", null, "16px"]}
          lineHeight={["20.58px", null, "23.58px"]}
          color="#FF6596"
          paddingRight="20px"
        >
          {totalExpense}
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop="15px">
        <Text
          fontFamily="'Circe', sans-serif"
          fontWeight="700"
          fontSize={["14px", null, "16px"]}
          lineHeight={["20.58px", null, "23.58px"]}
          color="#000000"
          paddingLeft="18px"
        >
          Income:
        </Text>
        <Text
          fontFamily="'Circe', sans-serif"
          fontWeight="700"
          fontSize={["14px", null, "16px"]}
          lineHeight={["20.58px", null, "23.58px"]}
          color="#24CCA7"
          paddingRight="20px"
        >
          {totalIncome}
        </Text>
      </Box>
    </Box>
  );
};

export const SelectMonth = ({
  selectedMonth,
  handleMonthChange,
  displayedMonths,
}) => {
  const [isLargerThan960] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan767] = useMediaQuery("(max-width: 767px)");
  const [isLargerThan1210] = useMediaQuery("(max-width: 1210px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [isLargerThan1180] = useMediaQuery("(max-width: 1180px)");
  return (
    <Select
      name="month"
      value={selectedMonth}
      onChange={handleMonthChange}
      w={{ xl: "180px", m: "160px", xs: "280px" }}
      h="50px"
      borderRadius="30px"
      borderWidth="1px"
      borderColor="#000000"
    >
      {displayedMonths
        .map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))
        .reverse()}
    </Select>
  );
};

export const SelectYear = ({ year, handleYearChange, years }) => {
  const [isLargerThan960] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan767] = useMediaQuery("(max-width: 767px)");
  const [isLargerThan1210] = useMediaQuery("(max-width: 1210px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [isLargerThan1185] = useMediaQuery("(max-width: 1185px)");

  return (
    <Select
      name="year"
      value={year}
      onChange={handleYearChange}
      w={{ xl: "180px", m: "160px", xs: "280px" }}
      h="50px"
      borderRadius="30px"
      borderWidth="1px"
      borderColor="#000000"
      ml={{ m: "20px", xs: "0" }}
      mt={{ m: "0", xs: "20px" }}
    >
      {years
        .map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))
        .reverse()}
    </Select>
  );
};

export const CategorySumBox = () => {
  const [isLargerThan767] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Flex
        w="100%"
        height="60px"
        justifyContent="space-between"
        alignItems="center"
        right="16px"
        top="250px"
        bg="#FFFFFF"
        borderRadius="30px"
        px="20px"
      >
        <Text
          fontFamily="'Circe', sans-serif"
          fontWeight="700"
          fontSize={isLargerThan767 ? "18px" : "16px"}
          lineHeight="26.53px"
          color="#000000"
        >
          Category
        </Text>
        <Text
          fontFamily="'Circe', sans-serif"
          fontWeight="700"
          fontSize={isLargerThan767 ? "18px" : "16px"}
          lineHeight="26.53px"
          color="#000000"
        >
          Sum
        </Text>
      </Flex>
    </>
  );
};

export const DiagramRenderer = ({
  totalExpense,
  totalIncome,
  statByCategory,
  options,
  chartData,
}) => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1050px)");
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const [isLargerThan767] = useMediaQuery("(max-width: 767px)");

  return (
    <>
      {totalExpense !== 0 ||
      totalIncome !== 0 ||
      (Object.keys(statByCategory || {}).length === 0 && totalExpense === 0) ? (
        <Box>
          <Box
            h={
              isLargerThan1200
                ? "288px"
                : isLargerThan960
                ? "188px"
                : isLargerThan767
                ? "333px"
                : "340px"
            }
            w={
              isLargerThan1200
                ? "288px"
                : isLargerThan960
                ? "188px"
                : isLargerThan767
                ? "280px"
                : "340px"
            }
            position="relative"
          >
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="400"
              fontSize="30px"
              lineHeight="45px"
              display="flex"
              alignItems="center"
              textAlign="center"
              color="#000000"
            >
              Statistics
            </Text>
            <Text
              position="absolute"
              top={
                isLargerThan1200
                  ? "180px"
                  : isLargerThan960
                  ? "130px"
                  : isLargerThan767
                  ? "180px"
                  : "208px"
              }
              right={
                isLargerThan1200
                  ? "-15px"
                  : isLargerThan960
                  ? "-63px"
                  : isLargerThan767
                  ? "-14px"
                  : "14px"
              }
              h="24"
              w="80"
              fontFamily="Circe"
              fontStyle="normal"
              fontWeight="700"
              fontSize="18px"
              lineHeight="27px"
              textAlign="center"
              color="#000000"
            >
              ₴ {totalExpense}
            </Text>
            <Doughnut data={chartData} options={options} />
          </Box>
        </Box>
      ) : (
        <>
          <Box
            h={
              isLargerThan1200
                ? "288px"
                : isLargerThan960
                ? "188px"
                : isLargerThan767
                ? "280px"
                : "340px"
            }
            w={
              isLargerThan1200
                ? "288px"
                : isLargerThan960
                ? "188px"
                : isLargerThan767
                ? "280px"
                : "340px"
            }
            pos="relative"
          >
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="400"
              fontSize="30px"
              lineHeight="45px"
              display="flex"
              alignItems="center"
              textAlign="center"
              color="#000000"
            >
              Statistics
            </Text>
            <Text
              position="absolute"
              top={
                isLargerThan1200
                  ? "180px"
                  : isLargerThan960
                  ? "130px"
                  : isLargerThan767
                  ? "208px"
                  : "180px"
              }
              right={
                isLargerThan1200
                  ? "-15px"
                  : isLargerThan960
                  ? "-63px"
                  : isLargerThan767
                  ? "-14px"
                  : "-14px"
              }
              h="24"
              w="80"
              fontFamily="Circe"
              fontStyle="normal"
              fontWeight="700"
              fontSize="18px"
              lineHeight="27px"
              textAlign="center"
              color="#000000"
            >
              ₴ {totalExpense}
            </Text>
            <Doughnut
              options={options}
              data={{
                datasets: [
                  {
                    data: [50, 50],
                    backgroundColor: [
                      "rgb(192, 192, 192)",
                      "rgb(192, 192, 192)",
                    ],
                  },
                ],
              }}
            />
          </Box>
        </>
      )}
    </>
  );
};

export const NoDataDiagram = ({ totalExpense }) => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 960px)");
  const [isLargerThan960] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan767] = useMediaQuery("(max-width: 767px)");

  return (
    <Box
      h={
        isLargerThan1200
          ? "288px"
          : isLargerThan960
          ? "188px"
          : isLargerThan767
          ? "280px"
          : "340px"
      }
      w={
        isLargerThan1200
          ? "288px"
          : isLargerThan960
          ? "188px"
          : isLargerThan767
          ? "280px"
          : "340px"
      }
      position="relative"
    >
      <Text
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="400"
        fontSize="30px"
        lineHeight="45px"
        display="flex"
        alignItems="center"
        textAlign="center"
        color="#000000"
      >
        Statistics
      </Text>
      <Text
        position="absolute"
        top={isLargerThan1200 ? "180px" : isLargerThan960 ? "130px" : "208px"}
        right={isLargerThan1200 ? "-15px" : isLargerThan960 ? "-63px" : "14px"}
        h="24"
        w="80"
        fontFamily="Circe"
        fontStyle="normal"
        fontWeight="700"
        fontSize="18px"
        lineHeight="27px"
        textAlign="center"
        color="#000000"
      >
        ₴ {totalExpense}
      </Text>
      <Doughnut
        data={{
          datasets: [
            {
              data: [50, 50],
              backgroundColor: ["rgb(192, 192, 192)", "rgb(192, 192, 192)"],
            },
          ],
        }}
      />
      <Text>You have no transactions in the current month 💰.</Text>
    </Box>
  );
};
