import About from "@/sections/About"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | PTS",
  description: "Digital Marketing Agency",
  robots: "index, follow"
};

const AboutPage = () => {
  return (
    <>
      <About />
    </>
  )
}

export default AboutPage