import Services from "@/sections/Services"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | PTS",
  description: "Digital Marketing Agency",
  robots: "index, follow"
};

const services = () => {
  return (
    <>
      <Services />
    </>
  )
}

export default services