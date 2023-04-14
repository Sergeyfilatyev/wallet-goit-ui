// import { useDispatch } from "react-redux";
// import { logout } from "../../shared/api/auth";

import {
  UserBox,
  UserName,
  UserDivider,
  UserExitIcon,
  UserExitText,
} from "./UserStyled";

import { ModalExit } from "./ModalExit";

import Media from "react-media";
import { useTranslation } from "react-i18next";

export const User = ({ name }) => {
  const { t } = useTranslation();
  return (
    <>
      <Media
        queries={{
          m: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <UserBox>
            <UserName name={name} />
            {matches.m && <UserDivider />}
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
