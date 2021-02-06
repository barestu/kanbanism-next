import React from 'react';
import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import Header from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Board from './Board';

const Home = () => {
  return (
    <Center
      bgImage="url('/images/bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      overflow="hidden"
      h="100vh"
      p={4}
    >
      <Box bg="#ffffffdd" boxShadow="lg" borderRadius="xl" p={8} h="95%" w="95%">
        <Header />
        <Grid templateColumns="repeat(5, 1fr)" gap={4} h="95%">
          <GridItem colSpan={1}>
            <Sidebar />
          </GridItem>

          <GridItem colSpan={4} w="100%">
            <Board />
          </GridItem>
        </Grid>
      </Box>
    </Center>
  );
};

export default Home;
