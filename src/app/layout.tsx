import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsLarge = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400"
});

const poppinsNormal = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "800"
});

export const metadata: Metadata = {
  title: "beni.dev",
  description: "A Portfolio for Bently Rafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsNormal.variable} ${poppinsLarge.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
