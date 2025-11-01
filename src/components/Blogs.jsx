import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  VStack,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";
import blog8 from "../assets/blog8.jpg";
import blog9 from "../assets/blog9.jpg";
import blog10 from "../assets/blog10.jpg";
import blog11 from "../assets/blog11.jpg";
import blog12 from "../assets/blog12.jpg";





const MotionBox = motion(Box);

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Cryptos to Watch This Month",
    description:
      "Discover which cryptocurrencies are gaining momentum and why traders are watching them closely.",
    image:
      blog1,
    tags: ["Bitcoin", "Ethereum", "Market Trends"],
  },
  {
    id: 2,
    title: "How to Read Crypto Charts Like a Pro",
    description:
      "Master technical analysis basics and learn how to interpret candlestick charts and indicators.",
    image:
      blog2,
    tags: ["Trading", "Analysis", "Beginners"],
  },
  {
    id: 3,
    title: "Understanding DeFi: The Future of Finance",
    description:
      "Learn what decentralized finance is, and how it’s reshaping the global financial system.",
    image:
      blog3,
    tags: ["DeFi", "Blockchain", "Innovation"],
  },
  {
    id: 4,
    title: "Top 5 Cryptos to Watch This Month",
    description:
      "Discover which cryptocurrencies are gaining momentum and why traders are watching them closely.",
    image:
      blog4,
    tags: ["Bitcoin", "Ethereum", "Market Trends"],
  },
  {
    id: 5,
    title: "How to Read Crypto Charts Like a Pro",
    description:
      "Master technical analysis basics and learn how to interpret candlestick charts and indicators.",
    image:
      blog5,
    tags: ["Trading", "Analysis", "Beginners"],
  },
  {
    id: 6,
    title: "Understanding DeFi: The Future of Finance",
    description:
      "Learn what decentralized finance is, and how it’s reshaping the global financial system.",
    image:
      blog6,
    tags: ["DeFi", "Blockchain", "Innovation"],
  },
  {
    id: 7,
    title: "Top 5 Cryptos to Watch This Month",
    description:
      "Discover which cryptocurrencies are gaining momentum and why traders are watching them closely.",
    image:
      blog7,
    tags: ["Bitcoin", "Ethereum", "Market Trends"],
  },
  {
    id: 8,
    title: "How to Read Crypto Charts Like a Pro",
    description:
      "Master technical analysis basics and learn how to interpret candlestick charts and indicators.",
    image:
      blog8,
    tags: ["Trading", "Analysis", "Beginners"],
  },
  {
    id: 9,
    title: "Understanding DeFi: The Future of Finance",
    description:
      "Learn what decentralized finance is, and how it’s reshaping the global financial system.",
    image:
      blog9,
    tags: ["DeFi", "Blockchain", "Innovation"],
  },
  {
    id: 10,
    title: "Top 5 Cryptos to Watch This Month",
    description:
      "Discover which cryptocurrencies are gaining momentum and why traders are watching them closely.",
    image:
      blog10,
    tags: ["Bitcoin", "Ethereum", "Market Trends"],
  },
  {
    id: 11,
    title: "How to Read Crypto Charts Like a Pro",
    description:
      "Master technical analysis basics and learn how to interpret candlestick charts and indicators.",
    image:
      blog11,
    tags: ["Trading", "Analysis", "Beginners"],
  },
  {
    id: 12,
    title: "Understanding DeFi: The Future of Finance",
    description:
      "Learn what decentralized finance is, and how it’s reshaping the global financial system.",
    image:
      blog12,
    tags: ["DeFi", "Blockchain", "Innovation"],
  },
];

const Blog = () => {
  return (
    <Box bg="blackAlpha.900" color="white" minH="100vh" py={12} px={8}>
      <VStack spacing={8}>
        <Heading size="2xl" textAlign="center">
          Xcrypto Insights & Blogs
        </Heading>
        <Text fontSize="lg" opacity={0.8} textAlign="center" maxW="600px">
          Stay ahead in the crypto world — explore expert insights, trading tips, and market updates.
        </Text>
      </VStack>

      <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={12}>
        {blogPosts.map((post) => (
          <MotionBox
            key={post.id}
            bg="gray.800"
            borderRadius="xl"
            overflow="hidden"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #00B5D8" }}
            transition="0.3s"
          >
            <Image src={post.image} alt={post.title} h="200px" w="100%" objectFit="cover" />
            <Box p={6}>
              <Heading size="md" mb={2}>
                {post.title}
              </Heading>
              <Text fontSize="sm" opacity={0.8} mb={4}>
                {post.description}
              </Text>
              <HStack spacing={2} mb={4}>
                {post.tags.map((tag, i) => (
                  <Tag key={i} colorScheme="cyan" variant="solid">
                    {tag}
                  </Tag>
                ))}
              </HStack>
              <Button
  as="a"
  href="https://youtu.be/sh7jXV3nwUo?si=YPypkNVfKbMjyYTY"
  target="_blank"
  rel="noopener noreferrer"
  colorScheme="cyan"
  size="sm"
  variant="outline"
>
  Read More
</Button>

            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Blog;
