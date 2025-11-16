"use client";
import React from "react";
import NextLink from "next/link";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CardsSection: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();

  return (
    <Box
      as="section"
      bg="brand.veryDark"
      py={{ base: "20", lg: "28" }}
      mt={{ base: "-16", lg: "-20" }}
    >
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }}>
        <Box
          ref={headerRef}
          textAlign="center"
          opacity={headerVisible ? 1 : 0}
          transform={headerVisible ? "translateY(0)" : "translateY(30px)"}
          transition="all 0.8s ease-out"
        >
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
            transition="all 0.8s ease-out 0.2s"
            style={{
              opacity: headerVisible ? 0.9 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Simple, trusted, and accessible payments. Use your card for effortless online shopping and secure in-store transactions across Africa and beyond.
          </Text>
          <Box
            ref={imageRef}
            display="flex"
            justifyContent="center"
            mb="12"
            opacity={imageVisible ? 1 : 0}
            transform={imageVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)"}
            transition="all 0.8s ease-out 0.3s"
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
          <Box
            ref={buttonRef}
            opacity={buttonVisible ? 1 : 0}
            transform={buttonVisible ? "translateY(0)" : "translateY(20px)"}
            transition="all 0.8s ease-out 0.4s"
          >
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
        </Box>
      </Container>
    </Box>
  );
};
