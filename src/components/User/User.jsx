import {
  UserBox,
  UserName,
  UserDivider,
  UserExitIcon,
  UserExitText,
} from "./UserStyled";

import { ModalExit } from "./ModalExit";
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
import Media from "react-media";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getName } from "../../redux/auth/auth-selectors";

export const User = () => {
  const { t } = useTranslation();
  const name = useSelector(getName);

  return (
    <>
      <Media
        queries={{
          m: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <UserBox>
            <UserName name={`${name}`} />
            {matches.m && <UserDivider />}
            <ChangeLanguage />
            <ModalExit>
              <UserExitIcon />
              {matches.m && <UserExitText text={t("exit")} />}
            </ModalExit>
          </UserBox>
        )}
      </Media>
    </>
  );
};
