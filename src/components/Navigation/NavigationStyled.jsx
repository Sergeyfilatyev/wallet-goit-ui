import { Flex, Link, Icon } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const NavigationBox = ({ children }) => {
  return (
    <Flex
      justifyContent={{ xs: "center", m: "start" }}
      as="nav"
      mb={{ xs: "12px", m: "28px" }}
      flexDirection={{ xs: "row", m: "column" }}
      width="100%"
      gap="36px"
    >
      {children}
    </Flex>
  );
};

const NavigationHomeIcon = ({ fill, filter }) => {
  return (
    <Icon
      viewBox="0 0 18 18"
      w={{ xs: "38px", m: "18px" }}
      h={{ xs: "38px", m: "18px" }}
      mr={{ xs: "0px", m: "23px" }}
      filter={filter}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0C0.895431 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V2C18 0.895431 17.1046 0 16 0H2ZM7.8 10.1176V14H4.8V8.82353H3L9 3L15 8.82353H13.2V14H10.2V10.1176H7.8Z"
        fill={fill}
      />
    </Icon>
  );
};

export const NavigationHome = ({ linkName }) => {
  const [active, setActive] = useBoolean();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/dashboard/home" ? setActive.on() : setActive.off();
  }, [location.pathname, setActive]);
  const { i18n } = useTranslation();
  return (
    <Flex
      alignItems="center"
      onMouseEnter={setActive.on}
      onMouseLeave={
        location.pathname !== "/dashboard/home" ? setActive.off : setActive.on
      }
    >
      {!active && (
        <>
          <Link
            to="home"
            as={NavLink}
            fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
            fontSize={{ xs: "0px", m: "18px" }}
            lineHeight="1.5"
          >
            <NavigationHomeIcon fill="#6E78E8" />
            {linkName}
          </Link>
        </>
      )}
      {active && (
        <>
          <Link
            to="home"
            as={NavLink}
            fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
            fontSize={{ xs: "0px", m: "18px" }}
            lineHeight="1.5"
            fontWeight="700"
            _hover={{ textDecoration: "none" }}
          >
            <NavigationHomeIcon
              fill="#4A56E2"
              filter="drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))"
            />
            {linkName}
          </Link>
        </>
      )}
    </Flex>
  );
};

const NavigationStatisticsIcon = ({ fill, filter }) => {
  return (
    <Icon
      viewBox="0 0 18 18"
      w={{ xs: "38px", m: "18px" }}
      h={{ xs: "38px", m: "18px" }}
      mr={{ xs: "0px", m: "23px" }}
      filter={filter}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0C0.895431 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V2C18 0.895431 17.1046 0 16 0H2ZM14.7273 7.66667C15.4273 7.66667 16 7.06667 16 6.33333C16 5.6 15.4273 5 14.7273 5C14.0273 5 13.4545 5.6 13.4545 6.33333C13.4545 6.45333 13.4673 6.56667 13.4991 6.67333L11.24 9.04667C11.1382 9.01333 11.0236 9 10.9091 9C10.7945 9 10.68 9.01333 10.5782 9.04667L8.95545 7.34667C8.98727 7.24 9 7.12 9 7C9 6.26667 8.42727 5.66667 7.72727 5.66667C7.02727 5.66667 6.45455 6.26667 6.45455 7C6.45455 7.12 6.46727 7.24 6.49909 7.34667L3.59727 10.38C3.49545 10.3467 3.38727 10.3333 3.27273 10.3333C2.57273 10.3333 2 10.9333 2 11.6667C2 12.4 2.57273 13 3.27273 13C3.97273 13 4.54545 12.4 4.54545 11.6667C4.54545 11.5467 4.53273 11.4333 4.50091 11.3267L7.39636 8.28667C7.49818 8.32 7.61273 8.33333 7.72727 8.33333C7.84182 8.33333 7.95636 8.32 8.05818 8.28667L9.68091 9.98667C9.64909 10.0933 9.63636 10.2133 9.63636 10.3333C9.63636 11.0667 10.2091 11.6667 10.9091 11.6667C11.6091 11.6667 12.1818 11.0667 12.1818 10.3333C12.1818 10.2133 12.1691 10.0933 12.1373 9.98667L14.4027 7.62C14.5045 7.65333 14.6127 7.66667 14.7273 7.66667Z"
        fill={fill}
      />
    </Icon>
  );
};

