import { Input, NumberInput, NumberInputField, Select } from "@chakra-ui/react";
import Datetime from "react-datetime";

export const ModalSelectCategory = ({ children }) => {
  return (
    <Select
      variant="flushed"
      placeholder="Select a category"
      w={{ base: "280px", s: "394px" }}
      name="email"
      _placeholder={{
        color: "#BDBDBD",
        fontSize: "18px",
      }}
    >
      {children}
    </Select>
  );
};

export const ModalAmount = () => {
  return (
    <NumberInput variant="flushed" w={{ base: "280px", s: "181px" }}>
      <NumberInputField placeholder="0.00" />
    </NumberInput>
  );
};

export const ModalDatatime = () => {
  return (
    <Datetime
      timeFormat={false}
      inputProps={{ placeholder: "Это календарь, нажми" }}
      w={{ base: "280px", s: "181px" }}
    />
  );
};

export const ModalComment = () => {
  return <Input w={{ base: "280px", s: "394px" }} placeholder="Comment" />;
};
