import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

export const inputLoginRegisterStyle = defineMultiStyleConfig({
  defaultProps: {
    variant: "flushed",
    focusBorderColor: "none",
  },
});
