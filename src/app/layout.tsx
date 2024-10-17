import type { Metadata } from "next";
import { Noto_Serif, Roboto, Lato, Play } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const noto = Noto_Serif({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  variable: "--font-noto",
});

const roboto = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  variable: "--font-roboto",
});

const lato = Lato({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  variable: "--font-lato",
});

const play = Play({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  variable: "--font-play",
});

export const metadata: Metadata = {
  title: "Scott Greenhalgh",
  description:
    "Software Developer Portfolio | JavaScript | TypeScript | Node.js | React.js | Next.js | PostgreSQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} ${roboto.variable} ${lato.variable} ${play.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
