import Team  from "@/sections/Team"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | PTS",
  description: "Digital Marketing Agency",
  robots: "index, follow"
};

const team = () => {
  return (
    <>
      <Team />
    </>
  )
}

export default team