import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const GoogleAuthPage = () => {
  const [token, setToken] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tokenValue = searchParams.get("token");

    if (tokenValue) {
      setToken(tokenValue);
    }
  }, [location.search]);

  return (
    <Box p="4">
      {!token ? (
        <Box>
          <Heading as="h2" size="lg">
            Выберите другой способ входа для регистрации
          </Heading>
          <Box mt="4">
            <Button as={Link} to="/" colorScheme="blue">
              Регистрация
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <Heading as="h2" size="lg">
            Вы успешно авторизовались!
          </Heading>
          <Box mt="4">
            <Button as={Link} to="/dashboard" colorScheme="green">
              Перейти в приложение
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default GoogleAuthPage;
