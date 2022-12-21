import {
  Container,
  Box,
  Text,
  Center,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Center
          fontSize="4xl"
          fontFamily="Mukta"
          fontWeight="bold"
          color="black"
        >
          MY-PAGER
        </Center>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
