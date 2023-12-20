import { Box, Button, Flex, Image, useBreakpointValue, Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import React from "react";
import Logo from "../assets/Transparent Logo.png";

const MenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Button variant="link" color="#FF8700" mr={2}>{children}</Button>
);

const Navbar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex as="nav" bg="black" px={4} py={2} align="center">
      <Image src={Logo} alt="Logo" boxSize="50px" margin="8px" style={{ filter: 'drop-shadow(0px 0px 10px white)' }} />
  <Box ml="auto">
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>About</MenuItem>
              <MenuItem>Portfolio</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <MenuItem>About</MenuItem>
            <MenuItem>Portfolio</MenuItem>
            <MenuItem>Contact</MenuItem>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;