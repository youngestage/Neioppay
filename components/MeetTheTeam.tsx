"use client";

import React from "react";
import { Box, Container, Heading, Text, SimpleGrid, Image, Flex } from "@chakra-ui/react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ebehita Vincent Omoarebun",
    role: "CEO & Co-Founder",
    image: "/PHOTO-2025-11-10-13-19-26.jpg",
  },
  {
    name: "Chinwe Nwosu",
    role: "CTO & Co-Founder",
  },
  {
    name: "Kwame Mensah",
    role: "CFO & Co-Founder",
  },
  {
    name: "Amina Hassan",
    role: "Head of Product",
  },
  {
    name: "David Okonkwo",
    role: "Head of Operations",
  },
  {
    name: "Fatima Ibrahim",
    role: "Head of Marketing",
  },
];

const TeamMemberCard: React.FC<TeamMember> = ({ image, name, role }) => {
  return (
    <Box
      bg="white"
      rounded="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.100"
      transition="all 0.3s"
      _hover={{
        shadow: "lg",
        transform: "translateY(-4px)",
        borderColor: "brand.light",
      }}
    >
      <Box aspectRatio={1} bg="blue.50" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
        {image ? (
          <Image src={image} alt={`${name} portrait`} w="full" h="full" objectFit="cover" />
        ) : (
          <Flex
            w="full"
            h="full"
            bgGradient="linear(to-br, brand.light, brand.dark)"
            align="center"
            justify="center"
          >
            <Text color="white" fontSize="4xl" fontFamily="var(--font-poppins)" fontWeight="bold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Text>
          </Flex>
        )}
      </Box>
      <Box p={{ base: 4, sm: 6 }} textAlign="center">
        <Heading
          as="h3"
          fontSize={{ base: "lg", sm: "xl" }}
          fontFamily="var(--font-poppins)"
          fontWeight="bold"
          color="brand.veryDark"
          mb="2"
        >
          {name}
        </Heading>
        <Text fontSize={{ base: "sm", sm: "base" }} fontFamily="var(--font-inter)" color="brand.light">
          {role}
        </Text>
      </Box>
    </Box>
  );
};

export const MeetTheTeam: React.FC = () => {
  return (
    <Box as="section" py={{ base: "16", sm: "20", md: "24" }} bg="white">
      <Container maxW="7xl" px={{ base: 6, sm: 8 }}>
        <Box textAlign="center" mb={{ base: "12", sm: "16" }}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            fontFamily="var(--font-poppins)"
            fontWeight="bold"
            color="brand.veryDark"
            mb={{ base: "4", sm: "6" }}
            letterSpacing="-0.02em"
          >
            Meet Our Team
          </Heading>
          <Text
            fontSize={{ base: "base", sm: "lg", md: "xl" }}
            fontFamily="var(--font-inter)"
            color="brand.veryDark"
            opacity="0.7"
            maxW="3xl"
            mx="auto"
            lineHeight="1.7"
          >
            The passionate individuals behind Neiop Pay are united by a common mission to revolutionize financial services across Africa through innovation and inclusion.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 6, sm: 8 }}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
















