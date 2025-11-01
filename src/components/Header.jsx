import React from "react";
import { Button, HStack, Spacer, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple , faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { useUser, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();

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
      <Button variant="unstyled" color="white">
        <Link to="/blogs"> Blogs </Link> 
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
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link to="/sign-in">
            <Button variant="unstyled" color="white">
              Login
            </Button>
          </Link>
        )}
       {user ? (
  <Link to="/history">
    <FontAwesomeIcon
      icon={faClockRotateLeft}
      style={{ fontWeight: "bold", fontSize: "20px", color: "white" }}
    />
  </Link>
) : null}



      </HStack>
    </Box>

    </HStack>
  );
};
export default Header;
