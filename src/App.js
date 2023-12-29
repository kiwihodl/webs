import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme.ts";
import Nav from "./components/navbar/navbar.tsx"
import Landing from './components/landing/landing.tsx';
import Choose from './components/calltoaction/choose.tsx'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Landing />
      <Choose />
    </ChakraProvider>
  );
}

export default App;
