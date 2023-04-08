import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import Media from "react-media";

import { LoginForm } from "../components/LoginForm";
import { SecondaryLogo } from "../components/SecondaryLogo";

import purpleEllips from "../assets/images/purple-ellips-background.png";
import orangeEllips from "../assets/images/orange-ellips-background.png";

const LoginPage = () => {
  return (
    <>
      <Media
        queries={{
          m: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <Box
            background="#E7EAF2"
            backgroundImage={purpleEllips}
            backgroundRepeat="no-repeat"
            backgroundPosition="bottom left"
            backgroundSize="50%"
          >
            <Box
              backgroundImage={orangeEllips}
              backgroundRepeat="no-repeat"
              backgroundPosition="top right"
              backgroundSize="40%"
            >
              <Flex
                justifyContent={{ base: "center", m: "space-between" }}
                alignItems="center"
              >
                {matches.m && (
                  <Box h="100vh" w="100%">
                    <SecondaryLogo />
                  </Box>
                )}
                <Box
                  background="rgba(255, 255, 255, 0.4)"
                  backdropFilter="blur(25px)"
                  pr="91px"
                  pl="107px"
                  h="100vh"
                >
                  <LoginForm />
                </Box>
              </Flex>
            </Box>
          </Box>
        )}
      </Media>
    </>
  );
};

export default LoginPage;
