import { Outlet } from "react-router-dom";
import Media from "react-media";

import { Navigation } from "../Navigation/Navigation";
import { Balance } from "../Balance/Balance";
import { Currency } from "../Currency";

import { PageContainer } from "../PageContainer";
import {
  DashboardBox,
  DashboardDivider,
  DashboardContent,
  DashboardNavigationBalanceBox,
  DashboardContentFirstPart,
  DashboardContentSecondPart,
  DashboardAddTransactionButton,
} from "./DashboardStyled";

export const Dashboard = () => {
  return (
    <>
      <Media
        queries={{
          l: "(min-width: 960px)",
          m: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <DashboardBox>
            <PageContainer>
              <DashboardContent>
                <DashboardContentFirstPart>
                  <DashboardNavigationBalanceBox>
                    <Navigation />
                    <Balance />
                  </DashboardNavigationBalanceBox>
                  {matches.m && <Currency />}
                </DashboardContentFirstPart>
                {matches.l && <DashboardDivider />}
                <DashboardContentSecondPart>
                  <Outlet />
                </DashboardContentSecondPart>
              </DashboardContent>
              <DashboardAddTransactionButton />
            </PageContainer>
          </DashboardBox>
        )}
      </Media>
    </>
  );
};
