import type { Metadata } from "next";
import { FaSquarespace } from "react-icons/fa";
import "./globals.css";
import '@radix-ui/themes/styles.css';

import { ThemePanel, Theme, Text, Button } from "@radix-ui/themes";
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
   <div>
        {children}
    </div>
  );
}
