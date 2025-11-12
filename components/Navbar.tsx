"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { Box, Flex, Link, Image, IconButton, Stack, Container } from "@chakra-ui/react";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Personal", href: "#personal" },
    { label: "Business", href: "#business" },
    { label: "Company", href: "#company" },
    { label: "Help Center", href: "#help" },
  ];

  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      zIndex="50"
      bg={isScrolled ? "white" : "white"}
      backdropFilter={isScrolled ? "blur(12px)" : "none"}
      boxShadow={isScrolled ? "md" : "none"}
      borderBottomWidth={isScrolled ? "0" : "1px"}
      borderBottomColor={isScrolled ? "transparent" : "gray.100"}
      transition="all 0.3s ease"
      opacity={isScrolled ? 0.98 : 1}
    >
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }}>
        <Flex justify="space-between" align="center" h="20">
          {/* Logo */}
          <Link asChild>
            <NextLink href="/">
              <Flex align="center">
                <Image src="/logo.png" alt="Neiop Pay Logo" h="10" w="auto" />
              </Flex>
            </NextLink>
          </Link>

          {/* Desktop Menu */}
          <Flex display={{ base: "none", md: "flex" }} align="center" gap="8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                asChild
                color="brand.veryDark"
                fontFamily="var(--font-inter)"
                fontWeight="medium"
                _hover={{ color: "brand.dark" }}
                transition="colors 0.2s"
              >
                <NextLink href={item.href}>{item.label}</NextLink>
              </Link>
            ))}
            <Link
              href="https://play.google.com/store/apps/details?id=com.neiop.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <Image
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                h="8"
                w="auto"
              />
            </Link>
          </Flex>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            aria-label="Toggle menu"
            color="brand.veryDark"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </IconButton>
        </Flex>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <Stack
            display={{ base: "flex", md: "none" }}
            py="6"
            gap="4"
            animation="slideDown 0.3s ease-out"
            css={{
              "@keyframes slideDown": {
                from: { opacity: 0, transform: "translateY(-10px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                asChild
                color="brand.veryDark"
                fontFamily="var(--font-inter)"
                fontWeight="medium"
                py="2"
                px="3"
                rounded="md"
                transition="all 0.2s"
                _hover={{ color: "brand.dark", bg: "blue.50" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <NextLink href={item.href}>{item.label}</NextLink>
              </Link>
            ))}
            <Link
              href="https://play.google.com/store/apps/details?id=com.neiop.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                h="10"
                w="auto"
              />
            </Link>
          </Stack>
        )}
      </Container>
    </Box>
  );
};
