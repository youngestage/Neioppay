"use client";

import React from "react";
import { Box, Container, Grid, Heading, Text, Image, Stack, Badge, Link } from "@chakra-ui/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CustomerSupport: React.FC = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <Box
      as="section"
      bg="white"
      py={{ base: "20", lg: "28" }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box position="absolute" inset="0" overflow="hidden" pointerEvents="none">
        <Box
          position="absolute"
          top="20%"
          right="-10%"
          w="96"
          h="96"
          bg="brand.light"
          rounded="full"
          filter="blur(80px)"
          opacity="0.08"
          css={{
            animation: "blob 10s ease-in-out infinite",
          }}
        />
      </Box>
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }} position="relative" zIndex="10">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: "12", md: "16" }}
          alignItems="center"
        >
          <Box
            ref={textRef}
            opacity={textVisible ? 1 : 0}
            transform={textVisible ? "translateX(0)" : "translateX(-30px)"}
            transition="all 0.8s ease-out"
          >
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
              Customer Support
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
              We&apos;re Here to Help
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              mb="8"
              lineHeight="1.8"
            >
              Our dedicated customer support team is available to assist you with any questions or concerns. 
              Whether you need help with your account, have questions about our services, or require technical support, 
              we&apos;re just a call away.
            </Text>
            <Stack spacing="4">
              <Box>
                <Text
                  fontSize="sm"
                  fontFamily="var(--font-inter)"
                  fontWeight="semibold"
                  color="brand.veryDark"
                  mb="2"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  Contact Us
                </Text>
                <Link
                  href="tel:02013303300"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.light"
                  _hover={{
                    color: "brand.dark",
                    textDecoration: "underline",
                  }}
                  transition="all 0.3s"
                >
                  02013303300
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box
            ref={imageRef}
            opacity={imageVisible ? 1 : 0}
            transform={imageVisible ? "translateX(0)" : "translateX(30px)"}
            transition="all 0.8s ease-out"
          >
            <Box
              position="relative"
              rounded="2xl"
              overflow="hidden"
              shadow="xl"
              bg="brand.50"
              p="4"
            >
              <Image
                src="/PHOTO-2025-11-13-07-22-48.jpg"
                alt="Customer Support Representative"
                w="full"
                h="auto"
                objectFit="cover"
                rounded="xl"
              />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

