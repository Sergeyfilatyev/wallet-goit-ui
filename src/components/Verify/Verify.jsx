import { useSelector } from "react-redux";
import { getAuth  } from "../../redux/auth/auth-selectors";

import {Flex} from "@chakra-ui/react";
import Media from "react-media";

import { PageContainer } from "../PageContainer";
import { DashboardBox } from "../Dashboard/DashboardStyled";
import { VerifyButton, VerifyText } from "./VerifyStyled";

export const Verify = () => {
  
    const user = useSelector(getAuth)


  const fetchResendEmail = () => {
    console.log(user)
    //   axios.post('/verify', {
    //     email,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
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
              <Flex justifyContent="center" alignItems="center" textAlign="center" flexDirection="column">
                <VerifyText text="Please go to your email and complete the verification"/>
                  <VerifyButton name='Resend Email' func={fetchResendEmail} /> 
              </Flex>
            </PageContainer>
          </DashboardBox>
        )}
      </Media>
    </>
  );
};
