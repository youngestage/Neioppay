"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NextLink from "next/link";

const sections = [
  { id: "scope", title: "1. Scope & Compliance" },
  { id: "collect", title: "2. Information We Collect" },
  { id: "use", title: "3. How We Use Your Info" },
  { id: "share", title: "4. How We Share Info" },
  { id: "transfers", title: "5. Cross-Border Transfers" },
  { id: "rights", title: "6. Data Protection Rights" },
  { id: "retention", title: "7. Data Retention" },
  { id: "security", title: "8. Security of Your Data" },
  { id: "changes", title: "9. Policy Changes" },
  { id: "contact", title: "10. Contact Us" },
];

export const PrivacyContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      // Find the current section
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-b, brand.50, white)"
        py={{ base: "16", md: "24" }}
        position="relative"
        overflow="hidden"
        borderBottomWidth="1px"
        borderBottomColor="gray.100"
      >
        <Box position="absolute" inset="0" overflow="hidden" pointerEvents="none">
          <Box
            position="absolute"
            top="-10%"
            right="-10%"
            w="80"
            h="80"
            bg="brand.light"
            rounded="full"
            filter="blur(80px)"
            opacity="0.08"
            css={{ animation: "blob 10s ease-in-out infinite" }}
          />
        </Box>

        <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }} position="relative" zIndex="10">
          <VStack gap="4" align="flex-start" maxW="3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-inter bg-blue-50 text-blue-light border border-blue-100">
              Regulatory Compliance
            </span>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontFamily="var(--font-poppins)"
              fontWeight="bold"
              color="brand.veryDark"
              letterSpacing="-0.02em"
              lineHeight="1.1"
            >
              Privacy Policy
            </Heading>
            <Text
              fontSize="sm"
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.6"
              fontWeight="semibold"
            >
              Last Updated: June 9, 2026
            </Text>
            <Text
              fontSize={{ base: "base", md: "lg" }}
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.8"
              lineHeight="1.6"
              className="mt-2"
            >
              Welcome to Neiop Pay. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how Neiop Pay Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and safeguards your information when you visit our website at <NextLink href="/" className="text-blue-light hover:underline font-semibold">neioppay.com</NextLink> (the &quot;Site&quot;) and use our mobile application or payment services (collectively, the &quot;Services&quot;).
            </Text>
            <Text
              fontSize="sm"
              fontFamily="var(--font-inter)"
              color="brand.veryDark"
              opacity="0.7"
              className="italic mt-1"
            >
              Please read this Privacy Policy carefully. By accessing or using our Services, you agree to the collection and use of your information in accordance with this policy.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Main Content Layout */}
      <Container maxW="7xl" px={{ base: 6, sm: 8, lg: 12 }} py={{ base: "12", lg: "16" }}>
        <Grid templateColumns={{ base: "1fr", lg: "280px 1fr" }} gap={{ base: "12", lg: "16" }}>
          
          {/* Left Sticky Sidebar (Desktop Only) */}
          <GridItem display={{ base: "none", lg: "block" }}>
            <Box position="sticky" top="100px" alignSelf="start" className="space-y-4">
              <Text
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="widest"
                color="brand.veryDark"
                opacity="0.4"
                mb="3"
              >
                Table of Contents
              </Text>
              <nav className="flex flex-col gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`text-sm font-inter transition-all py-1.5 pl-3 border-l-2 hover:text-blue-light hover:border-blue-300 font-medium ${
                      activeSection === section.id
                        ? "text-blue-light border-blue-light font-semibold bg-blue-50/40 rounded-r-md"
                        : "text-blue-very-dark/60 border-gray-100"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </Box>
          </GridItem>

          {/* Right Text Column */}
          <GridItem>
            <div className="space-y-12 font-inter text-brand-veryDark leading-relaxed">
              
              {/* Section 1 */}
              <Box id="scope" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  1. Scope and Regulatory Compliance
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8">
                  This Privacy Policy is designed to meet strict global and regional regulatory standards, specifically governing users in Nigeria and the United States:
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="6" className="mt-4">
                  <Box className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 shadow-sm">
                    <Text className="font-semibold text-blue-dark mb-1 text-sm font-poppins">Nigeria</Text>
                    <Text fontSize="sm" color="brand.veryDark" opacity="0.8">
                      Compliant with the Nigeria Data Protection Act (NDPA) 2023 and overseen by the Nigeria Data Protection Commission (NDPC).
                    </Text>
                  </Box>
                  <Box className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 shadow-sm">
                    <Text className="font-semibold text-blue-dark mb-1 text-sm font-poppins">United States</Text>
                    <Text fontSize="sm" color="brand.veryDark" opacity="0.8">
                      Compliant with the Gramm-Leach-Bliley Act (GLBA) for financial privacy and state-specific laws including the California Consumer Privacy Act (CCPA/CPRA).
                    </Text>
                  </Box>
                </Grid>
              </Box>

              {/* Section 2 */}
              <Box id="collect" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  2. Information We Collect
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8">
                  We collect several types of information from and about users of our Services, categorized as follows:
                </Text>

                {/* Sub-sections A & B */}
                <div className="space-y-6 mt-6">
                  {/* Subsection A */}
                  <Box className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm space-y-4">
                    <Heading
                      as="h3"
                      fontSize="lg"
                      fontFamily="var(--font-poppins)"
                      fontWeight="bold"
                      color="brand.veryDark"
                    >
                      A. Information You Provide to Us
                    </Heading>
                    <ul className="space-y-3.5 pl-1">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2.5"></span>
                        <div>
                          <strong className="text-blue-dark">Identity Data:</strong> Full name, date of birth, gender, nationality, and government-issued identification numbers (e.g., Nigerian BVN, NIN, or U.S. Social Security Number/ITIN) required for identity verification and Know Your Customer (KYC) compliance.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2.5"></span>
                        <div>
                          <strong className="text-blue-dark">Contact Data:</strong> Email address, phone number, billing address, and physical mailing address.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2.5"></span>
                        <div>
                          <strong className="text-blue-dark">Financial Data:</strong> Bank account details, payment card numbers, transaction history, and credit-related information.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2.5"></span>
                        <div>
                          <strong className="text-blue-dark">Profile Data:</strong> Username, password, security questions, preferences, and feedback.
                        </div>
                      </li>
                    </ul>
                  </Box>

                  {/* Subsection B */}
                  <Box className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm space-y-4">
                    <Heading
                      as="h3"
                      fontSize="lg"
                      fontFamily="var(--font-poppins)"
                      fontWeight="bold"
                      color="brand.veryDark"
                    >
                      B. Information Collected Automatically
                    </Heading>
                    <ul className="space-y-3.5 pl-1">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2.5"></span>
                        <div>
                          <strong className="text-blue-dark">Technical Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types, operating system, and platform.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2.5"></span>
                        <div>
                          <strong className="text-blue-dark">Usage Data:</strong> Information about how you navigate and use our Site, products, and Services.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2.5"></span>
                        <div>
                          <strong className="text-blue-dark">Geolocation Data:</strong> Precise physical location of your device, utilized for fraud prevention and compliance monitoring.
                        </div>
                      </li>
                    </ul>
                  </Box>
                </div>
              </Box>

              {/* Section 3 */}
              <Box id="use" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  3. How We Use Your Information
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8">
                  We process your personal data under valid legal bases as defined by the NDPA and U.S. federal frameworks. We use your data to:
                </Text>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: "Provide Services", desc: "Process payments, manage accounts, and facilitate money transfers." },
                    { title: "Verify Identity", desc: "Conduct mandatory KYC, Anti-Money Laundering (AML), and Counter-Terrorist Financing (CTF) screenings." },
                    { title: "Prevent Fraud", desc: "Monitor transaction patterns, detect unauthorized access, and secure our systems." },
                    { title: "Customer Support", desc: "Respond to inquiries, troubleshoot bugs, and resolve payment disputes." },
                    { title: "Legal Compliance", desc: "Comply with applicable financial laws, court orders, and regulatory audit requests." },
                  ].map((item, idx) => (
                    <li key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/30 flex flex-col justify-between">
                      <strong className="text-sm font-semibold text-blue-dark mb-1 font-poppins">{item.title}</strong>
                      <span className="text-sm text-brand-veryDark opacity-80">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </Box>

              {/* Section 4 */}
              <Box id="share" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  4. How We Share Your Information
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8" className="mb-4">
                  We do not sell your personal information. We may share your data with trusted third parties only under the following circumstances:
                </Text>
                <div className="space-y-4">
                  {[
                    { label: "Financial Partners", text: "Banking institutions, payment processors (e.g., Interswitch, Paystack, Stripe), and card networks to clear transactions." },
                    { label: "Identity Verification Vendors", text: "Approved agencies to validate your government identity documentation and BVN/SSN records." },
                    { label: "Service Providers", text: "Cloud hosting infrastructure providers, security auditors, and analytics tools working under strict confidentiality agreements." },
                    { label: "Law Enforcement & Regulators", text: "When legally compelled by agencies such as the Economic and Financial Crimes Commission (EFCC) in Nigeria, or the Financial Crimes Enforcement Network (FinCEN) and Consumer Financial Protection Bureau (CFPB) in the U.S." },
                  ].map((partner, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-light flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <strong className="text-blue-dark block font-poppins text-sm mb-0.5">{partner.label}</strong>
                        <Text fontSize="sm" color="brand.veryDark" opacity="0.8">{partner.text}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </Box>

              {/* Section 5 */}
              <Box id="transfers" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  5. Cross-Border Data Transfers
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8">
                  Neiop Pay operates globally. Information collected from Nigeria may be transferred to, stored, and processed in the United States, Canada, or other international jurisdictions.
                </Text>
                <div className="p-5 rounded-xl bg-blue-50/20 border border-blue-100/30 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-blue-dark text-sm mb-1 font-poppins">NDPA Compliance</h4>
                    <Text fontSize="sm" color="brand.veryDark" opacity="0.8">
                      We ensure all international transfers adhere to the adequacy requirements or standard contractual clauses approved by the NDPC.
                    </Text>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-dark text-sm mb-1 font-poppins">Data Security</h4>
                    <Text fontSize="sm" color="brand.veryDark" opacity="0.8">
                      Data in transit is protected using advanced Transport Layer Security (TLS) encryption, and data at rest is secured via AES-256 standard encryption.
                    </Text>
                  </div>
                </div>
              </Box>

              {/* Section 6 */}
              <Box id="rights" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  6. Your Data Protection Rights
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8">
                  Depending on your location, you have specific data protection rights under applicable laws. To exercise any of these rights, please contact us at the email listed in Section 10.
                </Text>

                <div className="space-y-6 mt-6">
                  {/* Nigerian Rights */}
                  <Box className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm space-y-4">
                    <Heading
                      as="h3"
                      fontSize="lg"
                      fontFamily="var(--font-poppins)"
                      fontWeight="bold"
                      color="brand.veryDark"
                    >
                      A. Nigerian Jurisdiction Rights (Under NDPA)
                    </Heading>
                    <Text fontSize="sm" color="brand.veryDark" opacity="0.8">
                      If you reside in Nigeria, you have the right to:
                    </Text>
                    <ul className="space-y-2.5 pl-1 text-sm">
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2"></span>
                        <span>Request access to or copies of your personal data.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2"></span>
                        <span>Rectify inaccurate or incomplete information.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2"></span>
                        <span>Object to or restrict the processing of your data.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2"></span>
                        <span>Request the erasure (&quot;right to be forgotten&quot;) of your data, subject to mandatory financial record retention laws.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2"></span>
                        <span>Withdraw your consent at any time for data processed based on consent.</span>
                      </li>
                    </ul>
                  </Box>

                  {/* US Rights */}
                  <Box className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm space-y-4">
                    <Heading
                      as="h3"
                      fontSize="lg"
                      fontFamily="var(--font-poppins)"
                      fontWeight="bold"
                      color="brand.veryDark"
                    >
                      B. United States Jurisdiction Rights (Under GLBA & CCPA)
                    </Heading>
                    <Text fontSize="sm" color="brand.veryDark" opacity="0.8">
                      If you are a U.S. resident:
                    </Text>
                    <ul className="space-y-3 pl-1 text-sm">
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2"></span>
                        <div>
                          <strong className="text-blue-dark">GLBA Opt-Out:</strong> You have the right to opt out of us sharing your non-public personal financial information with non-affiliated third parties for marketing purposes.
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-light mt-2"></span>
                        <div>
                          <strong className="text-blue-dark">CCPA Rights (California Residents):</strong> You have the right to know what personal information we collect, request deletion, and opt out of any potential &quot;sale&quot; or &quot;sharing&quot; of data for cross-contextual behavioral advertising.
                        </div>
                      </li>
                    </ul>
                  </Box>
                </div>
              </Box>

              {/* Section 7 */}
              <Box id="retention" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  7. Data Retention
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8">
                  We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy. Because we operate as a financial service provider, we are legally required by AML/CFT frameworks in both Nigeria and the U.S. to retain core customer identification and transaction records for a minimum period of five (5) to seven (7) years following the closure of your account.
                </Text>
              </Box>

              {/* Section 8 */}
              <Box id="security" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  8. Security of Your Data
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8">
                  We implement robust technical, physical, and administrative security measures designed to protect your personal information from unauthorized access, loss, or alteration. These include end-to-end encryption, multi-factor authentication (MFA), network firewalls, and regular security vulnerability assessments.
                </Text>
                <Text color="brand.veryDark" opacity="0.8" className="italic mt-2">
                  However, no electronic transmission or storage system is 100% secure; we cannot guarantee absolute security.
                </Text>
              </Box>

              {/* Section 9 */}
              <Box id="changes" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  9. Changes to This Privacy Policy
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8">
                  We may update our Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
                </Text>
              </Box>

              {/* Section 10 */}
              <Box id="contact" className="scroll-mt-24 space-y-4">
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontFamily="var(--font-poppins)"
                  fontWeight="bold"
                  color="brand.veryDark"
                >
                  10. Contact Us
                </Heading>
                <div className="w-12 h-1 bg-blue-light rounded mb-4"></div>
                <Text color="brand.veryDark" opacity="0.8">
                  If you have any questions, concerns, complaints, or wish to exercise your data protection rights, please contact our Data Protection Officer (DPO) at:
                </Text>

                <Box className="p-6 rounded-xl border border-gray-100 bg-gray-50/30 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-blue-very-dark/50 uppercase font-semibold block">Company Name</span>
                      <strong className="text-blue-dark font-poppins">Neiop Pay Limited</strong>
                    </div>
                    <div>
                      <span className="text-xs text-blue-very-dark/50 uppercase font-semibold block">Email Address</span>
                      <a href="mailto:support@neiopay.com" className="text-blue-light font-semibold hover:underline break-all">
                        support@neiopay.com
                      </a>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-blue-very-dark/50 uppercase font-semibold block">Physical Address (Nigeria)</span>
                      <Text fontSize="sm" color="brand.veryDark" className="font-medium leading-relaxed">
                        9b second powerline, opposite the Gen school Sango
                      </Text>
                    </div>
                    <div>
                      <span className="text-xs text-blue-very-dark/50 uppercase font-semibold block">Physical Address (Canada)</span>
                      <Text fontSize="sm" color="brand.veryDark" className="font-medium leading-relaxed">
                        241 Elizabeth Avenue St. John&apos;s Province Newfoundland and Labrador
                      </Text>
                    </div>
                  </div>
                </Box>
              </Box>

            </div>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};
