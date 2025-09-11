import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";
import { Avatar, Stack, VStack ,HStack ,Spacer} from "@chakra-ui/react";
import img1 from "../assets/self1.jpg"
import img2 from "../assets/self2.jpg"

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"100%"}>
      <motion.div
        style={{
          height: "45vh",
        }}
        animate={{
          translateY: "30px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-10"}
      >
        Xcrypto
      </Text>
     
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} justify={"center"} mt="250" >
       <VStack> <VStack w={"full"} >
            color={"white"}
          <Text     color={"white"}  fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            color={"white"}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>
<Spacer></Spacer>
        <HStack>
          <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={img1} color={"gray.300"}/>
          <Text>Our Founder</Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={img2}/>
          <Text>Our Co Founder</Text>
        </VStack>
</HStack></VStack>
      </Stack>
    </Box>
    
  );
};

export default Home;