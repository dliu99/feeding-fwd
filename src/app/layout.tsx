//import type { Metadata } from "next";
import "./index.css";
import { Inter } from "next/font/google";
//import Head from 'next/head';

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/
const inter = Inter({ subsets: ["latin"] });
// ... existing code ...
export const metadata = {
  title: "Feed Forward",
  description: "We're connecting businesses with food banks to fight hunger.",
  openGraph: {
    title: "Feed Forward",
    description: "We're connecting businesses with food banks to fight hunger.",
    images: [
      {
        url: "/logo.avif", // Path relative to public/
        width: 512,
        height: 512,
        alt: "Feed Forward",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feed Forward",
    description: "We're connecting businesses with food banks to fight hunger.",
    images: ["/logo.avif"],
  },
};
// ... existing code ...

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
