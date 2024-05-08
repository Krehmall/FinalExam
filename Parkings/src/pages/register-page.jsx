import React, { useContext, useRef, useState } from "react";
import { Button, Container, Flex, Input, Alert, AlertIcon, AlertTitle, Link, Text, Center } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/userService";

const RegisterPage = () => {
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const carNumberRef = useRef(null);
  const carTypeRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    const carNumber = carNumberRef.current.value;
    const carType = carTypeRef.current.value;
    let hasCapitalLetter = false;
    let hasSymbol = false;
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
      if (char >= "A" && char <= "Z") hasCapitalLetter = true;
      if (symbols.includes(char)) hasSymbol = true;
    }
    if (!password.trim() || !carNumber.trim() || !carType.trim() || !username.trim()) {
      setErrorText("Some inputs are empty!");
    } else if (username.length < 4 || username.length > 8) {
      setErrorText("Username must be between 4 to 8 characters!");
    } else if (password.length < 4 || password.length > 8) {
      setErrorText("Password must be between 4 to 8 characters!");
    } else if (!hasCapitalLetter || !hasSymbol) {
      setErrorText("Password must include one capital letter and one symbol!");
    } else {
      userService.createUser({ username, carNumber, carType, password });
      navigate("/");
    }
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
              <Text text-align="center">Car Number</Text>
            </Center>
            <Input bg="white.900" type="text" ref={carNumberRef} placeholder="Enter car number..." size="md" mr={2} />
            <Center>
              <Text text-align="center">Car Type</Text>
            </Center>
            <Input bg="white.900" type="text" ref={carTypeRef} placeholder="Enter car type..." size="md" mr={2} />
            <Center>
              <Text text-align="center">Password</Text>
            </Center>
            <Input bg="white.900" type="password" ref={passwordRef} placeholder="Enter password..." size="md" mr={2} />
            <Button mt="10px" leftIcon={<CheckIcon />} type="submit" colorScheme="blackAlpha">
              Register
            </Button>
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

export default RegisterPage;
