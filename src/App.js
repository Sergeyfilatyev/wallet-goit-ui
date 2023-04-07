import "./App.css";
import { Box } from "@chakra-ui/react";

import { LoginForm } from "./components/LoginForm/LoginForm";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { Currency } from "./components/Currency";

function App() {
  return (
    <Box>
      <h1>App Wallet GOIT</h1>
      <RegistrationForm />
      <LoginForm />
      <Currency />
    </Box>
  );
}

export default App;
