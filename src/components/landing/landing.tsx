import {
  Box,
  Grid,
  Image,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { keyframes } from '@emotion/react';
import Logo from "../../assets/Transparent Logo.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const toRotate = ["Developer", "Voluntarist", "Bitcoiner"];

const Landing: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && text === fullText) {
        setDelta(2100);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500 - Math.random() * 100);
      } else {
        setDelta(isDeleting ? 30 : 60);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, isDeleting, loopNum, delta]);

  return (
    <Grid
      h="100vh"
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={6}
      p={4}
      alignItems="center"
      justifyItems="center"
      bgGradient="radial(circle at center, #1C1C1E, #1A1A1E, #000000)"
      marginTop={-100}
    >
      <Box position="relative" width="230px" height="230px">
      <Box
  position="absolute"
  top="14%"
  left="21.5%"
  width="220px"
  height="220px"
  borderRadius="full"
  bgGradient="linear(to bottom right, #FF8700, #ffbf00, #ffcf40, #ffffff)"
  animation={`${rotate} 5s linear infinite`}
  transform="translate(-50%, -50%)"
/>
        <Flex
          width="300px"
          height="300px"
          borderRadius="full"
          overflow="hidden"
          margin="10px"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={Logo}
            alt="Profile"
            boxSize="100%"
            objectFit="cover"
            zIndex="1"
          />
        </Flex>
      </Box>
      <Box
        gridColumn={{ base: "span 1", lg: "span 2" }}
        style={{ color: "#FFA500" }}
      >
        <Flex align={{ base: "center", lg: "start" }} justify={{ base: "center", lg: "start" }}>
        <Heading as="h1" size="2xl" mt={{ base: "-400px", lg: "0" }}>
          Welcome to my page, I'm a <Text as="span">{text}</Text>
          <Text as="span" color="white">
            |
          </Text>
        </Heading>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Landing;