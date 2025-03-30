import type { Metadata } from "next";
import "./index.css";
import { Inter } from "next/font/google";
import Head from 'next/head';

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
      <Head>
        <meta property="og:title" content="Feed Forward" />
        <meta property="og:description" content="Connecting businesses with food banks" />
        <meta property="og:image" content="https://feedfwd.vercel.app/logo.avif" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:type" content="website" />
      </Head>
      <body
        className={inter.className}//${geistSans.variable} ${geistMono.variable} 
      >
        {children}
      </body>
    </html>
  );
}
