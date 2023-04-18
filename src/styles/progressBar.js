import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const progressBarPink = defineStyle({
  filledTrack: {
    bg: "#FF6596",
  },
});

const progressBarGreen = defineStyle({
  filledTrack: {
    bg: "#24CCA7",
  },
});

export const progressStyle = defineStyleConfig({
  variants: { progressBarPink, progressBarGreen },
});
