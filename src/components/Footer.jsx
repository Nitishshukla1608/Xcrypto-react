import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faBolt,
  faCoins,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <Box bg="gray.900" color="gray.300" py={10} px={5}>
      <Container maxW="7xl">
        {/* Highlights Section */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} mb={8}>
          <VStack align="start" spacing={3}>
            <FontAwesomeIcon icon={faBolt} size="lg" style={{ color: "#fff" }} />
            <Text fontWeight="bold">Lightning Fast</Text>
            <Text fontSize="sm">
              Experience instant transactions with our optimized blockchain
              network.
            </Text>
          </VStack>

          <VStack align="start" spacing={3}>
            <FontAwesomeIcon
              icon={faShieldAlt}
              size="lg"
              style={{ color: "#fff" }}
            />
            <Text fontWeight="bold">Secure Platform</Text>
            <Text fontSize="sm">
              Multi-layered encryption and top-notch security protocols.
            </Text>
          </VStack>

          <VStack align="start" spacing={3}>
            <FontAwesomeIcon
              icon={faCoins}
              size="lg"
              style={{ color: "#fff" }}
            />
            <Text fontWeight="bold">Low Fees</Text>
            <Text fontSize="sm">
              Trade and transfer crypto at some of the lowest fees in the
              market.
            </Text>
          </VStack>

          <VStack align="start" spacing={3}>
            <FontAwesomeIcon icon={faLock} size="lg" style={{ color: "#fff" }} />
            <Text fontWeight="bold">Trust & Transparency</Text>
            <Text fontSize="sm">
              100% transparency in operations with community-first governance.
            </Text>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="gray.700" />

        {/* Footer Bottom */}
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          mt={6}
          spacing={4}
        >
          <Text fontSize="sm">
            © 2025  Xcrypto. All rights reserved.
          </Text>
          <Text fontSize="sm">📍 Bangalore, India</Text>
        </Stack>
      </Container>
    </Box>
  );
}
