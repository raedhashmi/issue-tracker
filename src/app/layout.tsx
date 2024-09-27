import type { Metadata } from "next";
import { FaSquarespace } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import "./globals.css";


import '@radix-ui/themes/styles.css';

import { ThemePanel, Theme, Text, Button, Avatar } from "@radix-ui/themes";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme scaling="110%" appearance="dark" accentColor="gray" grayColor="slate">
          <nav className="flex border-b-4">
            <Link href="/"><FaSquarespace className="ml-7 w-12 h-16"/></Link>
            <Link href="/Dashboard" className="m-5 ml-9 font-medium text-lg hover:transition-all hover:-translate-y-1">Dashboard</Link>
            <Link href="/Issues" className="m-5 font-medium text-lg hover:transition-all hover:-translate-y-1">Issues</Link>
          </nav>
          <Toaster position="top-right" />
          {children}
        </Theme>
      </body>
    </html>
  );
}
