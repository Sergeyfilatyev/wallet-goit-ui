import { PageContainer } from "../PageContainer/PageContainer";

import { Logo } from "../Logo";
import { User } from "../User";

import { HeaderBox, HeaderContentBox, HeaderLogoLink } from "./HeaderStyled";

export const Header = () => {
  return (
    <HeaderBox>
      <PageContainer>
        <HeaderContentBox>
          <HeaderLogoLink>
            <Logo />
          </HeaderLogoLink>
          <User name={"Name"} />
        </HeaderContentBox>
      </PageContainer>
    </HeaderBox>
  );
};
