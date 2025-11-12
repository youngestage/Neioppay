"use client";
import React from "react";
import NextLink from "next/link";
import { Box, Container, Grid, Heading, Text, Image, Stack, Badge } from "@chakra-ui/react";

export const PersonalBanking: React.FC = () => {
  return (
    <Box
      as="section"
      bgGradient="linear(to-b, brand.50, white)"
      py={{ base: "20", lg: "28" }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box position="absolute" inset="0" overflow="hidden" pointerEvents="none">
        <Box
          position="absolute"
          top="20%"
          left="-10%"
          w="96"
          h="96"
          bg="brand.light"
          rounded="full"
          filter="blur(80px)"
          opacity="0.08"
        />
      </Box>
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }} position="relative" zIndex="10">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: "12", md: "16" }}
          alignItems="center"
        >
          <Box>
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
              Personal Banking
            </Badge>
            <Heading
              as="h3"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontFamily="var(--font-poppins)"
              fontWeight="bold"
              color="brand.veryDark"
              mb="6"
              lineHeight="1.2"
              letterSpacing="-0.02em"
            >
              Pay Bills For Less Anytime
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              mb="10"
              lineHeight="1.7"
            >
              Fast, secure, and seamless bill payments that promote financial inclusion and convenience. Pay less and easily with Neiop Pay.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap="4">
              <NextLink
                href="https://play.google.com/store/apps/details?id=com.neiop.app"
                target="_blank"
                rel="noopener noreferrer"
                passHref
                legacyBehavior
              >
                <Box
                  as="a"
                  display="inline-block"
                  px="8"
                  py="4"
                  bg="brand.dark"
                  color="white"
                  rounded="lg"
                  fontFamily="var(--font-poppins)"
                  fontWeight="semibold"
                  fontSize="md"
                  textAlign="center"
                  css={{
                    transition: "all 0.3s",
                    textDecoration: "none",
                    "&:hover": {
                      background: "var(--chakra-colors-brand-light)",
                      transform: "translateY(-2px)",
                      boxShadow: "var(--chakra-shadows-md)",
                    },
                  }}
                >
                  Download App
                </Box>
              </NextLink>
              <NextLink
                href="https://play.google.com/store/apps/details?id=com.neiop.app"
                target="_blank"
                rel="noopener noreferrer"
                passHref
                legacyBehavior
              >
                <Box
                  as="a"
                  display="inline-block"
                  px="8"
                  py="4"
                  bg="white"
                  color="brand.dark"
                  border="2px solid"
                  borderColor="brand.dark"
                  rounded="lg"
                  fontFamily="var(--font-poppins)"
                  fontWeight="semibold"
                  fontSize="md"
                  textAlign="center"
                  css={{
                    transition: "all 0.3s",
                    textDecoration: "none",
                    "&:hover": {
                      background: "var(--chakra-colors-brand-light)",
                      color: "white",
                      borderColor: "var(--chakra-colors-brand-light)",
                      transform: "translateY(-2px)",
                      boxShadow: "var(--chakra-shadows-md)",
                    },
                  }}
                >
                  Learn More
                </Box>
              </NextLink>
            </Stack>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation="fadeIn 0.8s ease-out"
            css={{
              "@keyframes fadeIn": {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            <Box
              overflow="hidden"
              rounded="2xl"
              shadow="xl"
              maxW="full"
              transition="all 0.4s"
              _hover={{ transform: "scale(1.02)", shadow: "2xl" }}
            >
              <Image
                src="/WhatsApp Image 2025-11-10 at 09.53.09.jpeg"
                alt="Bills Payment App"
                w="full"
                h="auto"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

