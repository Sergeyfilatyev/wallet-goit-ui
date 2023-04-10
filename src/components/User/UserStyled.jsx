import { Flex, Text, Icon } from "@chakra-ui/react";

export const UserBox = ({ children }) => {
  return (
    <Flex justifyContent="center" alignItems="center" height="30px" as="div">
      {children}
    </Flex>
  );
};

export const UserName = ({ name }) => {
  return (
    <Text
      fontFamily="Circe"
      fontSize="18px"
      alignItems="1.5"
      color="#BDBDBD"
      mr={{ xs: "8px", m: "12px" }}
      as="p"
    >
      {name}
    </Text>
  );
};

export const UserDivider = () => {
  return (
    <Icon viewBox="0 0 2 30" h="30px" mr="12px" w="2px">
      <path stroke="#BDBDBD" d="M1 0V30" />
    </Icon>
  );
};

export const UserExitIcon = () => {
  return (
    <Icon viewBox="0 0 18 18" mr="8px">
      <path
        fill="#BDBDBD"
        d="M11.2788 13.0708H12.6844V15.8818C12.6844 17.0443 11.7386 17.99 10.5761 17.99H2.10814C0.945786 17.99 0 17.0443 0 15.8818V2.10814C0 0.945786 0.945786 0 2.10814 0H10.5761C11.7386 0 12.6844 0.945786 12.6844 2.10814V4.91913H11.2788V2.10814C11.2788 1.72073 10.9637 1.40543 10.5761 1.40543H2.10814C1.72073 1.40543 1.40543 1.72073 1.40543 2.10814V15.8818C1.40543 16.2692 1.72073 16.5845 2.10814 16.5845H10.5761C10.9637 16.5845 11.2788 16.2692 11.2788 15.8818V13.0708ZM14.6872 5.68213L13.6934 6.67598L15.3096 8.29234H6.21922V9.69777H15.3096L13.6934 11.314L14.6872 12.3078L18 8.99506L14.6872 5.68213Z"
      />
    </Icon>
  );
};

export const UserExitText = ({ text }) => {
  return (
    <Text
      fontFamily="Circe"
      fontSize="18px"
      alignItems="1.5"
      color="#BDBDBD"
      as="p"
    >
      {text}
    </Text>
  );
};
