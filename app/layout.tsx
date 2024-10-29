import type { Metadata } from "next";
import localFont from "next/font/local";

import "../styles/main.scss";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import BackgroundLogo from "./components/common/BackgroundLogo";
import Script from "next/script";

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
  title: "Digital Marketing Agency in India | PTS Systems & Solutions Pvt. Ltd.",
  description: "Unlock your business's potential with PTS Systems & Solutions Pvt. Ltd., a leading digital marketing agency in India. We offer comprehensive services, including SEO, PPC, social media marketing, content creation, and email marketing, designed to generate 3x faster revenue growth. Partner with us today to transform your brand into a powerful sales engine.",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>  
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XXXXXXX');`}
        </Script>
      </head>
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