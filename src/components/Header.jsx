import React from 'react'
import { Button, HStack ,Spacer ,Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    return (
       <HStack 
  p="4" 
  shadow="base" 
  bgColor="blackAlpha.900" 
  spacing="6"   
>
  <Button variant="unstyled" color="white">
    <Link to="/"> Home 
     </Link>
  </Button>
  <Button variant="unstyled" color="white">
    <Link to="/exchanges"> Exchanges </Link>
  </Button>
  <Button variant="unstyled" color="white">
    <Link to="/coins"> Coins </Link>
  </Button>
  <Spacer/>
<Spacer />
<Box pr="6">   

    <Link to="/authform"> <FontAwesomeIcon icon={faUser} style={{ color: "white" }} size="lg" /></Link>

</Box>
</HStack>
    )
}
export default Header






