import { Button, Container, Flex, Heading, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { storageService } from "../services/storageService";
import { useNavigate } from "react-router-dom";

const ChooseParkingPage = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("TelAviv");
  const user = storageService.getLoggedInUser();
  const handleSelect = (e) => {
    const value = e.target.value;
    setCity(value);
  };
  const handleParking = (e) => {
    e.preventDefault();
    storageService.saveCurrectCity(city);
    navigate("/active-parking");
  };

  return (
    <>
      <Container maxWidth="xl" bg="gray.100" p={4} my={2} borderRadius="md" shadow="md">
        <Flex justify="space-between">
          <NavBar />
          <Flex direction="column" wrap="wrap" alignItems="center" gap="4" justify="center">
            <Select size="md" bg="white.900" onChange={handleSelect}>
              <option value="TelAviv">Tel Aviv</option>
              <option value="Netanya">Netanya </option>
              <option value="Rehovot">Rehovot</option>
            </Select>
            <Text>Car number:</Text>
            <Heading size="sm">{user.carNumber}</Heading>
            <Button maxW="150px" mt="10px" colorScheme="blackAlpha" onClick={handleParking}>
              Start Parking
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default ChooseParkingPage;
