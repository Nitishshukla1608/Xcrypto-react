import { Box, Image, Text,HStack, Stack, VStack, Avatar, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";
import img1 from "../assets/self1.jpg";
import img2 from "../assets/self2.jpg";
import img3 from "../assets/self3.jpg";
import img4 from "../assets/self4.jpg";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} minH={"100vh"}>
      {/* Floating Bitcoin Image */}
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

      {/* Title */}
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-10"}
      >
        Xcrypto
      </Text>

      {/* About Us Section */}
      <Stack
        direction={"column"}
        h={"full"}
        alignItems={"center"}
        justify={"center"}
        mt="200px"
        px={6}
      >
        {/* About Us Text */}
        <VStack w={"full"} spacing={6} textAlign="center" mb="200">
  {/* Title */}
  <Text color={"white"} fontWeight={"bold"} fontSize="3xl">
    About Us
  </Text>

  {/* Description */}
  <Text
    fontSize={"md"}
    letterSpacing={"widest"}
    color={"whiteAlpha.800"}
    maxW="600px"
  >
    We are the best crypto trading app in India, providing guidance at an affordable price. Our mission is to make crypto trading simple, safe, and accessible for everyone.
  </Text>

  {/* Features / Highlights */}
  <HStack spacing={10} wrap="wrap" justify="center" >
    <VStack spacing={2}>
     <Box
  as="a"
  href="https://chainspect.app/dashboard?utm_source=chatgpt.com"
  target="_blank"  // opens in a new tab
  bg="yellow.400"
  p={3}
  cursor={"pointer"}
  borderRadius="full"
  _hover={{ cursor: "pointer", bg: "yellow.500" }}
>
  🚀
</Box>

      <Text color="white" fontWeight="semibold">Fast Transactions</Text>
      <Text fontSize="sm" color="whiteAlpha.700" maxW="150px">
        Execute trades instantly with minimal delay.
      </Text>
    </VStack>

    <VStack spacing={2}>
       <Box
  as="a"
  href="https://chainspect.app/dashboard?utm_source=chatgpt.com"
  target="_blank"  // opens in a new tab
  bg="yellow.400"
  p={3}
  cursor={"pointer"}
  borderRadius="full"
  _hover={{ cursor: "pointer", bg: "yellow.500" }}
>
  🔒
</Box>
      
      <Text color="white" fontWeight="semibold">Secure Platform</Text>
      <Text fontSize="sm" color="whiteAlpha.700" maxW="150px">
        Advanced security measures to protect your assets.
      </Text>
    </VStack>

    <VStack spacing={2}>
            <Box
  as="a"
  href="https://chainspect.app/dashboard?utm_source=chatgpt.com"
  target="_blank"  // opens in a new tab
  bg="yellow.400"
  p={3}
  cursor={"pointer"}
  borderRadius="full"
  _hover={{ cursor: "pointer", bg: "yellow.500" }}
>
   💰
</Box>
     
      <Text color="white" fontWeight="semibold">Low Fees</Text>
      <Text fontSize="sm" color="whiteAlpha.700" maxW="150px">
        Enjoy trading with competitive and transparent fees.
      </Text>
    </VStack>

    <VStack spacing={2}>

              <Box
  as="a"
  href="https://chainspect.app/dashboard?utm_source=chatgpt.com"
  target="_blank"  // opens in a new tab
  bg="yellow.400"
  p={3}
  cursor={"pointer"}
  borderRadius="full"
  _hover={{ cursor: "pointer", bg: "yellow.500" }}
>
    📊
</Box>
     
      <Text color="white" fontWeight="semibold">Expert Insights</Text>
      <Text fontSize="sm" color="whiteAlpha.700" maxW="150px">
        Get guidance from experienced crypto traders.
      </Text>
    </VStack>
  </HStack>
</VStack>



