import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          light: { value: "#3B82F6" },
          dark: { value: "#1E40AF" },
          veryDark: { value: "#0F172A" },
          50: { value: "#eff6ff" },
          100: { value: "#dbeafe" },
          200: { value: "#bfdbfe" },
          300: { value: "#93c5fd" },
          400: { value: "#60a5fa" },
          500: { value: "#3B82F6" }, // blue-light
          600: { value: "#2563eb" },
          700: { value: "#1E40AF" }, // blue-dark
          800: { value: "#1e3a8a" },
          900: { value: "#0F172A" }, // blue-very-dark
          950: { value: "#0a0f1e" },
        },
      },
      fonts: {
        heading: { value: "var(--font-poppins), sans-serif" },
        body: { value: "var(--font-inter), sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "white" },
          fg: {
            value: { _light: "{colors.brand.700}", _dark: "{colors.brand.300}" },
          },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.50}" },
          emphasized: { value: "{colors.brand.600}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);


