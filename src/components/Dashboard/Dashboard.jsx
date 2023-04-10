import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

import { Navigation } from "../Navigation/Navigation";
import { Balance } from "../Balance/Balance";
import { Currency } from "../Currency";
<<<<<<< Updated upstream
=======
import { ModalAddTransaction } from "../ModalTransaction";
>>>>>>> Stashed changes

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
          </Box>
          <Outlet />
        </Flex>
      </PageContainer>
    </DashboardBox>
  );
};
