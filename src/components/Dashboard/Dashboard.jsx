import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import Media from "react-media";

import { Navigation } from "../Navigation/Navigation";
import { Balance } from "../Balance/Balance";
import { Currency } from "../Currency";

import { ModalAddTransaction } from "../ModalTransaction";
import { PageContainer } from "../PageContainer";

import { DashboardBox, DashboardDivider } from "./DashboardStyled";

export const Dashboard = () => {
  return (
    <>
      <Media
        queries={{
          xl: "(min-width: 1280px)",
        }}
      >
        {(matches) => (
          <DashboardBox>
            <PageContainer>
              <Flex>
                <Box>
                  <Navigation />
                  <Balance />
                  <Currency />
                  <ModalAddTransaction />
                </Box>
                {matches.xl && <DashboardDivider />}
                <Outlet />
              </Flex>
            </PageContainer>
          </DashboardBox>
        )}
      </Media>
    </>
  );
};
