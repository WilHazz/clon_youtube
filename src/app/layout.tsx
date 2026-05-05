import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"], 
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Youtube Clone",
  description: "Clon de youtube creando con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${roboto.className} ${oswald.variable} antialiased`}
      >
        {/* Providers para manejar el rema oscuro*/} 
        <Providers> 
          <Navbar /> 
          {children}
        </Providers> 
      </body>
    </html>
  );
}
