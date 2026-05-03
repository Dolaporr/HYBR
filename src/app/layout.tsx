import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
