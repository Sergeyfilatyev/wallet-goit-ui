import "./App.css";
import { Box } from "@chakra-ui/react";
import { LoginForm } from "./components/LoginForm/LoginForm";

import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <Box>
      <h1>App Wallet GOIT</h1>
      <RegistrationForm />
      <LoginForm />
    </Box>
  );
}

export default App;
