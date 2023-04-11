import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <main>

        <Box
          background={{ xs: "#FFF", s: "#E7EAF2" }}
          backgroundImage={{ s: purpleEllips }}
          backgroundRepeat={{ s: "no-repeat" }}
          backgroundPosition={{ s: "bottom left" }}
          backgroundSize={{ s: "75%", xl: "45%" }}
        >
          <Box
            backgroundImage={{ s: orangeEllips }}
            backgroundRepeat={{ s: "no-repeat" }}
            backgroundPosition={{ s: "top right" }}
            backgroundSize={{ xs: "65%", xl: "40%" }}
          >
            <PageContainer>
              <Flex
                flexDirection={"column"}
                background={{ xl: "rgba(255, 255, 255, 0.4)" }}
                backdropFilter={{ xl: "blur(25px)" }}
                as="div"
                width="100%"
              >
                <Currency />
                <Outlet />
              </Flex>
            </PageContainer>
          </Box>
        </Box>

        <Dashboard />

      </main>
    </>
  );
};

export default DashboardPage;
