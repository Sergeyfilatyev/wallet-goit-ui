import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const greenButton = defineStyle({
  fontFamily: "Circe",
  fontWeight: "400",
  border: "none",
  borderRadius: "20px",
  h: "50px",
  bgColor: "#24CCA7",
  color: "#FFFFFF",
  _hover: {
    boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",
  },
});

const whiteButton = defineStyle({
  border: "1px solid #4A56E2;",
  borderRadius: "20px",
  h: "50px",
  bgColor: "#FFFFFF",
  color: "#4A56E2",
  //   _hover: {
  //     bgColor: "#24CCA7",
  //     color: "#FFFFFF",
  //   },
});

export const buttonStyle = defineStyleConfig({
  variants: { greenButton, whiteButton },
});
