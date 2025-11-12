"use client";

import React from "react";
import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const MissionVision: React.FC = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();

  return (
    <Box
      as="section"
      bgGradient="linear(to-b, white, brand.50)"
      pt={{ base: "20", lg: "28" }}
      pb="0"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box position="absolute" inset="0" overflow="hidden" pointerEvents="none">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="96"
          h="96"
          bg="brand.light"
          rounded="full"
          filter="blur(100px)"
          opacity="0.06"
          css={{
            animation: "blob 12s ease-in-out infinite",
          }}
        />
      </Box>
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }} pb={{ base: "20", lg: "28" }} position="relative" zIndex="10">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={{ base: "12", lg: "16" }}>
          {/* Mission Statement */}
          <Box
            ref={missionRef}
            textAlign={{ base: "center", md: "left" }}
            opacity={missionVisible ? 1 : 0}
            transform={missionVisible ? "translateY(0)" : "translateY(30px)"}
            transition="all 0.8s ease-out"
          >
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontFamily="var(--font-poppins)"
              fontWeight="bold"
              color="brand.veryDark"
              mb="6"
              letterSpacing="-0.02em"
            >
              Mission Statement
            </Heading>
            <Text
              fontSize={{ base: "base", md: "lg", lg: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              lineHeight="1.8"
            >
              To empower individuals and businesses with fast, secure, and seamless digital payment solutions that promote financial inclusion, transparency, and convenience across Africa and beyond.
            </Text>
          </Box>

          {/* Vision Statement */}
          <Box
            ref={visionRef}
            textAlign={{ base: "center", md: "left" }}
            opacity={visionVisible ? 1 : 0}
            transform={visionVisible ? "translateY(0)" : "translateY(30px)"}
            transition="all 0.8s ease-out 0.2s"
          >
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontFamily="var(--font-poppins)"
              fontWeight="bold"
              color="brand.veryDark"
              mb="6"
              letterSpacing="-0.02em"
            >
              Vision Statement
            </Heading>
            <Text
              fontSize={{ base: "base", md: "lg", lg: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              lineHeight="1.8"
            >
              To become a leading digital financial ecosystem that connects people, businesses, and institutions through innovative technology — making everyday transactions simple, trusted, and accessible to everyone.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
