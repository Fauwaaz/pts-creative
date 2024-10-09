import type { Metadata } from "next";

import "../styles/main.scss"

import Header from "./components/common/Header"
import Footer from "./components/common/Footer"

export const metadata: Metadata = {
  title: "PTS Digital Marketing",
  description: "Digital Marketing Agency",
  robots: "index, follow"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}