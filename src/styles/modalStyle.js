import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const xs = defineStyle({
  width: "100%",
});

const s = defineStyle({
  width: "480px",
});

const m = defineStyle({
  width: "540px",
});

const sizes = {
  xs: definePartsStyle({ dialog: xs }),
  s: definePartsStyle({ dialog: s }),
  m: definePartsStyle({ dialog: m }),
};

export const modalStyle = defineMultiStyleConfig({
  sizes,
});
