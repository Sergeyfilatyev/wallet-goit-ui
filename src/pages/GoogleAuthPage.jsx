import { Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const GoogleAuthPage = () => {
  return (
    <Box p="4">
      <Box>
        <Heading as="h2" size="lg">
          Вы уже зарегистрированы другим способом, пожалуста перейдите на
          страницу авторизации , чтобы продолжить.
        </Heading>
        <Box mt="4">
          <Button as={Link} to="/" colorScheme="blue">
            Перейти на главную страницу
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GoogleAuthPage;
