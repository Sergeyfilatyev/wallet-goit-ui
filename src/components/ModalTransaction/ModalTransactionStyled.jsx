import {
  Button,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Icon,
} from "@chakra-ui/react";

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
  return (
    <Flex
      as="div"
      flexDirection="column"
      alignItems="center"
      pt="40px"
      gap="40px"
    >
      {children}
    </Flex>
  );
};

export const ModalSelectCategory = ({
  children,
  category,
  setCategory,
  placeholder,
}) => {
  return (
    <Select
      onChange={setCategory}
      variant="flushed"
      w={{ base: "280px", s: "394px" }}
      defaultValue={category}
      placeholder={placeholder}
      _placeholder={{
        color: "#BDBDBD",
        fontSize: "30px",
        fontWeight: "400",
      }}
    >
      {children}
    </Select>
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
