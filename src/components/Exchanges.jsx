import React, { useState } from 'react'
import {server} from "../index"
import axios from 'axios'
import { useEffect } from 'react'
import { Container, HStack, VStack, Image, Text, Heading, Spinner, Box } from '@chakra-ui/react'
import Loading from "../components/Loading"
import ErrorComponent from './ErrorComponent'

const Exchanges = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    const fetchExchanges = async ()=> {
     try {
      const {data} = await axios.get(`${server}/exchanges`);
      setExchange(data);
      setLoading(false);
     } catch (error) {
      setError(error);
      setLoading(false);
     }
    }
    fetchExchanges();
  }, [])

  
  if (error) return <ErrorComponent message={"An error occured while fetching exchanges"}/>

  return (
  <Container
  w="100%"
  minH="100vh"
  bgColor="blackAlpha.900"
  maxW="100%"
  px={90}
>
  {loading ? (
    <Loading />
  ) : (
    <HStack wrap="wrap" justifyContent="space-evenly">
      {exchange.map((i) => (
        <ExchangeCard
          key={i.id}
          name={i.name}
          img={i.image}
          rank={i.trust_score_rank}
          url={i.url}
        />
      ))}
    </HStack>
  )}
</Container>

  );
};

const ExchangeCard = ({ name, img, rank, url }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Add a small delay to show the loading state
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsLoading(false);
    }, 1500); // 1.5 second delay
  };

  return (
    <VStack
      w="52"
      p="8"
      m="4"
      borderRadius="lg"
      bg="rgba(158, 239, 241, 0.1)"
      color="white"
      backdropFilter="blur(10px)"
      border="1px solid rgba(230, 194, 117, 0.2)"
      transition="all 0.3s"
      cursor="pointer"
      onClick={handleClick}
      _hover={{
        transform: "scale(1.08)",
        shadow: "0 4px 30px rgba(0,0,0,0.5)",
      }}
      position="relative"
    >
      {isLoading ? (
        <Box transform="scale(0.95)">
          <Spinner size="lg" color="white" />
        </Box>
      ) : (
        <>
          <Image
            src={img}
            w="10"
            h="10"
            objectFit="contain"
            alt={name}
          />
          <Heading size="md" noOfLines={1}>
            {rank}
          </Heading>
          <Text noOfLines={1}>{name}</Text>
        </>
      )}
    </VStack>
  );
};


export default Exchanges