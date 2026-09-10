import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const mange = localFont({
  src: [
    {
      path: "../public/fonts/Mange.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Mange.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mange",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neioppay - Bank Globally from one app",
  description: "Move your money around with full confidence. Send, receive, convert currency from anywhere in the world.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${mange.variable} ${poppins.variable} ${inter.variable} font-montserrat antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
