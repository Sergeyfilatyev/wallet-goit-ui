import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { stateLogin } from "../../redux/auth/auth-selectors";
import axios from "axios";

import { Flex } from "@chakra-ui/react";
import Media from "react-media";

import { PageContainer } from "../PageContainer";
import { DashboardBox } from "../Dashboard/DashboardStyled";
import { VerifyButton, VerifyText } from "./VerifyStyled";

axios.defaults.baseURL = process.env.REACT_APP_URL;

export const Verify = () => {
  const userState = useSelector(stateLogin);
    const navigate = useNavigate();

  const fetchResendEmail = async () => {
    if (userState.error) {
      await axios
        .post("/users/verify", {
          email: userState.error.email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      await axios
        .post("/users/verify", {
          email: userState.user.email,
        })
        .then(function (response) {
          if (response.status === 200) {
            return navigate("/");;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
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
              <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                textAlign="center"
                wordWrap="break-word"
              >
                <VerifyText text={`Check your Email: ${userState.user.email}  and complete the verification`} />
                <VerifyButton
                  name="Resend Email"
                  func={() => fetchResendEmail()}
                />
              </Flex>
            </PageContainer>
          </DashboardBox>
        )}
      </Media>
    </>
  );
};
