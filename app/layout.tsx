import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollManager from "../components/ScrollManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Apartments Germany",
  description: "Find your next home with our carefully selected premium apartments in Germany.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-page text-dark antialiased min-h-screen flex flex-col`}>
        <ScrollManager />
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
