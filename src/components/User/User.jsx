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

export const User = ({ name }) => {
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
              {matches.m && <UserExitText text="Exit" />}
            </ModalExit>
          </UserBox>
        )}
      </Media>
    </>
  );
};
