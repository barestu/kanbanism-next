import React, { useState } from 'react';
import NextLink from 'next/link';
import { Box, List, ListItem, Link, Text } from '@chakra-ui/react';
import {
  RiLayoutLine,
  RiBriefcase3Line,
  RiTeamLine,
  RiCalendarLine,
  RiSettings3Line,
} from 'react-icons/ri';

const Sidebar = () => {
  const [links] = useState([
    {
      name: 'Dashboard',
      href: '/',
      icon: RiLayoutLine,
      active: true,
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: RiBriefcase3Line,
      active: false,
    },
    {
      name: 'Team Members',
      href: '/team-members',
      icon: RiTeamLine,
      active: false,
    },
    {
      name: 'Calendar',
      href: '/calendar',
      icon: RiCalendarLine,
      active: false,
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: RiSettings3Line,
      active: false,
    },
  ]);

  return (
    <Box className="sidebar" border="red" borderWidth={1} pt="6">
      <List>
        {links.map(link => (
          <ListItem key={link.name} mb="6">
            <NextLink passHref href={link.href}>
              <Link>
                <Box
                  as={link.icon}
                  mb="1"
                  display="inline"
                  size="20"
                  color={link.active ? 'primary' : 'primary.400'}
                />
                <Text
                  as="span"
                  ml="3"
                  fontWeight="bold"
                  color={link.active ? 'primary' : 'primary.400'}
                >
                  {link.name}
                </Text>
              </Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
