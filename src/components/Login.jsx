import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  VStack,
} from "@chakra-ui/react";
const Login = () => {
  const [show, setShow] = useState(false);
  let handleClick = () => {
    setShow(!show);
  };
  return (
    <VStack spacing="5px" color="black">
      <FormControl>
        <FormLabel color="black">
          Email
          <Input placeholder="Enter your Email"></Input>
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel color="black">
          Password
          <InputGroup>
            <Input color="black" placeholder="Enter your password" />
            <InputRightElement>
              <Button color="black" h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormLabel>
      </FormControl>
      <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}>
        Sign In
      </Button>
      <Button colorScheme="red" width="100%" style={{ marginTop: 15 }}>
        Guest Credentials
      </Button>
    </VStack>
  );
};

export default Login;
