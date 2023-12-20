import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ChakraWrapper from "../src/chakra-ui.tsx";

ReactDOM.render(
  <React.StrictMode>
    <ChakraWrapper>
      <App />
    </ChakraWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);



