import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

import { Navigation } from "../Navigation/Navigation";
import { Balance } from "../Balance/Balance";
import { Currency } from "../Currency";

import { ModalAddTransaction } from "../ModalTransaction";
import { PageContainer } from "../PageContainer";

import { DashboardBox } from "./DashboardStyled";

export const Dashboard = () => {
  return (
    <DashboardBox>
      <PageContainer>
        <Flex>
          <Box>
            <Navigation />
            <Balance />
            <Currency />
            <ModalAddTransaction />
          </Box>
          <Outlet />
        </Flex>
      </PageContainer>
    </DashboardBox>
  );
};
