import { Button, Container, Flex, Square, Text } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/NavBar";
import { storageService } from "../services/storageService";
import { useNavigate } from "react-router-dom";

const ActiveParkingPage = () => {
  const navigate = useNavigate();
  const { username, carNumber, carType, password } = storageService.getLoggedInUser();
  const city = storageService.getCurrectCity();
  const costs = { TelAviv: 150, Netanya: 100, Rehovot: 50 };

  const handleOrder = (e) => {
    e.preventDefault();
    const parking = {
      id: Math.random().toString(),
      carType,
      carNumber,
      cost: costs[city],
      city,
    };
    storageService.updateHistory(parking);
    navigate("/history");
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/choose-parking");
  };

  return (
    <>
      <Container maxWidth="xl" bg="gray.100" p={4} my={2} borderRadius="md" shadow="md">
        <Flex justify="space-between">
          <NavBar />
          <Flex wrap="wrap" alignItems="center" gap="4" justify="center">
            <Square p="4" bg="gray" size="300px" borderRadius="md">
              <Flex direction="column">
                <Text color="white">Car:{carType}</Text>
                <Text color="white">Number:{carNumber}</Text>
                <Text color="white">City:{city}</Text>
                <Text color="white">Cost:{costs[city]}</Text>
                <Button maxW="150px" mt="10px" colorScheme="blackAlpha" onClick={handleOrder}>
                  Pay
                </Button>
                <Button maxW="150px" mt="10px" colorScheme="blackAlpha" onClick={handleClick}>
                  Close
                </Button>
              </Flex>
            </Square>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default ActiveParkingPage;
