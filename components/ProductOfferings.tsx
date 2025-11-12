import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export const ProductOfferings: React.FC = () => {
  return (
    <Box as="section" bg="white" py={{ base: "20", lg: "28" }}>
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }}>
        <Box textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontFamily="var(--font-poppins)"
            fontWeight="bold"
            color="brand.veryDark"
            mb="8"
            maxW="4xl"
            mx="auto"
            lineHeight="1.3"
            letterSpacing="-0.02em"
          >
            Explore the Possibilities of a Financial Partnership With Our Exceptional Product Offerings
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="var(--font-inter)"
            color="brand.veryDark"
            opacity="0.8"
            maxW="3xl"
            mx="auto"
            lineHeight="1.8"
          >
            Connecting people, businesses, and institutions through innovative technology — making everyday transactions simple, trusted, and accessible to everyone.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
