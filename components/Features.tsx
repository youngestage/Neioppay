"use client";

import React from "react";
import { Box, Container, Heading, Text, Flex, SimpleGrid, Badge } from "@chakra-ui/react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
}

const features: Feature[] = [
  {
    title: "Lightning Fast Transactions",
    description:
      "Experience instant payments with our cutting-edge infrastructure designed to move money in seconds, not minutes.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    colSpan: 3,
    rowSpan: 2,
  },
  {
    title: "Bank-Level Security",
    description:
      "Your financial data is protected with encryption, hardware isolation, and multi-factor authentication licensed by CBN and insured by NDIC.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    colSpan: 3,
    rowSpan: 1,
  },
  {
    title: "Financial Inclusion",
    description:
      "Built for African markets with support for local payment channels, offline access, and multilingual experiences that keep people connected.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Innovative Technology",
    description:
      "AI-driven monitoring, intelligent routing, and modular APIs keep your finances seamless, scalable, and ready for whatever comes next.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    colSpan: 2,
    rowSpan: 2,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. We structure costs so you see exactly what you pay for and keep more of every transaction.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Seamless Integration",
    description:
      "Plug Neiop Pay into your stack using SDKs, partner integrations, and webhooks that make automation effortless.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    colSpan: 2,
    rowSpan: 1,
  },
];

export const Features: React.FC = () => {
  return (
    <Box
      as="section"
      bgGradient="linear(to-b, brand.50, white, brand.50)"
      py={{ base: "20", lg: "28" }}
      position="relative"
      overflow="hidden"
    >
      {/* Enhanced background elements with secondary color */}
      <Box position="absolute" inset="0" overflow="hidden" pointerEvents="none">
        <Box
          position="absolute"
          top="0"
          right="0"
          w="96"
          h="96"
          bg="brand.light"
          rounded="full"
          filter="blur(100px)"
          opacity="0.12"
        />
        <Box
          position="absolute"
          bottom="0"
          left="0"
          w="96"
          h="96"
          bg="brand.light"
          rounded="full"
          filter="blur(100px)"
          opacity="0.12"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="128"
          h="128"
          bg="brand.light"
          rounded="full"
          filter="blur(120px)"
          opacity="0.08"
        />
      </Box>

      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }} position="relative" zIndex="10">
        {/* Header Section */}
        <Box textAlign="center" mb="20">
          <Badge
            color="brand.light"
            bg="blue.50"
            fontFamily="var(--font-inter)"
            fontWeight="semibold"
            textTransform="uppercase"
            fontSize="xs"
            px="3"
            py="1"
            rounded="full"
            letterSpacing="wider"
            mb="6"
          >
            Why Choose Us
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontFamily="var(--font-poppins)"
            fontWeight="bold"
            color="brand.veryDark"
            mb="6"
            letterSpacing="-0.02em"
          >
            Reasons Our Community Chooses Neiop Pay
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
            We&apos;re not just another payment platform. We&apos;re your trusted partner in building a better financial future,
            powered by innovation, security, and a commitment to making banking accessible to everyone.
          </Text>
        </Box>

        {/* Features Grid - Compact Bento Layout */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap="6"
          mb="20"
          autoRows="minmax(200px, auto)"
        >
          {features.map((feature, index) => {
            // Create a more balanced layout
            const isLarge = index === 0 || index === 3; // First and fourth items span 2 columns
            return (
              <Box
                key={feature.title}
                position="relative"
                overflow="hidden"
                rounded="xl"
                border="1px solid"
                borderColor="blue.100"
                bg="white"
                p={{ base: "6", md: isLarge ? "8" : "6" }}
                transition="all 0.3s"
                gridColumn={{ base: "span 1", lg: isLarge ? "span 2" : "span 1" }}
                minH={{ base: "auto", md: "220px" }}
                maxH={{ base: "none", md: isLarge ? "280px" : "240px" }}
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "xl",
                  borderColor: "brand.light",
                }}
              >
                <Flex direction="column" h="full" justify="space-between">
                  <Box>
                    <Flex
                      w="12"
                      h="12"
                      rounded="lg"
                      align="center"
                      justify="center"
                      color="white"
                      bg="brand.light"
                      shadow="md"
                      mb="4"
                    >
                      {feature.icon}
                    </Flex>
                    <Heading
                      as="h3"
                      fontSize={{ base: "lg", md: isLarge ? "xl" : "lg" }}
                      fontFamily="var(--font-poppins)"
                      fontWeight="bold"
                      color="brand.veryDark"
                      mb="3"
                      lineHeight="1.3"
                    >
                      {feature.title}
                    </Heading>
                    <Text
                      fontSize={{ base: "sm", md: "base" }}
                      fontFamily="var(--font-inter)"
                      color="brand.veryDark"
                      opacity="0.8"
                      lineHeight="1.6"
                      overflow="hidden"
                      css={{
                        display: "-webkit-box",
                        WebkitLineClamp: isLarge ? 5 : 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {feature.description}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>

        {/* Trust Indicators */}
        <Box
          bg="white"
          backdropFilter="blur(8px)"
          rounded="2xl"
          p="10"
          border="1px solid"
          borderColor="blue.100"
          shadow="sm"
        >
          <Box textAlign="center" mb="8">
            <Heading
              as="h3"
              fontSize="2xl"
              fontFamily="var(--font-poppins)"
              fontWeight="bold"
              color="brand.veryDark"
              mb="3"
            >
              Trusted & Regulated
            </Heading>
            <Text fontSize="base" fontFamily="var(--font-inter)" color="brand.veryDark" opacity="0.7">
              Your funds are safe with us. We&apos;re fully licensed and insured.
            </Text>
          </Box>
          <Flex flexWrap="wrap" alignItems="center" justifyContent="center" gap="8">
            <Flex align="center" gap="3">
              <Flex w="12" h="12" rounded="full" bg="blue.50" align="center" justify="center">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--chakra-colors-brand-dark)" }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </Flex>
              <Box>
                <Text fontFamily="var(--font-poppins)" fontWeight="semibold" color="brand.veryDark">
                  Licensed by CBN
                </Text>
                <Text fontSize="sm" fontFamily="var(--font-inter)" color="brand.veryDark" opacity="0.6">
                  Central Bank of Nigeria
                </Text>
              </Box>
            </Flex>
            <Flex align="center" gap="3">
              <Flex w="12" h="12" rounded="full" bg="blue.50" align="center" justify="center">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--chakra-colors-brand-dark)" }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </Flex>
              <Box>
                <Text fontFamily="var(--font-poppins)" fontWeight="semibold" color="brand.veryDark">
                  Insured by NDIC
                </Text>
                <Text fontSize="sm" fontFamily="var(--font-inter)" color="brand.veryDark" opacity="0.6">
                  Deposit Insurance
                </Text>
              </Box>
            </Flex>
            <Flex align="center" gap="3">
              <Flex w="12" h="12" rounded="full" bg="blue.50" align="center" justify="center">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--chakra-colors-brand-dark)" }}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </Flex>
              <Box>
                <Text fontFamily="var(--font-poppins)" fontWeight="semibold" color="brand.veryDark">
                  256-bit Encryption
                </Text>
                <Text fontSize="sm" fontFamily="var(--font-inter)" color="brand.veryDark" opacity="0.6">
                  Bank-Level Security
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

