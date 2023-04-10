import { extendTheme } from "@chakra-ui/react";
import { buttonStyle } from "./buttonStyle";
import { inputLoginRegisterStyle } from "./inputLoginRegisterStyle";

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
  },
  styles: {
    global: {
      body: {
        fontFamily: "Circe",
      },
    },
  },
});
