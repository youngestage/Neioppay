"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Heading, Text, Image, Flex, IconButton, Badge } from "@chakra-ui/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface POSSlide {
  image: string;
  title: string;
  description: string;
}

const posSlides: POSSlide[] = [
  {
    image: "/WhatsApp Image 2025-11-14 at 21.56.09.jpeg",
    title: "Modern Payment Solutions",
    description: "Experience seamless transactions with our state-of-the-art POS terminals designed for businesses of all sizes.",
  },
  {
    image: "/WhatsApp Image 2025-11-14 at 21.56.09 (1).jpeg",
    title: "Secure Card Processing",
    description: "Accept payments securely with our advanced card readers that support chip, PIN, and contactless transactions.",
  },
  {
    image: "/WhatsApp Image 2025-11-14 at 21.56.09 (2).jpeg",
    title: "Easy-to-Use Interface",
    description: "Intuitive design and simple navigation make processing payments quick and effortless for your team.",
  },
  {
    image: "/WhatsApp Image 2025-11-14 at 21.56.10.jpeg",
    title: "Professional Transaction Management",
    description: "Complete payment infrastructure with receipt printing and transaction tracking for comprehensive business management.",
  },
];

export const POSCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + posSlides.length) % posSlides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posSlides.length);
  };

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
          left="-10%"
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
        <Box
          position="absolute"
          bottom="20%"
          right="-10%"
          w="96"
          h="96"
          bg="brand.light"
          rounded="full"
          filter="blur(80px)"
          opacity="0.08"
          css={{
            animation: "blob 10s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
      </Box>

      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }} position="relative" zIndex="10">
        <Box
          ref={ref}
          textAlign="center"
          mb="12"
          opacity={isVisible ? 1 : 0}
          transform={isVisible ? "translateY(0)" : "translateY(30px)"}
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
            POS Terminals
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
            Powerful Payment Terminals
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="var(--font-inter)"
            color="brand.veryDark"
            opacity="0.8"
            maxW="2xl"
            mx="auto"
            lineHeight="1.7"
          >
            Transform your business with our advanced POS terminal solutions designed for modern commerce.
          </Text>
        </Box>

        {/* Carousel Container */}
        <Box position="relative" maxW="6xl" mx="auto">
          {/* Main Carousel */}
          <Box
            position="relative"
            rounded="2xl"
            overflow="hidden"
            bg="white"
            shadow="2xl"
            border="1px solid"
            borderColor="blue.100"
            minH={{ base: "400px", md: "500px", lg: "600px" }}
          >
            {/* Slides */}
            {posSlides.map((slide, index) => (
              <Box
                key={index}
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                opacity={index === currentIndex ? 1 : 0}
                zIndex={index === currentIndex ? 10 : 1}
                transform={
                  index === currentIndex
                    ? "translateX(0) scale(1)"
                    : index < currentIndex
                    ? "translateX(-100%) scale(0.95)"
                    : "translateX(100%) scale(0.95)"
                }
                transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                pointerEvents={index === currentIndex ? "auto" : "none"}
              >
                <Flex
                  direction={{ base: "column", lg: "row" }}
                  h="full"
                  align="center"
                  justify="center"
                  gap={{ base: "8", lg: "12" }}
                  p={{ base: "8", md: "12", lg: "16" }}
                >
                  {/* Image */}
                  <Box
                    flex="1"
                    maxW={{ base: "full", lg: "50%" }}
                    w={{ base: "full", lg: "50%" }}
                    position="relative"
                    rounded="xl"
                    overflow="hidden"
                    bg="blue.50"
                    p="4"
                    shadow="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      w="full"
                      maxH={{ base: "300px", md: "400px", lg: "500px" }}
                      objectFit="contain"
                      rounded="lg"
                    />
                  </Box>

                  {/* Text Content */}
                  <Box
                    flex="1"
                    maxW={{ base: "full", lg: "50%" }}
                    w={{ base: "full", lg: "50%" }}
                    textAlign={{ base: "center", lg: "left" }}
                  >
                    <Heading
                      as="h3"
                      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                      fontFamily="var(--font-poppins)"
                      fontWeight="bold"
                      color="brand.veryDark"
                      mb="4"
                      lineHeight="1.2"
                    >
                      {slide.title}
                    </Heading>
                    <Text
                      fontSize={{ base: "base", md: "lg", lg: "xl" }}
                      fontFamily="var(--font-inter)"
                      color="brand.veryDark"
                      opacity="0.8"
                      lineHeight="1.8"
                    >
                      {slide.description}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}

            {/* Navigation Arrows */}
            <IconButton
              aria-label="Previous slide"
              position="absolute"
              left={{ base: "4", md: "6" }}
              top="50%"
              transform="translateY(-50%)"
              bg="white"
              color="brand.veryDark"
              rounded="full"
              w={{ base: "10", md: "12" }}
              h={{ base: "10", md: "12" }}
              shadow="lg"
              _hover={{
                bg: "brand.light",
                color: "white",
                transform: "translateY(-50%) scale(1.1)",
              }}
              transition="all 0.3s"
              onClick={goToPrevious}
              zIndex="20"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </IconButton>
            <IconButton
              aria-label="Next slide"
              position="absolute"
              right={{ base: "4", md: "6" }}
              top="50%"
              transform="translateY(-50%)"
              bg="white"
              color="brand.veryDark"
              rounded="full"
              w={{ base: "10", md: "12" }}
              h={{ base: "10", md: "12" }}
              shadow="lg"
              _hover={{
                bg: "brand.light",
                color: "white",
                transform: "translateY(-50%) scale(1.1)",
              }}
              transition="all 0.3s"
              onClick={goToNext}
              zIndex="20"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </IconButton>
          </Box>

          {/* Dots Indicator */}
          <Flex
            justify="center"
            gap="3"
            mt="8"
            flexWrap="wrap"
          >
            {posSlides.map((_, index) => (
              <Box
                key={index}
                as="button"
                w={{ base: "10px", md: "12px" }}
                h={{ base: "10px", md: "12px" }}
                rounded="full"
                bg={index === currentIndex ? "brand.light" : "gray.300"}
                transition="all 0.3s"
                _hover={{
                  bg: index === currentIndex ? "brand.dark" : "gray.400",
                  transform: "scale(1.2)",
                }}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

