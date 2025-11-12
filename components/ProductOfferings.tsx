"use client";

import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProductOfferings: React.FC = () => {
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
            animationDelay: "0s",
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
            transition="all 0.8s ease-out 0.2s"
            style={{
              opacity: isVisible ? 0.8 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Connecting people, businesses, and institutions through innovative technology — making everyday transactions simple, trusted, and accessible to everyone.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