export const NavigationStatistics = ({ linkName }) => {
  const [active, setActive] = useBoolean();
  const location = useLocation();
  useEffect(() => {
    location.pathname === "/dashboard/statistics"
      ? setActive.on()
      : setActive.off();
  }, [location.pathname, setActive]);
  const { i18n } = useTranslation();
  return (
    <Flex
      alignItems="center"
      onMouseEnter={setActive.on}
      onMouseLeave={
        location.pathname !== "/dashboard/statistics"
          ? setActive.off
          : setActive.on
      }
    >
      {!active && (
        <>
          <Link
            to="statistics"
            as={NavLink}
            fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
            fontSize={{ xs: "0px", m: "18px" }}
            lineHeight="1.5"
          >
            <NavigationStatisticsIcon fill="#6E78E8" />
            {linkName}
          </Link>
        </>
      )}
      {active && (
        <>
          <Link
            to="statistics"
            as={NavLink}
            fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
            fontSize={{ xs: "0px", m: "18px" }}
            lineHeight="1.5"
            fontWeight="700"
            _hover={{ textDecoration: "none" }}
          >
            <NavigationStatisticsIcon
              fill="#4A56E2"
              filter="drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))"
            />
            {linkName}
          </Link>
        </>
      )}
    </Flex>
  );
};

const NavigationCurrencyIcon = ({ fill, filter }) => {
  return (
    <Icon
      viewBox="0 0 38 38"
      w={{ xs: "38px", m: "18px" }}
      h={{ xs: "38px", m: "18px" }}
      mr={{ xs: "0px", m: "23px" }}
      filter={filter}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C2.68629 0 0 2.68629 0 6V32C0 35.3137 2.68629 38 6 38H32C35.3137 38 38 35.3137 38 32V6C38 2.68629 35.3137 0 32 0H6ZM15.7523 15.5989C15.7523 16.7809 16.6607 17.5399 19.4852 18.2741C22.3096 19.0082 25.3332 20.2151 25.3332 23.7489C25.3332 26.2996 23.4046 27.7056 20.9783 28.166V30.8412H17.2455V28.1411C14.8565 27.631 12.8159 26.1005 12.6666 23.3756H15.4039C15.5408 24.8438 16.5487 25.9885 19.1119 25.9885C21.8617 25.9885 22.4714 24.6198 22.4714 23.7613C22.4714 22.6041 21.8493 21.5092 18.7386 20.7626C15.2671 19.9289 12.8905 18.498 12.8905 15.6238C12.8905 13.2223 14.8316 11.6546 17.2455 11.132V8.44434H20.9783V11.1693C23.5788 11.8039 24.8853 13.7698 24.9724 15.91H22.2225C22.1479 14.3546 21.3267 13.297 19.1119 13.297C17.0091 13.297 15.7523 14.2426 15.7523 15.5989Z"
        fill={fill}
      />
    </Icon>
  );
};

export const NavigationCurrency = ({ linkName }) => {
  const [active, setActive] = useBoolean();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/dashboard/currency"
      ? setActive.on()
      : setActive.off();
  }, [location.pathname, setActive]);
  const { i18n } = useTranslation();
  return (
    <Flex
      alignItems="center"
      onMouseEnter={setActive.on}
      onMouseLeave={
        location.pathname !== "/dashboard/currency"
          ? setActive.off
          : setActive.on
      }
    >
      {!active && (
        <>
          <Link
            to="currency"
            as={NavLink}
            fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
            fontSize={{ xs: "0px", m: "18px" }}
            lineHeight="1.5"
          >
            <NavigationCurrencyIcon fill="#6E78E8" />
            {linkName}
          </Link>
        </>
      )}
      {active && (
        <>
          <Link
            to="currency"
            as={NavLink}
            fontFamily={i18n.language === "en" ? "Poppins" : "Arial"}
            fontSize={{ xs: "0px", m: "18px" }}
            lineHeight="1.5"
            fontWeight="700"
            _hover={{ textDecoration: "none" }}
          >
            <NavigationCurrencyIcon
              fill="#4A56E2"
              filter="drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))"
            />
            {linkName}
          </Link>
        </>
      )}
    </Flex>
  );
};
