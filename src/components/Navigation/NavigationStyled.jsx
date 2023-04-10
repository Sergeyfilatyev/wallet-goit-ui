import { Flex, Link, Icon } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const NavigationBox = ({ children }) => {
  return (
    <Flex as="nav" mb="28px" flexDirection="column" gap="12px">
      {children}
    </Flex>
  );
};

const NavigationHomeIcon = ({ fill, filter }) => {
  return (
    <Icon viewBox="0 0 18 18" w="18px" h="18px" mr="23px" filter={filter}>
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
          <NavigationHomeIcon fill="#6E78E8" />
          <Link
            to="home"
            as={NavLink}
            fontFamily="Poppins"
            fontSize="18px"
            lineHeight="1.5"
          >
            {linkName}
          </Link>
        </>
      )}
      {active && (
        <>
          <NavigationHomeIcon
            fill="#4A56E2"
            filter="drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))"
          />
          <Link
            to="home"
            as={NavLink}
            fontFamily="Poppins"
            fontSize="18px"
            lineHeight="1.5"
            fontWeight="700"
            _hover={{ textDecoration: "none" }}
          >
            {linkName}
          </Link>
        </>
      )}
    </Flex>
  );
};

const NavigationStatisticsIcon = ({ fill, filter }) => {
  return (
    <Icon viewBox="0 0 18 18" w="18px" h="18px" mr="23px" filter={filter}>
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
          <NavigationStatisticsIcon fill="#6E78E8" />
          <Link
            to="statistics"
            as={NavLink}
            fontFamily="Poppins"
            fontSize="18px"
            lineHeight="1.5"
          >
            {linkName}
          </Link>
        </>
      )}
      {active && (
        <>
          <NavigationStatisticsIcon
            fill="#4A56E2"
            filter="drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))"
          />
          <Link
            to="statistics"
            as={NavLink}
            fontFamily="Poppins"
            fontSize="18px"
            lineHeight="1.5"
            fontWeight="700"
            _hover={{ textDecoration: "none" }}
          >
            {linkName}
          </Link>
        </>
      )}
    </Flex>
  );
};
