import { Box, Image, Flex } from "@chakra-ui/react";
import Media from "react-media";

import { LoginForm } from "../components/LoginForm";
import { SecondaryLogo } from "../components/SecondaryLogo";

import loginPicture from "../assets/images/login-picture.svg";
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
            background={{ xs: "#FFF", s: "#E7EAF2" }}
            backgroundImage={{ s: purpleEllips }}
            backgroundRepeat={{ s: "no-repeat" }}
            backgroundPosition={{ s: "bottom left" }}
            backgroundSize={{ s: "75%", xl: "45%" }}
            alignItems="center"
          >
            <Flex
              backgroundImage={{ s: orangeEllips }}
              backgroundRepeat={{ s: "no-repeat" }}
              backgroundPosition={{ s: "top right" }}
              backgroundSize={{ xs: "65%", xl: "40%" }}
              py={{ m: "60px", xl: "0" }}
              h="100vh"
              justifyContent={{ xs: "center", m: "start", xl: "space-between" }}
              alignItems="center"
              flexDirection={{ m: "column", xl: "row" }}
            >
              {matches.m && (
                <Flex
                  w="100%"
                  flexDirection={{ base: "row", xl: "column" }}
                  alignItems="center"
                  justifyContent="center"
                  mb={{ m: "50px", xl: "0" }}
                >
                  <Image
                    src={loginPicture}
                    alt="Login picture"
                    maxWidth={{ m: "260px", xl: "435px" }}
                    mb={{ base: "0", xl: "28px" }}
                    mr={{ m: "40px" }}
                  />
                  <SecondaryLogo />
                </Flex>
              )}
              <Flex
                background={{ xl: "rgba(255, 255, 255, 0.4)" }}
                backdropFilter={{ xl: "blur(25px)" }}
                alignItems="center"
                justifyContent="center"
                px={{ m: "100px" }}
                h={{ xl: "100vh" }}
              >
                <LoginForm />
              </Flex>
            </Flex>
          </Box>
        )}
      </Media>
    </>
  );
};

export default LoginPage;
