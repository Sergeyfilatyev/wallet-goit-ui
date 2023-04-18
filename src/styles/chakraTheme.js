import { extendTheme } from "@chakra-ui/react";
import { buttonStyle } from "./buttonStyle";
import { inputLoginRegisterStyle } from "./inputLoginRegisterStyled";
import { modalStyle } from "./modalStyle";
import { progressStyle } from "./progressBar";

export const chakraTheme = extendTheme({
  breakpoints: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "960px",
    xl: "1280px",
  },
  components: {
    Button: buttonStyle,
    Input: inputLoginRegisterStyle,
    Modal: modalStyle,
    Progress: progressStyle,
  },

  styles: {
    global: {
      body: {
        fontFamily: "Circe",
        position: "relative",
        h: "100vh",
      },
    },
  },
});
