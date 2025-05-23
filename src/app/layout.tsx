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
        url: "https://feed-fwd.org/logo.png", // Path relative to public/
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
      <head>
        <meta property="og:title" content="Feed Forward" />
        <meta property="og:description" content="We're connecting businesses with food banks to fight hunger." />
        <meta property="og:image" content="https://feed-fwd.org/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Feed Forward" />
        <meta name="twitter:description" content="We're connecting businesses with food banks to fight hunger." />
        <meta name="twitter:image" content="/logo.avif" />
      </head>
      <body
        className={inter.className}//${geistSans.variable} ${geistMono.variable} 
      >
        {children}
      </body>
    </html>
  );
}
