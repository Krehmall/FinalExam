import React, { useContext, useRef, useState } from "react";
import { Button, Container, Flex, Input, Alert, AlertIcon, AlertTitle, Link, Text, Center } from "@chakra-ui/react";
import { CheckIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { userService } from "../services/userService";

const LoginPage = () => {
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const [errorText, setErrorText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    if (!password.trim() || !username.trim()) {
      setErrorText("Some inputs are empty!");
    } else {
      const isUserExist = userService.login(username, password);
      if (!isUserExist) {
        setErrorText("Wrong password or username!");
      } else {
        navigate("/choose-parking");
      }
    }
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <>
      <Container maxW="md" bg="gray.100" p={4} my={2} borderRadius="md" shadow="md" mt="40px">
        <form onSubmit={handleClick}>
          <Flex direction="column" gap="2">
            <Center>
              <Text text-align="center">Username</Text>
            </Center>
            <Input bg="white.900" type="text" ref={usernameRef} placeholder="Enter username..." size="md" mr={2} />
            <Center>
              <Text text-align="center">Password</Text>
            </Center>
            <Input bg="white.900" type="password" ref={passwordRef} placeholder="Enter password..." size="md" mr={2} />
            <Flex justifyContent="space-around">
              <Button mt="10px" leftIcon={<CheckIcon />} type="submit" colorScheme="blackAlpha">
                SignIn
              </Button>
              <Button mt="10px" leftIcon={<SmallAddIcon />} colorScheme="blackAlpha" onClick={handleSignUp}>
                SignUp
              </Button>
            </Flex>
          </Flex>
        </form>
        {errorText ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>{errorText}</AlertTitle>
          </Alert>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default LoginPage;
