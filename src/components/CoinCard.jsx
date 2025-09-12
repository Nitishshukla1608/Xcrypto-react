import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
     color = {"white"}
    p={"8"}
    m ={"4"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
       border="1px solid rgba(230, 194, 117, 0.2)"
       bg="rgba(158, 239, 241, 0.1)"
      css={{
        "&:hover": {
          transform: "scale(1.08)",
        shadow: "0 4px 30px rgba(0,0,0,0.5)"
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    </VStack>
  </Link>
);

export default CoinCard;