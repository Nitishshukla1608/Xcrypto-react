import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCoins,
  faBolt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Sample crypto trend data
const data = [
  { day: "Mon", price: 42000 },
  { day: "Tue", price: 43500 },
  { day: "Wed", price: 42800 },
  { day: "Thu", price: 44000 },
  { day: "Fri", price: 45200 },
  { day: "Sat", price: 44750 },
  { day: "Sun", price: 46000 },
];

export default function InsightsPage() {
  return (
    <Box bg="blackAlpha.900" color="gray.200" minH="100vh" py={10}>
      <Container maxW="7xl">
        {/* Header */}
        <Stack spacing={4} textAlign="center" mb={10}>
          <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }}>
            Market Insights
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.400">
            Stay updated with the latest trends, stats, and highlights from the
            crypto world.
          </Text>
        </Stack>

        {/* Chart Section */}
        <Box bg="gray.800" p={6} rounded="xl" shadow="md" mb={12}>
          <Text fontWeight="bold" mb={4}>
            Bitcoin Weekly Price Trend
          </Text>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="day" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#00FFAB"
                strokeWidth={2}
                dot={{ r: 4, fill: "#00FFAB" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Highlights Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={12}>
          <VStack
            bg="gray.800"
            p={6}
            rounded="xl"
            shadow="md"
            align="start"
            spacing={3}
          >
            <FontAwesomeIcon
              icon={faChartLine}
              size="lg"
              style={{ color: "#00FFAB" }}
            />
            <Text fontWeight="bold" fontSize="lg">
              Bitcoin Trends
            </Text>
            <Text fontSize="sm" color="gray.400">
              BTC shows steady growth of 12% this week with higher adoption.
            </Text>
          </VStack>

          <VStack
            bg="gray.800"
            p={6}
            rounded="xl"
            shadow="md"
            align="start"
            spacing={3}
          >
            <FontAwesomeIcon
              icon={faCoins}
              size="lg"
              style={{ color: "#FFD700" }}
            />
            <Text fontWeight="bold" fontSize="lg">
              Altcoin Surge
            </Text>
            <Text fontSize="sm" color="gray.400">
              ETH & SOL show 20%+ rise in daily trading volumes.
            </Text>
          </VStack>

          <VStack
            bg="gray.800"
            p={6}
            rounded="xl"
            shadow="md"
            align="start"
            spacing={3}
          >
            <FontAwesomeIcon
              icon={faBolt}
              size="lg"
              style={{ color: "#00BFFF" }}
            />
            <Text fontWeight="bold" fontSize="lg">
              Lightning Fast Payments
            </Text>
            <Text fontSize="sm" color="gray.400">
              Layer-2 solutions enable instant payments at ultra-low fees.
            </Text>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="gray.700" />

        {/* Bottom Section */}
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          mt={10}
          spacing={6}
        >
          <Text fontSize="sm" color="gray.500">
            © 2025 CryptoX Insights | Bangalore, India
          </Text>
          <HStack spacing={6} color="gray.400">
            <FontAwesomeIcon icon={faShieldAlt} />
            <Text fontSize="sm">Trusted & Secure</Text>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
