import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/NavBar";
import Order from "../components/Order";
import { storageService } from "../services/storageService";

const HistoryPage = () => {
  const history = storageService.getHistory();
  console.log(history);

  return (
    <>
      <Container maxWidth="xl" bg="gray.100" p={4} my={2} borderRadius="md" shadow="md">
        <Flex justify="space-between">
          <NavBar />
          <Flex wrap="wrap" alignItems="center" gap="4" justify="center">
            {history.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default HistoryPage;
