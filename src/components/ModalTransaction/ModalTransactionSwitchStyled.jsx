import { useState, useEffect } from "react";

import Switch from "react-switch";

import { Flex, Icon, Text } from "@chakra-ui/react";

const ModalSwitchIconPlus = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="44px"
      w="44px"
      boxShadow="0px 6px 15px #24CCA7"
      borderRadius="44px"
    >
      <Icon viewBox="0 0 20 20" w="20px" h="20px">
        <path d="M10 0V20" stroke="white" strokeWidth="2" />
        <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
      </Icon>
    </Flex>
  );
};

const ModalSwitchIconMinus = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="44px"
      w="44px"
      boxShadow="0px 6px 15px #FF6596"
      borderRadius="44px"
    >
      <Icon viewBox="0 0 20 20" w="20px" h="20px">
        <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
      </Icon>
    </Flex>
  );
};

const ModalSwitchTrackOff = () => {
  return (
    <Flex h="40px" w="80px" ml="-44px">
      <Icon viewBox="0 0 80 40" w="80px" h="40px">
        <rect
          x="0.5"
          y="0.5"
          width="79"
          height="39"
          rx="19.5"
          fill="white"
          stroke="#E0E0E0"
        />
      </Icon>
    </Flex>
  );
};

const ModalSwitchTrackOn = () => {
  return (
    <Flex h="40px" w="80px">
      <Icon viewBox="0 0 80 40" w="80px" h="40px">
        <rect
          x="0.5"
          y="0.5"
          width="79"
          height="39"
          rx="19.5"
          fill="white"
          stroke="#E0E0E0"
        />
      </Icon>
    </Flex>
  );
};

export const ModalSwitch = ({
  setIsSwitchExpense,
  expenseLabel,
  incomeLabel,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setIsSwitchExpense(checked);
  }, [setIsSwitchExpense, checked]);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Flex gap="24px" justifyContent="center" alignItems="center">
      {checked ? (
        <Text
          fontFamily="Circe"
          fontWeight="700"
          fontSize="16px"
          lineHeight="1.5"
          color="#E0E0E0"
        >
          {incomeLabel}
        </Text>
      ) : (
        <Text
          fontFamily="Circe"
          fontWeight="700"
          fontSize="16px"
          lineHeight="1.5"
          color="#24CCA7"
        >
          {incomeLabel}
        </Text>
      )}
      <Switch
        onChange={handleChange}
        checked={checked}
        handleDiameter={44}
        uncheckedIcon={<ModalSwitchTrackOff />}
        checkedIcon={<ModalSwitchTrackOn />}
        uncheckedHandleIcon={<ModalSwitchIconPlus />}
        checkedHandleIcon={<ModalSwitchIconMinus />}
        offColor={"#FFFFFF"}
        onColor={"#FFFFFF"}
        height={40}
        width={80}
        offHandleColor={"#24CCA7"}
        onHandleColor={"#FF6596"}
        activeBoxShadow={"#FFFFFF"}
      />
      {checked ? (
        <Text
          fontFamily="Circe"
          fontWeight="700"
          fontSize="16px"
          lineHeight="1.5"
          color="#FF6596"
        >
          {expenseLabel}
        </Text>
      ) : (
        <Text
          fontFamily="Circe"
          fontWeight="700"
          fontSize="16px"
          lineHeight="1.5"
          color="#E0E0E0"
        >
          {expenseLabel}
        </Text>
      )}
    </Flex>
  );
};
