import { Box, Link, Icon, VStack, useMediaQuery } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";
import { keyframes } from '@emotion/react';

const glow = keyframes`
  0% {
    filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 5px #fff) drop-shadow(0 0 7px #fff) drop-shadow(0 0 10px #fff);
  }
  100% {
    filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff) drop-shadow(0 0 15px #fff) drop-shadow(0 0 15px #fff);
  }
`;

const Sidebar: React.FC = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      position="fixed"
      left="0"
      bottom="0"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      paddingLeft="20px"
    >
      <VStack spacing={2} align="center" marginBottom="5px">
        <Link href="https://www.facebook.com" isExternal>
          <Icon as={FaFacebook} color="#FFA500" boxSize="24px" css={{
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              animation: `${glow} 1s ease-in-out infinite alternate`,
            },
          }} />
        </Link>
        <Link href="https://www.twitter.com" isExternal>
          <Icon as={FaTwitter} color="#FFA500" boxSize="24px" css={{
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              animation: `${glow} 1s ease-in-out infinite alternate`,
            },
          }} />
        </Link>
        <Link href="https://www.instagram.com" isExternal>
          <Icon as={FaInstagram} color="#FFA500" boxSize="24px" css={{
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              animation: `${glow} 1s ease-in-out infinite alternate`,
            },
          }} />
        </Link>
      </VStack>
      <Box borderLeft="1px solid #FFA500" height="121px" alignSelf="center" />
    </Box>
  );
};

export default Sidebar;