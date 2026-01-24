import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import Navigation from "@/components/Navigation";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITTFIND - Connecting Football Talent with Opportunities",
  description:
    "The ultimate platform bridging players, clubs, and brands in the world of football",
  icons: {
    icon: "/icons/nav_logo1.svg",
    shortcut: "/icons/nav_logo1.svg",
    apple: "/icons/nav_logo1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