<VStack w="full" spacing={28} py={16} >
  {/* Premium Section */}
  <VStack
    w="full"
    spacing={10}
    textAlign="center"
    py={16}
    borderRadius="30px"
    bg="blackAlpha.900"
    boxShadow="14px 10px 15px rgba(184, 158, 46, 0.3)"
  >
    <Text color="white" fontWeight="bold" fontSize="3xl">
      Premium Plans
    </Text>
    <Text fontSize="md" letterSpacing="widest" color="whiteAlpha.800" maxW="600px">
    Choose the perfect plan for your crypto trading journey. Get exclusive features and maximize your profits!
  </Text>



  <HStack spacing={6} wrap="wrap" justify="center" >
    {/* Silver Plan */}
    <VStack
      spacing={4}
      p={0}
      borderRadius="xl"
      bg="gray.700"
      w="72"
      boxShadow="blackAlpha.900"
      transition="all 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
    >
      <Text color="gray.300" fontWeight="bold" fontSize="xl">
        Silver
      </Text>
      <Text color="white" fontWeight="bold" fontSize="2xl">
        $9.99/mo
      </Text>
      <VStack spacing={2} align="start">
        <Text color="whiteAlpha.800">📈 Basic Market Insights</Text>
        <Text color="whiteAlpha.800">💱 Access to Limited Coins</Text>
        <Text color="whiteAlpha.800">🔔 Price Alerts</Text>
      </VStack>
      <Text mt={4} color="yellow.400" fontWeight="bold" cursor="pointer" mb={20}>
        Subscribe
      </Text>
    </VStack>

    {/* Gold Plan */}
    <VStack
      spacing={4}
      p={6}
      borderRadius="xl"
      bg="yellow.600"
      w="72"
      boxShadow="0 0 20px rgba(255,215,0,0.3)"
      transition="all 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "0 0 25px rgba(255,215,0,0.5)" }}
    >
      <Text color="white" fontWeight="bold" fontSize="xl">
        Gold
      </Text>
      <Text color="white" fontWeight="bold" fontSize="2xl">
        $19.99/mo
      </Text>
      <VStack spacing={2} align="start">
        <Text color="white">📈 Advanced Market Insights</Text>
        <Text color="white">💱 Access to All Coins</Text>
        <Text color="white">🔔 Custom Price Alerts</Text>
        <Text color="white">📊 Portfolio Tracking</Text>
      </VStack>
      <Text mt={4} color="black" fontWeight="bold" cursor="pointer">
        Subscribe
      </Text>
    </VStack>

    {/* Diamond Plan */}
    <VStack
      spacing={4}
      p={6}
      borderRadius="xl"
      bg="blue.500"
      w="72"
      boxShadow="0 0 20px rgba(173,216,230,0.3)"
      transition="all 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "0 0 25px rgba(173,216,230,0.5)" }}
    >
      <Text color="white" fontWeight="bold" fontSize="xl">
        Diamond
      </Text>
      <Text color="white" fontWeight="bold" fontSize="2xl">
        $49.99/mo
      </Text>
      <VStack spacing={2} align="start">
        <Text color="white">📈 Real-Time Market Analysis</Text>
        <Text color="white">💱 Access to All Coins & ICOs</Text>
        <Text color="white">🔔 Priority Price Alerts</Text>
        <Text color="white">📊 Portfolio + Advanced Analytics</Text>
        <Text color="white">🤝 Personal Trading Guidance</Text>
      </VStack>
      <Text mt={4} color="white" bg="blackAlpha.800" p={2} borderRadius="md" fontWeight="bold" cursor="pointer">
        Subscribe
      </Text>
    </VStack>
  </HStack>
  </VStack>


 <Text color={"white"} fontWeight={"bold"} fontSize="3xl" mb={"0"}>
    Our Members
  </Text>
  {/* Team Members */}
  <SimpleGrid
    columns={{ base: 1, md: 2 }}
    spacing={120}
    w="75%"
    justifyItems="center"
  >
           <HStack align="center" spacing={6}>
  {/* Avatar */}
  <Avatar boxSize="28" src={img1} />  {/* increased size */}

  {/* Texts: Role + Name + Bio */}
  <VStack align="start" spacing={1} maxW="400px">
    <VStack align="start" spacing={-0.5} maxW="400px"><Text color="white" fontWeight="semibold">
      Developer
    </Text>
    <Text color="yellow.500">Nitish Kumar Shukla</Text>
    </VStack>

    {/* Bio right under role/name */}
    <Text
      fontSize="sm"
      letterSpacing="widest"
      color="whiteAlpha.800"
    >
Full-stack developer building efficient, scalable web apps and turning ideas into functional digital solutions
    </Text>
  </VStack>
</HStack>





<HStack align="center" spacing={6}>
  {/* Avatar */}
  <Avatar boxSize="28" src={img2} />  {/* increased size */}

  {/* Texts: Role + Name + Bio */}
  <VStack align="start" spacing={1} maxW="400px">
    <VStack align="start" spacing={-0.5} maxW="400px"><Text color="white" fontWeight="semibold">
      API Handler
    </Text>
    <Text color="yellow.500">Om Jee Rai</Text>
    </VStack>

    {/* Bio right under role/name */}
    <Text
      fontSize="sm"
      letterSpacing="widest"
      color="whiteAlpha.800"
    >
      API handler creating efficient, reliable endpoints for seamless communication and smooth data exchange between applications.
    </Text>
  </VStack>
</HStack>






        <HStack align="center" spacing={6}>
  {/* Avatar */}
  <Avatar boxSize="28" src={img3} />  {/* increased size */}

  {/* Texts: Role + Name + Bio */}
  <VStack align="start" spacing={1} maxW="400px">
    <VStack align="start" spacing={-0.5} maxW="400px"><Text color="white" fontWeight="semibold">
     UI Designer
    </Text>
    <Text color="yellow.500">Pakhi Tyagi</Text>
    </VStack>

    {/* Bio right under role/name */}
    <Text
      fontSize="sm"
      letterSpacing="widest"
      color="whiteAlpha.800"
    >
    UI designer crafting intuitive, visually appealing interfaces that enhance user experience and bring ideas to life.
    </Text>
  </VStack>
</HStack>


          <HStack align="center" spacing={6}>
  {/* Avatar */}
  <Avatar boxSize="28" src={img4} />  {/* increased size */}

  {/* Texts: Role + Name + Bio */}
  <VStack align="start" spacing={1} maxW="400px">
    <VStack align="start" spacing={-0.5} maxW="400px"><Text color="white" fontWeight="semibold">
      Content writer
    </Text>
    <Text color="yellow.500">Palak Srivastav</Text>
    </VStack>

    {/* Bio right under role/name */}
    <Text
      fontSize="sm"
      letterSpacing="widest"
      color="whiteAlpha.800"
    >
 Content writer creating engaging, clear, and impactful content that connects with audiences and communicates ideas effectively.
    </Text>
  </VStack>
</HStack>

  </SimpleGrid>
</VStack>

      </Stack>
    </Box>
  );
};

export default Home;
