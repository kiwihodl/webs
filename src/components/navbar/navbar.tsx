import { Box, Button, Flex, Image, useBreakpointValue, Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import React from "react";

const fontStyles = {
  fontFamily: "'Rubik Glitch', 'sans-serif', 'Lato', sans-serif",
};

const MenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Button 
    variant="link" 
    color="#FF8700" 
    mr={2}
    fontSize="3xl"
    _hover={{
      textDecoration: "none",
      background: "linear-gradient(to top, white 1%, #FF8700 10%, white 89%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "Rubik Glitch"
    }}
  >
    {children}
  </Button>
);

const Navbar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position="sticky" top="21px" zIndex="1">
      <Flex
        as="nav"
        px={4}
        py={2}
        align="center"
        justify="center"
        minHeight="80px"
        borderRadius="192px"
        width="30rem"
        margin="auto"
        style={{
          background: 'linear-gradient(128deg, rgba(99, 99, 102, 0.2048) 100%, rgba(0, 0, 0, 0.064) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: 'inset 0px 0px 0px 1px #ffffff16',
        }}
      >
        <Box ml="auto" mr="auto">
          <Flex justifyContent="space-between">
            {isMobile ? (
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>WHAT</MenuItem>
                  <MenuItem>WHY</MenuItem>
                  <MenuItem>WHO</MenuItem>
                  <MenuItem>HOW</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <>
                <MenuItem>WHAT</MenuItem>
                <MenuItem>WHY</MenuItem>
                <MenuItem>WHO</MenuItem>
                <MenuItem>HOW</MenuItem>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;