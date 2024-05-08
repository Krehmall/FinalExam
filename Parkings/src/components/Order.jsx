import React from "react";
import { Square, Box, Flex, Text } from "@chakra-ui/react";

const Order = ({ order }) => {
  return (
    <Box>
      <Square p="4" bg="gray" size="170px" borderRadius="md">
        <Flex direction="column">
          <Text color="white">Car : {order.carType}</Text>
          <Text color="white">Number : {order.carNumber}</Text>
          <Text color="white">Cost : {order.cost}</Text>
        </Flex>
      </Square>
    </Box>
  );
};

export default Order;
