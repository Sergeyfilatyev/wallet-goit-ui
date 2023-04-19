import {
  Button,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Box,
  Icon,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Select from "react-select";

export const ModalAddOpentButton = ({ onClick }) => {
  return (
    <Button variant="isOpenModalButton" w="44px" h="44px" onClick={onClick}>
      <Icon viewBox="0 0 20 20" w="20px" h="20px">
        <path d="M10 0V20" stroke="white" strokeWidth="2" />
        <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
      </Icon>
    </Button>
  );
};

export const ModalComponentsBox = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <Flex
      fontFamily={i18n.language === "en" ? "Circe" : "Arial"}
      as="div"
      flexDirection="column"
      alignItems="center"
      pt="40px"
      gap="40px"
      w="100%"
    >
      {children}
    </Flex>
  );
};

// export const ModalSelectCategory = ({
//   children,
//   category,
//   setCategory,
//   placeholder,
//   as,
// }) => {
//   return (
//     <Select
//       as={as}
//       onChange={setCategory}
//       variant="flushed"
//       w={{ base: "280px", s: "394px" }}
//       defaultValue={category}
//       placeholder={placeholder}
//       _placeholder={{
//         color: "#BDBDBD",
//         fontSize: "30px",
//         fontWeight: "400",
//       }}
//     >
//       {children}
//     </Select>
//   );
// };

export const ModalSelectCategory = ({
  category,
  setCategory,
  placeholder,
  categories,
  t,
}) => {
  return (
    <Box w={{ base: "280px", s: "394px" }}>
      <Select
        styles={{
          container: (baseStyles, state) => ({
            ...baseStyles,
            width: "100%",
            border: state.isFocused ? "none" : "none",
            borderBottom: state.isFocused
              ? "2px solid #000000"
              : "1px solid #E0E0E0",
          }),
          valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            padding: "0px",
          }),

          menu: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "20px",
            background: "rgba(0, 0, 0, 0.1)",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
          }),

          menuList: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(25px)",
          }),

          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor:
              (state.isSelected && "#FFF") || (state.isFocused && "#FFF"),
            color:
              (state.isSelected && "#FF6596") || (state.isFocused && "#FF6596"),
            fontWeight:
              (state.isSelected && "700") || (state.isFocused && "700"),
            height: "44px",
            padding: "10px 20px",
          }),

          indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            display: "none",
          }),

          singleValue: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor:
              (state.isSelected && "#FFF") || (state.isFocused && "#FFF"),
          }),

          control: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            boxShadow: "none",
          }),

          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: "#BDBDBD",
            fontSize: "18px",
          }),
        }}
        onChange={(option) => setCategory(option.value)}
        defaultValue={category}
        placeholder={placeholder}
        options={categories.map((item) => {
          return { value: item.category, label: t(item.category) };
        })}
      />
    </Box>
  );
};

export const ModalAmountDateBox = ({ children }) => {
  return (
    <Flex as="div" gap="32px" flexDirection={{ base: "column", s: "row" }}>
      {children}
    </Flex>
  );
};

export const ModalAmount = ({ amount, setAmount }) => {
  return (
    <NumberInput
      value={amount}
      onChange={setAmount}
      variant="flushed"
      focusBorderColor="none"
      w={{ base: "280px", s: "181px" }}
    >
      <NumberInputField
        placeholder="0.00"
        _placeholder={{
          color: "#BDBDBD",
          fontSize: "18px",
          fontWeight: "700",
        }}
      />
    </NumberInput>
  );
};

export const ModalDate = ({ date, setDate }) => {
  return (
    <Input
      onChange={setDate}
      type="date"
      defaultValue={date}
      min="2023-01-01"
      max={date}
      required
      w={{ base: "280px", s: "181px" }}
      color="#000000"
      fontSize="18px"
      fontWeight="400"
    />
  );
};

export const ModalComment = ({ comment, setComment, placeholder }) => {
  return (
    <Input
      value={comment}
      onChange={setComment}
      w={{ base: "280px", s: "394px" }}
      placeholder={placeholder}
      _placeholder={{
        color: "#BDBDBD",
        fontSize: "18px",
        fontWeight: "400",
      }}
    />
  );
};
export const EditIcon = () => {
  return (
    <Icon viewBox="0 0 32 32" w="16px" h="16px">
      <path
        d="M24 13.333l-5.333-5.333M3.333 28.667l4.514-0.503c0.549-0.059 0.825-0.091 1.083-0.174 0.229-0.075 0.446-0.178 0.647-0.311 0.226-0.151 0.423-0.345 0.814-0.738l17.609-17.609c0.651-0.677 1.053-1.598 1.053-2.614 0-2.083-1.689-3.771-3.771-3.771-1.015 0-1.937 0.401-2.615 1.054l0.001-0.001-17.609 17.609c-0.393 0.391-0.587 0.587-0.738 0.814-0.125 0.186-0.23 0.4-0.305 0.628l-0.005 0.019c-0.082 0.258-0.114 0.533-0.174 1.086l-0.503 4.512z"
        fill="transparent"
        stroke="black"
        strokeWidth="2.7429"
      />
    </Icon>
  );
};
