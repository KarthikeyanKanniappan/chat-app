import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [show, setShow] = useState(false);
  let handleClick = () => {
    setShow(!show);
  };
  return (
    <VStack spacing="5px">
      <FormControl>
        <FormLabel color="black">
          Name
          <Input placeholder="Enter your name"></Input>
        </FormLabel>
      </FormControl>
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
      <FormControl>
        <FormLabel color="black">
          Confirm Password
          <InputGroup>
            <Input color="black" placeholder="Enter your Confirm password" />
            <InputRightElement>
              <Button color="black" h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel color="black">
          Upload your Picture
          <Input placeholder="Add Image"></Input>
        </FormLabel>
      </FormControl>
      <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
