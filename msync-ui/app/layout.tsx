import type { Metadata } from "next";
import { fonts, siteConfig } from "@/src/config/site";
import "./globals.css";
import React from "react";


export const metadata: Metadata = {
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: "%s",
  },
  description: siteConfig.description,
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fonts.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
<html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
*/
