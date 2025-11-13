"use client";

import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutUs: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Box
      as="section"
      bgGradient="linear(to-b, white, brand.50)"
      py={{ base: "20", lg: "28" }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box position="absolute" inset="0" overflow="hidden" pointerEvents="none">
        <Box
          position="absolute"
          top="10%"
          right="10%"
          w="64"
          h="64"
          bg="brand.light"
          rounded="full"
          filter="blur(60px)"
          opacity="0.1"
          css={{
            animation: "blob 8s ease-in-out infinite",
          }}
        />
        <Box
          position="absolute"
          bottom="10%"
          left="10%"
          w="64"
          h="64"
          bg="brand.light"
          rounded="full"
          filter="blur(60px)"
          opacity="0.1"
          css={{
            animation: "blob 8s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
      </Box>
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }} position="relative" zIndex="10">
        <Box
          ref={ref}
          textAlign="center"
          opacity={isVisible ? 1 : 0}
          transform={isVisible ? "translateY(0)" : "translateY(30px)"}
          transition="all 0.8s ease-out"
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontFamily="var(--font-poppins)"
            fontWeight="bold"
            color="brand.veryDark"
            mb="8"
            letterSpacing="-0.02em"
          >
            About Us
          </Heading>
          <Box maxW="4xl" mx="auto" textAlign="left">
            <Text
              fontSize={{ base: "base", md: "lg", lg: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              mb="6"
              lineHeight="1.8"
            >
              Neiop pay is a financial services provider committed to providing customers with unparalleled access to smart, personalized, and convenient banking experiences.
            </Text>
            <Text
              fontSize={{ base: "base", md: "lg", lg: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              mb="6"
              lineHeight="1.8"
            >
              As a licensed financial services provider under the Central Bank of Nigeria, we understand that financial solutions should be consistent, reliable, and tailored to meet individual needs.
            </Text>
            <Text
              fontSize={{ base: "base", md: "lg", lg: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              mb="6"
              lineHeight="1.8"
            >
              That&apos;s why we have adopted an agile business model that is designed to drive transformation and ensure an unforgettable experience for our customers.
            </Text>
            <Text
              fontSize={{ base: "base", md: "lg", lg: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              mb="6"
              lineHeight="1.8"
            >
              Our team of experienced financial advisors is dedicated to helping you achieve your financial goals, whether it&apos;s saving for the future, investing in your business, or securing your assets.
            </Text>
            <Text
              fontSize={{ base: "base", md: "lg", lg: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              lineHeight="1.8"
            >
              Our impressive portfolio of services includes Digital Banking, e-Payment Systems and Platforms, Loan, Value-Added Services (VAS), and Digital Solutions.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

