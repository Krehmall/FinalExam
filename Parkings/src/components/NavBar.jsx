import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";
import { userService } from "../services/userService";

const NavBar = () => {
  const navigate = useNavigate();

  const navigateParking = (e) => {
    e.preventDefault();
    navigate("/active-parking");
  };
  const navigateHistory = (e) => {
    e.preventDefault();
    navigate("/history");
  };
  const navigateLogin = (e) => {
    e.preventDefault();
    userService.logout();
    navigate("/");
  };
  const navigateChooseParking = (e) => {
    e.preventDefault();
    navigate("/choose-parking");
  };
  return (
    <Flex direction="column" minWidth="150px" alignItems="center" gap="5" pr="5">
      <Button minWidth="150px" colorScheme="blackAlpha" onClick={navigateParking}>
        Active Parking
      </Button>
      <Button minWidth="150px" colorScheme="blackAlpha" onClick={navigateChooseParking}>
        Parking
      </Button>
      <Button minWidth="150px" colorScheme="blackAlpha" onClick={navigateHistory}>
        History
      </Button>
      <Button minWidth="150px" colorScheme="blackAlpha" onClick={navigateLogin}>
        Exit
      </Button>
    </Flex>
  );
};

export default NavBar;
