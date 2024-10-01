import { Metadata } from "next"
import Blog from "@/sections/Blog";
import React from "react"

export const metadata: Metadata = {
  title: "Blogs | PTS",
  description: "Digital Marketing Agency",
  robots: "index, follow"
};


const BlogsPage = () => {
  return (
    <>
      <Blog />
    </> 
  )
}

export default BlogsPage
