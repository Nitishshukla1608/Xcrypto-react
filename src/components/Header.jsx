import React from "react";
import { Button, HStack, Spacer, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../AuthContext";  // adjust path if needed


const Header = () => {

  const { isAuthenticated, user } = useAuth();

  return (
    <HStack p="4" shadow="base" bgColor="blackAlpha.900" spacing="6">
      <Button variant="unstyled" color="white">
        <Link to="/home"> Home</Link>
      </Button>
      <Button variant="unstyled" color="white">
        <Link to="/exchanges"> Exchanges </Link>
      </Button>
      <Button variant="unstyled" color="white">
        <Link to="/coins"> Coins </Link>
      </Button>
      <Spacer />
      <Spacer />
          <Box pr="6">
      <HStack spacing={6}> {/* spacing adds space between icons */}
        <Link to="/InsightsPage">
          <FontAwesomeIcon
            icon={faChartSimple}
            style={{ color: "white", opacity: 0.8 }} // opacity makes it look thinner
            size="lg"
          />
        
        </Link>
        {isAuthenticated ? (
<Link to="/profilePage"> <FontAwesomeIcon icon={faUser} style={{fontWeight: "bold", fontSize: "20px" ,color:"white" ,opacity:"5"}}/>
</Link>
) : (
  <Link to="authForm">
    <Button variant="unstyled" color="white">
      Login
    </Button>
  </Link>
)}

      </HStack>
    </Box>

    </HStack>
  );
};
export default Header;
