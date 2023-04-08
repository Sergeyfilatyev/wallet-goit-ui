import { extendTheme } from "@chakra-ui/react";
import { buttonStyle } from "./buttonStyle";
import { inputStyle } from "./inputStyle";

export const chakraTheme = extendTheme({
  components: { Button: buttonStyle, Input: inputStyle },
  styles: {
    global: {
      "h1, h2": {
        fontWeight: "700",
      },

      body: {
        fontFamily: "Circe",
      },
    },
  },
});
