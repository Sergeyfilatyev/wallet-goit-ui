// import { useDispatch } from "react-redux";
// import { logout } from "../../shared/api/auth";

import {
  UserBox,
  UserName,
  UserDivider,
  UserExitIcon,
  UserExitText,
} from "./UserStyled";

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
            <UserExitIcon />
            {matches.m && <UserExitText text="Exit" />}
          </UserBox>
        )}
      </Media>
    </>
  );
};
