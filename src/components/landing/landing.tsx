import {
  Box,
  Grid,
  Image,
  Flex,
  useTheme,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Logo from "../assets/Transparent Logo.svg";

const Landing: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Developer", "Voluntarist", "Bitcoiner"];
  const period = 2000;
  const theme = useTheme();

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(delta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <Grid
      h="100vh"
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={6}
      p={4}
      alignItems="center"
      justifyItems="center"
      bgGradient={`radial(circle at center, ${theme.colors.background.dark}, ${theme.colors.background.black})`}
      marginTop={-100}
    >
      <Box
        borderRadius="full"
        overflow="hidden"
        maxW={{ base: "300px", lg: "300px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          w={{ base: "300px", lg: "300px" }}
          h={{ base: "300px", lg: "300px" }}
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          overflow="hidden"
        >
          <Image
            src={Logo}
            alt="Profile"
            boxSize="100%"
            objectFit="cover"
            style={{ filter: "drop-shadow(0px 0px 6px white)" }}
          />
        </Flex>
      </Box>
      <Box
        gridColumn={{ base: "span 1", lg: "span 2" }}
        style={{ color: theme.colors.text.orange }}
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
