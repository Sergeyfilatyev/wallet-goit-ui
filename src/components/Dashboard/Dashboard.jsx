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
  DashboardRedirect,
} from "./DashboardStyled";

export const Dashboard = () => {
  return (
    <>
      <Media
        queries={{
          xl: "(min-width: 1280px)",
          m: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <>
            <DashboardBox>
              <PageContainer>
                <DashboardContent>
                  <DashboardContentFirstPart>
                    <DashboardNavigationBalanceBox>
                      <Navigation />
                      {matches.m && <Balance />}
                    </DashboardNavigationBalanceBox>
                    {matches.m && <Currency />}
                  </DashboardContentFirstPart>
                  {matches.xl && <DashboardDivider />}
                  <DashboardContentSecondPart>
                    <Outlet />
                  </DashboardContentSecondPart>
                </DashboardContent>
              </PageContainer>
              {matches.m && <DashboardRedirect />}
            </DashboardBox>
            <DashboardAddTransactionButton />
          </>
        )}
      </Media>
    </>
  );
};
