import { useTranslation } from "react-i18next";
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { GrLanguage } from "react-icons/gr";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <Menu isLazy>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={IconButton}
            aria-label="Language"
            icon={<GrLanguage />}
            variant="ghost"
            isActive={isOpen}
            transition="all 0.2s"
            fontSize="1.5rem"
            size="1.5rem" // Устанавливаем размер иконки
          />
          <MenuList
            minWidth="auto"
            borderRadius="md"
            boxShadow="md"
            mt="2"
            opacity={isOpen ? "1" : "0"}
            transform={isOpen ? "translateY(0)" : "translateY(-10px)"}
            transition="opacity 500, transform 500"
          >
            <MenuItem onClick={() => i18n.changeLanguage("en")}>EN</MenuItem>
            <MenuItem onClick={() => i18n.changeLanguage("ru")}>РУ</MenuItem>
            <MenuItem onClick={() => i18n.changeLanguage("ua")}>УКР</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
