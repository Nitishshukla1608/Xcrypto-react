import React, { useState } from "react";
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    SimpleGrid,
    Badge,
    Select,
    Divider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

const HistoryPage = () => {
    // Dummy data
    const allCoins = [
        {
            id: 1,
            name: "Bitcoin",
            symbol: "BTC",
            type: "watched",
            invested: false,
            price: "$65,000",
            change: "+2.5%",
        },
        {
            id: 2,
            name: "Ethereum",
            symbol: "ETH",
            type: "watched",
            invested: true,
            price: "$3,200",
            change: "+1.2%",
        },
        {
            id: 3,
            name: "Solana",
            symbol: "SOL",
            type: "watched",
            invested: false,
            price: "$150",
            change: "-0.8%",
        },
        {
            id: 4,
            name: "Cardano",
            symbol: "ADA",
            type: "watched",
            invested: true,
            price: "$0.45",
            change: "+5.6%",
        },
        {
            id: 5,
            name: "Bitcoin",
            symbol: "BTC",
            type: "watched",
            invested: false,
            price: "$65,000",
            change: "+9.5%",
        },
        {
            id: 6,
            name: "Ethereum",
            symbol: "ETH",
            type: "invested",
            invested: true,
            price: "$3,200",
            change: "+1.2%",
        },
        {
            id: 7,
            name: "Solana",
            symbol: "SOL",
            type: "invested",
            invested: false,
            price: "$150",
            change: "-3.8%",
        },
        {
            id: 8,
            name: "Cardano",
            symbol: "ADA",
            type: "invested",
            invested: true,
            price: "$0.45",
            change: "+3.3%",
        },
        {
            id: 9,
            name: "Bitcoin",
            symbol: "BTC",
            type: "invested",
            invested: false,
            price: "$65,000",
            change: "-1.6%",
        },
        {
            id: 10,
            name: "Ethereum",
            symbol: "ETH",
            type: "invested",
            invested: true,
            price: "$3,200",
            change: "+1.8%",
        },
        {
            id: 11,
            name: "Solana",
            symbol: "SOL",
            type: "invested",
            invested: false,
            price: "$150",
            change: "-0.9%",
        },
        {
            id: 12,
            name: "Cardano",
            symbol: "ADA",
            type: "invested",
            invested: true,
            price: "$0.45",
            change: "+0.4%",
        },
    ];

    const [filter, setFilter] = useState("all");

    const filteredCoins =
        filter === "all"
            ? allCoins
            : allCoins.filter((coin) => coin.type === filter);

    return (
        <Box
            bg="blackAlpha.900"
            color="gray.100"
            minH="100vh"
            py={10}
            px={{ base: 6, md: 20 }}
        >
            {/* Header */}
            <HStack spacing={4} mb={8} justify="center">
                <FontAwesomeIcon icon={faClockRotateLeft} size="2x" color="#63b3ed" />
                <Heading size="lg" textAlign="center" letterSpacing="wide">
                    History Dashboard
                </Heading>
            </HStack>

            {/* Filter Section */}
            <HStack justify="center" mb={6}>
                <Text fontSize="lg" color="gray.400">
                    Filter:
                </Text>
                <Select
                    width="200px"
                    bg="gray.800"
                    border="1px solid"
                    borderColor="gray.600"
                    color="white"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    _focus={{ borderColor: "cyan.400" }}
                    sx={{
                        option: {
                            backgroundColor: "black",
                            color: "white",
                        },
                    }}
                >
                    <option value="all">All Coins</option>
                    <option value="watched">Watched Coins</option>
                    <option value="invested">Invested Coins</option>
                </Select>


            </HStack>

            <Divider borderColor="gray.700" mb={8} />

            {/* Coin Cards */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
                {filteredCoins.map((coin) => (
                    <Box
                        key={coin.id}
                        bg="gray.800"
                        p={6}
                        borderRadius="xl"
                        boxShadow="lg"
                        _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
                    >
                        <Heading size="md" mb={2}>
                            {coin.name} ({coin.symbol})
                        </Heading>
                        <Badge
                            colorScheme={coin.invested ? "green" : "blue"}
                            mb={2}
                            px={2}
                            py={1}
                            borderRadius="md"
                        >
                            {coin.invested ? "Invested" : "Watched"}
                        </Badge>
                        <Text fontSize="lg" color="cyan.300">
                            Price: {coin.price}
                        </Text>
                        <Text fontSize="sm" color={coin.change.startsWith("+") ? "green.400" : "red.400"}>
                            {coin.change}
                        </Text>

                        <Button
                            mt={4}
                            colorScheme="cyan"
                            variant="outline"
                            size="sm"
                            width="full"
                            _hover={{ bg: "cyan.600", color: "white" }}
                        >
                            View Details
                        </Button>
                    </Box>
                ))}
            </SimpleGrid>

            {/* Footer */}
            <VStack mt={10} spacing={2}>
                <Text fontSize="sm" color="gray.500">
                    Last updated: {new Date().toLocaleDateString()}
                </Text>
                <Text fontSize="xs" color="gray.600">
                    © {new Date().getFullYear()} CryptoX — All Rights Reserved.
                </Text>
            </VStack>
        </Box>
    );
};

export default HistoryPage;
