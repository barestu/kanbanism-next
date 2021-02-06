import React from 'react';
import { Avatar, Box, Flex, Icon } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';

const Navbar = () => {
  return (
    <Box as="nav" className="navbar" mb="4">
      <Flex alignItems="center" justifyContent="flex-end">
        <Box as="button" ml="6">
          <Icon as={MdSearch} w="24px" h="24px" color="primary.700" />
        </Box>
        <Box as="button" ml="6">
          <Icon as={BiBell} w="24px" h="24px" color="primary.700" />
        </Box>
        <Box ml="6">
          <Avatar name="Jon Doe" size="xs" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
