
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PASKIBRA SMKN 2 MAKASSAR",
  description: "Pembuat Fathur Ramadhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="images-removebg-preview.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
       
      </body>
    </html>
  );
}
