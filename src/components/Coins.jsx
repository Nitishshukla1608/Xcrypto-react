import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button,Text, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loading";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

 return (
  <Container
   
    bg="blackAlpha.900"  // dark background for entire container
    minH="100vh"

  maxW="100%"         // full screen height
    px={90}
  >
    {loading ? (
      <Loader />
    ) : (
      <>
        {/* Currency Selection */}
        <RadioGroup value={currency} onChange={setCurrency} p={4}>
          <HStack spacing={6}>
            {["INR", "USD", "EUR"].map((cur) => (
              <Radio
                key={cur}
                value={cur.toLowerCase()}
                size="lg"
                colorScheme="yellow"  // gold selection
                bg="white"             // card color white
                borderRadius="md"
                px={1}
                py={3}
                border="1px solid"
                borderColor="gray.300"
                _hover={{
                  bg: "gray.100",
                  transform: "scale(1.09)",
                }}
              >
                <Text color="white" fontWeight="semibold">
                  {cur}
                </Text>
              </Radio>
            ))}
          </HStack>
        </RadioGroup>

        {/* Coins Grid */}
        <HStack wrap={"wrap"} justifyContent={"space-evenly"} mt={4}>
          {coins.map((i) => (
            <CoinCard
              id={i.id}
              key={i.id}
              name={i.name}
              price={i.current_price}
              img={i.image}
              symbol={i.symbol}
              currencySymbol={currencySymbol}
              bg="white"          // make card background white
              color="black"       // text color black for contrast
            />
          ))}
        </HStack>

        {/* Pagination Buttons */}
        <HStack w={"full"} overflowX={"auto"} p={4} mt={6}>
          {btns.map((item, index) => (
            <Button
              key={index}
              bgColor={"blackAlpha.900"}
              color={"white"}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </>
    )}
  </Container>
);

};

export default Coins;