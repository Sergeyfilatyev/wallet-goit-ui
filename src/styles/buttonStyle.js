import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  borderRadius: "20px",
  fontFamily: "Circe",
  fontWeight: "400",
  letterSpacing: "1.6px",
  textTransform: "uppercase",
});

const greenButton = defineStyle({
  fontSize: "18px",
  h: "50px",
  border: "none",
  bgColor: "#24CCA7",
  color: "#FFFFFF",
  _hover: {
    boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",
  },
});

const whiteButton = defineStyle({
  fontSize: "18px",
  h: "50px",
  border: "1px solid #4A56E2;",
  bgColor: "#FFFFFF",
  color: "#4A56E2",
  _hover: {
    boxShadow: "0px 6px 15px  rgba(74, 86, 226, 0.35)",
  },
});

const isOpenModalButton = defineStyle({
  borderRadius: "50px",
  bgColor: "#24CCA7",
  color: "#4A56E2",
  _hover: {
    boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",
  },
});

const deleteButton = defineStyle({
  h: "26px",
  px: "12px",
  bgColor: "#24CCA7",
  textTransform: "capitalize",
  fontSize: "14px",
  color: "#FFFFFF",
  _hover: {
    boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",
  },
});

export const buttonStyle = defineStyleConfig({
  baseStyle,
  variants: { greenButton, whiteButton, isOpenModalButton, deleteButton },
});
