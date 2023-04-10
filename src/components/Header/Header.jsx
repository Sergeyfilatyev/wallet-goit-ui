import { PageContainer } from "../PageContainer/PageContainer";

import { Logo } from "../Logo";
import { User } from "../User";

import { HeaderBox, HeaderContentBox } from "./HeaderStyled";

export const Header = () => {
  return (
    <HeaderBox>
      <PageContainer>
        <HeaderContentBox>
          <Logo />
          <User name={"Name"} />
        </HeaderContentBox>
      </PageContainer>
    </HeaderBox>
  );
};
