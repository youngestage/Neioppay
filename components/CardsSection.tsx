"use client";
import React from "react";
import NextLink from "next/link";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";

export const CardsSection: React.FC = () => {
  return (
    <Box
      as="section"
      bg="brand.veryDark"
      py={{ base: "20", lg: "28" }}
      mt={{ base: "-16", lg: "-20" }}
    >
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }}>
        <Box textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontFamily="var(--font-poppins)"
            fontWeight="bold"
            color="white"
            mb="6"
            letterSpacing="-0.02em"
          >
            Pay With Our Cards
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="var(--font-inter)"
            color="white"
            opacity="0.9"
            maxW="2xl"
            mx="auto"
            mb="12"
            lineHeight="1.7"
          >
            Simple, trusted, and accessible payments. Use your card for effortless online shopping and secure in-store transactions across Africa and beyond.
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            mb="12"
            animation="fadeInUp 0.8s ease-out"
            css={{
              "@keyframes fadeInUp": {
                from: { opacity: 0, transform: "translateY(30px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <Box
              maxW="xl"
              w="full"
              overflow="hidden"
              rounded="2xl"
              shadow="2xl"
              css={{
                transition: "all 0.4s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "var(--chakra-shadows-dark-lg)",
                },
              }}
            >
              <Image
                src="/WhatsApp Image 2025-11-10 at 09.53.09 (1).jpeg"
              alt="Neiop Pay Credit Card"
                w="full"
                h="auto"
                objectFit="cover"
            />
            </Box>
          </Box>
          <NextLink href="#personal-account" passHref legacyBehavior>
            <Box
              as="a"
              display="inline-block"
              px="10"
              py="4"
              bg="brand.dark"
              color="white"
              rounded="lg"
              fontFamily="var(--font-poppins)"
              fontWeight="semibold"
              fontSize="md"
              css={{
                transition: "all 0.3s",
                textDecoration: "none",
                "&:hover": {
                  background: "var(--chakra-colors-brand-light)",
                  transform: "translateY(-2px)",
                  boxShadow: "var(--chakra-shadows-lg)",
                },
              }}
          >
            Get A Personal Account
            </Box>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};
