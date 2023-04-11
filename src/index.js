import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";

// import { Provider } from "react-redux";
// import { store } from "./redux/store";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { chakraTheme } from "./styles/chakraTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={chakraTheme}>
        {/* <PersistGate persistore={persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </PersistGate> */}
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
