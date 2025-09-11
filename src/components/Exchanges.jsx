import React, { useState } from 'react'
import {server} from "../index"
import axios from 'axios'
import { useEffect } from 'react'
import { Container, HStack, VStack, Image, Text, Heading } from '@chakra-ui/react'
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

  
  if (error) return <ErrorComponent message={"An error occured"}/>

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

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <VStack
      w="52"
      p="8"
      m="4"
      borderRadius="lg"
     // bg="rgba(255, 255, 255, 0.1)" // translucent white
     bg="rgba(158, 239, 241, 0.1)"
      color="white"                 // text color white for contrast
      backdropFilter="blur(10px)"   // frosted glass blur
      border="1px solid rgba(230, 194, 117, 0.2)" // subtle border
      transition="all 0.3s"
      _hover={{
        transform: "scale(1.08)",
        shadow: "0 4px 30px rgba(0,0,0,0.5)", // soft shadow on hover
      }}
    >
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
    </VStack>
  </a>
);


export default Exchanges