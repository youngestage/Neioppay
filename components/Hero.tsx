"use client";
import React from "react";
import { Box, Container, Grid, Heading, Text, Link, Image, Flex, Stack } from "@chakra-ui/react";
import { CreativeDivider } from "./CreativeDivider";

export const Hero: React.FC = () => {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bg="white"
      color="brand.veryDark"
      py={{ base: "24", lg: "40" }}
      minH={{ base: "85vh", lg: "100vh" }}
      mb={{ base: "-16", lg: "-20" }}
    >
      <Container position="relative" maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }} zIndex="10">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: "12", lg: "16" }}
          alignItems="center"
        >
          <Box
            textAlign="left"
            animation="fadeInUp 0.8s ease-out"
            css={{
              "@keyframes fadeInUp": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
          {/* Main Headline */}
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontFamily="var(--font-poppins)"
              fontWeight="bold"
              mb="8"
              lineHeight="1.2"
              letterSpacing="-0.02em"
            >
              Your <Box as="span" color="brand.light">Money</Box> Partner
            </Heading>

          {/* Subheadline */}
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              mb="10"
              maxW="2xl"
              lineHeight="1.7"
            >
            Fast, secure, and seamless digital payment solutions that promote financial inclusion, transparency, and convenience across Africa and beyond.
            </Text>

          {/* Google Play Badge */}
            <Link
            href="https://play.google.com/store/apps/details?id=com.neiop.app"
            target="_blank"
            rel="noopener noreferrer"
              display="inline-block"
              mb="12"
            aria-label="Get it on Google Play"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-2px)" }}
          >
              <Image
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
                h="14"
                w="auto"
            />
            </Link>

          {/* Regulatory Badges */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              align="flex-start"
              justify="flex-start"
              gap="6"
            >
              <Flex
                align="center"
                gap="3"
                py="2"
                px="4"
                bg="white"
                border="1px solid"
                borderColor="gray.100"
                rounded="lg"
                transition="all 0.3s"
                _hover={{ borderColor: "brand.light", shadow: "sm" }}
              >
                <Text fontFamily="var(--font-inter)" fontSize="sm" color="brand.veryDark" fontWeight="medium">
                  Licensed by CBN
                </Text>
                <Image src="/cbn.svg" alt="CBN Logo" h="10" w="auto" />
              </Flex>
              <Flex
                align="center"
                gap="3"
                py="2"
                px="4"
                bg="white"
                border="1px solid"
                borderColor="gray.100"
                rounded="lg"
                transition="all 0.3s"
                _hover={{ borderColor: "brand.light", shadow: "sm" }}
              >
                <Text fontFamily="var(--font-inter)" fontSize="sm" color="brand.veryDark" fontWeight="medium">
                  Insured by NDIC
                </Text>
                <Image src="/ndic.png" alt="NDIC Logo" h="10" w="auto" />
              </Flex>
            </Stack>
          </Box>

          {/* Right-side image with subtle effect */}
          <Flex
            justify={{ base: "center", lg: "flex-end" }}
            position="relative"
            animation="fadeIn 1s ease-out 0.3s backwards"
            css={{
              "@keyframes fadeIn": {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            {/* Subtle glow effect */}
            <Box
              position="absolute"
              inset="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              pointerEvents="none"
              bgGradient="radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%)"
              filter="blur(60px)"
              w="120%"
              h="120%"
              m="-10%"
              zIndex="0"
            />
            {/* Phone image */}
            <Box position="relative" zIndex="10">
              <Image
                src="/Group%201.png"
                alt="Neiop app mockups"
                maxW="full"
                h="auto"
                w={{ base: "85%", md: "75%", lg: "95%" }}
                filter="drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))"
                transition="transform 0.5s ease"
                _hover={{ transform: "scale(1.02)" }}
              />
            </Box>
          </Flex>
        </Grid>
      </Container>

      {/* Creative Divider */}
      <Box position="absolute" bottom="0" left="0" right="0" zIndex="10">
        <CreativeDivider color="#3B82F6" />
      </Box>
    </Box>
  );
};
