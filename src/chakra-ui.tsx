import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import React from "react";

const ChakraWrapper: React.FC<ChakraProviderProps> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraWrapper;
