import React, { useState, useEffect } from 'react';
import { server } from "../index";
import axios from 'axios';
import {
  Container,
  SimpleGrid,
  VStack,
  Image,
  Text,
  Heading,
  Spinner,
  Box
} from '@chakra-ui/react';
import Loading from "../components/Loading";
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchange(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error)
    return <ErrorComponent message={"An error occurred while fetching exchanges"} />;

  return (
    <Container
      maxW="100%"
      minH="100vh"
      bgColor="blackAlpha.900"
      py={10}
    >
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={8}
          justifyItems="center"
        >
          {exchange.map((i) => (
            <ExchangeCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsLoading(false);
    }, 1200);
  };

  return (
    <VStack
      w="56"
      p="8"
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
      textAlign="center"
    >
      {isLoading ? (
        <Box transform="scale(0.95)">
          <Spinner size="lg" color="white" />
        </Box>
      ) : (
        <>
          <Image
            src={img}
            w="12"
            h="12"
            objectFit="contain"
            alt={name}
            mb="3"
          />
          <Heading size="md" noOfLines={1} mb="1">
            #{rank}
          </Heading>
          <Text noOfLines={1}>{name}</Text>
        </>
      )}
    </VStack>
  );
};

export default Exchanges;
