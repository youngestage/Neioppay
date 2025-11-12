"use client";

import React, { useState } from "react";
import { Box, Container, Heading, Text, Input, Button, Flex } from "@chakra-ui/react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <Box as="section" bg="brand.veryDark" py={{ base: "20", lg: "28" }}>
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }}>
        <Box textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontFamily="var(--font-poppins)"
            fontWeight="bold"
            color="white"
            mb="4"
            letterSpacing="-0.02em"
          >
            Sign up for our weekly newsletter
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="var(--font-inter)"
            color="white"
            mb="10"
            opacity="0.9"
          >
            for fun, finance and more
          </Text>
          <Box
            as="form"
            onSubmit={handleSubmit}
            maxW="md"
            mx="auto"
          >
            <Flex gap="4" direction={{ base: "column", sm: "row" }}>
              <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
                flex="1"
                px="6"
                py="6"
                rounded="lg"
                fontFamily="var(--font-inter)"
                color="brand.veryDark"
                bg="white"
                border="none"
                css={{
                  "&:focus": {
                    outline: "2px solid var(--chakra-colors-brand-light)",
                    outlineOffset: "0",
                  },
                }}
            />
              <Button
              type="submit"
                px="10"
                py="6"
                bg="brand.light"
                color="white"
                rounded="lg"
                fontFamily="var(--font-poppins)"
                fontWeight="semibold"
                fontSize="md"
                css={{
                  transition: "all 0.3s",
                  "&:hover": {
                    background: "var(--chakra-colors-brand-dark)",
                    transform: "translateY(-2px)",
                    boxShadow: "var(--chakra-shadows-lg)",
                  },
                }}
            >
              Sign Up
              </Button>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
