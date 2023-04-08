import { Box, Image, Flex } from "@chakra-ui/react";
import Media from "react-media";

import { RegistrationForm } from "../components/RegistrationForm";
import { SecondaryLogo } from "../components/SecondaryLogo";

import registerPicture from "../assets/images/register-picture.svg";
import purpleEllips from "../assets/images/purple-ellips-background.png";
import orangeEllips from "../assets/images/orange-ellips-background.png";

const RegiostrationPage = () => {
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
            backgroundSize={{ m: "75%", xl: "45%" }}
          >
            <Flex
              backgroundImage={orangeEllips}
              backgroundRepeat="no-repeat"
              backgroundPosition={{ m: "top right -150px", xl: "top right" }}
              backgroundSize={{ s: "65%", xl: "40%" }}
              py={{ s: "60px", xl: "0" }}
              h="100vh"
              justifyContent={{ s: "center", m: "start", xl: "space-between" }}
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
                    src={registerPicture}
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
                <RegistrationForm />
              </Flex>
            </Flex>
          </Box>
        )}
      </Media>
    </>
  );
};

export default RegiostrationPage;
