import Contact from "@/sections/Contact"
import { Metadata } from "next"
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | PTS",
  description: "Digital Marketing Agency",
  robots: "index, follow"
};

const contact = () => {
  return (
    <>
      <Contact />
    </>
  )
}

export default contact