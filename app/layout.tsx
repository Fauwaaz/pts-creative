import type { Metadata } from "next";
import localFont from "next/font/local";

import "../styles/main.scss";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import BackgroundLogo from "./components/common/BackgroundLogo";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Black.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Bold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PTS Digital Marketing",
  description: "Digital Marketing Agency",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
         {children} 
         <BackgroundLogo />
        <Footer />
      </body>
    </html>
  );
}