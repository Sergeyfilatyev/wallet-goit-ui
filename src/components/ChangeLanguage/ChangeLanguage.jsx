import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/react";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>
      <Button onClick={() => i18n.changeLanguage("ru")}>РУ</Button>
      <Button onClick={() => i18n.changeLanguage("ua")}>УКР</Button>
    </>
  );
};
