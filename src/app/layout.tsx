import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./index.css";
import { Inter } from "next/font/google";
import NavButton from "@/components/navbar";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Feeding Forward",
  description: "Connecting businesses with food banks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}//${geistSans.variable} ${geistMono.variable} 
      >
        {children}
      </body>
    </html>
  );
}
