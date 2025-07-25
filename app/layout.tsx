import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  name,
  role,
  description,
  keywords,
  siteUrl,
  ogImage,
  locale,
  twitterUsername,
} from "@/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${name} | ${role}`,
  description,
  keywords,
  authors: [{ name, url: siteUrl }],
  creator: name,
  openGraph: {
    title: `${name} | ${role} Portfolio`,
    description,
    url: siteUrl,
    siteName: `${name} | Portfolio`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${name} | ${role} Portfolio`,
      },
    ],
    locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} | ${role}`,
    description,
    creator: twitterUsername,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        {children}
      </body>
    </html>
  );
}
