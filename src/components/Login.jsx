import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  VStack,
} from "@chakra-ui/react";
import { env } from "../config.js";
import axios from "axios";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  let handleClick = () => {
    setShow(!show);
  };

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.email === "") {
        errors.email = "Please enter your email  ";
      }
      if (values.password === "") {
        errors.password = "Password should not be empty";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        if (values.email && values.password) {
          let loginData = await axios.post(`${env.api}/users/login`, values);
          if (loginData.status) {
            window.localStorage.setItem("app-token", loginData.data.token);
            window.localStorage.setItem("User", loginData.data.result.name);
            alert("signed in successfully");
            navigate("/chats");
          }
        }
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing="5px" color="black">
        <FormControl>
          <FormLabel color="black">
            Email
            <Input
              placeholder="Enter your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
            ></Input>
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel color="black">
            Password
            <InputGroup>
              <Input
                color="black"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
              />
              <InputRightElement>
                <Button
                  color="black"
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <span style={{ color: "red" }}>{formik.errors.password}</span>
          </FormLabel>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
        >
          Sign In
        </Button>
        <Button colorScheme="red" width="100%" style={{ marginTop: 15 }}>
          Guest Credentials
        </Button>
      </VStack>
    </form>
  );
};

export default Login;
