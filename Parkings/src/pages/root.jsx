import { Container, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main className="main">
      <Container maxW="100%" py={5} bg="black" centerContent>
        <Heading size={"2xl"} color={"white"}>
          SV Parking
        </Heading>
      </Container>
      <div className="outlet">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
