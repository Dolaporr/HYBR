import type { Metadata } from "next";
import { Montserrat, Raleway, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYBR | Build Ideas Faster, Smarter",
  description:
    "HYBR helps leaders find clarity, test ideas, and build innovation with purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${raleway.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
