import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  h: "50px",
  borderRadius: "20px",
  fontFamily: "Circe",
  fontWeight: "400",
  textTransform: "uppercase",
});

const greenButton = defineStyle({
  border: "none",
  bgColor: "#24CCA7",
  color: "#FFFFFF",
  _hover: {
    boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",
  },
});

const whiteButton = defineStyle({
  border: "1px solid #4A56E2;",
  bgColor: "#FFFFFF",
  color: "#4A56E2",
  _hover: {
    boxShadow: "0px 6px 15px  rgba(74, 86, 226, 0.35);",
  },
});

export const buttonStyle = defineStyleConfig({
  baseStyle,
  variants: { greenButton, whiteButton },
});
