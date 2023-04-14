import { useTranslation } from "react-i18next";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Box,
} from "@chakra-ui/react";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <Box
      pos="absolute"
      zIndex={"500"}
      left={"50%"}
      top="4"
      textAlign="center"
      color={"#BDBDBD"}
    >
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              aria-label="Language"
              variant="ghost"
              _hover={{ bg: "transparent" }}
            >
              {i18n.language === "en"
                ? "EN"
                : i18n.language === "ru"
                ? "РУ"
                : "УКР"}
            </MenuButton>
            <MenuList
              opacity={isOpen ? "1" : "0"}
              transition="opacity 300, transform 300"
            >
              <MenuItem
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                EN
              </MenuItem>
              <MenuItem
                onClick={() => {
                  i18n.changeLanguage("ru");
                }}
              >
                РУ
              </MenuItem>
              <MenuItem
                onClick={() => {
                  i18n.changeLanguage("ua");
                }}
              >
                УКР
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};
