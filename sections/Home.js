import { Title, TitleSm } from "../app/components/common/Title"
import { home } from "@/assets/data/dummydata"
import Expertise from "@/app/components/Expertise"
import Banner from "@/app/components/Banner"
import Testimonials from "@/app/components/Testimonials"
import Showcase from "@/app/components/Showcase"
import Brand from "@/app/components/Brand"
import BlogCard from "@/app/components/BlogCard"
import TeamScroll from "./TextScroll"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <section className="hero" >
        <div className="container">
          <h1 className="logobg">Unlock Your Business Potential with <br />Premier <span className="blue">Digital Marketing</span> Solutions</h1>
          <div className="sub-heading heading-title white">
            <TitleSm title="WEBSITES" /> <span className="text-accent">.</span>
            <TitleSm title="BRANDING" /> <span>.</span>
            <TitleSm title="DIGITAL MARKETING" />
          </div><br/>
          <Link href="/contact" className="button-primary">Get a Free Website Audit</Link>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The Last Digital Agency You'll Ever Need" />
            <p>Welcome to PTS Systems & Solutions Pvt. Ltd.As a leading player in the digital marketing landscape, we are dedicated to helping businesses in Mumbai, Pune, and Navi Mumbai flourish in the online marketplace. Our expert team employs cutting-edge strategies across Digital Marketing, Website Development, Strategy & Branding, Website Design, Mobile App Development, Cloud Hosting, Web Hosting, and Agile Methodology. Elevate your brand today with tailored digital marketing solutions designed to fit your unique business needs.
            </p>
          </div>
        </div>
      </section>
      <Expertise />
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Why Choose Us Section" />
            <p>Your Partner in Digital Growth At <strong>PTS Systems & Solutions Pvt. Ltd.</strong>, we believe in a personalized approach that sets us apart from other agencies. Here's why we are the best:</p>
            <div className="hero-content grid-4">
              {home.map((item, i) => (
                <div className="box" key={i}>
                  <span className="blue">{item.icon}</span>
                  <br />
                  <h3>{item.title}</h3>
                  <p className="sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <Showcase />
      <Brand />
      <TeamScroll />
      <Testimonials />

      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Who We Are?" />
            <p>At PTS Systems & Solutions Pvt. Ltd., we're passionate about helping businesses succeed in the digital realm. Founded on the principles of integrity and innovation, we have curated a team of experts who bring a uniquely holistic approach to digital marketing. Based in India, we are proud to be regarded as one of the top ten digital marketing agencies in Mumbai and Pune.
            </p>
          </div>
        </div>
      </section>

      <div className="heading-title">
        <Title title="Latest News & Articles" />
      </div>
      <BlogCard />
    </>
  )
}

export default Home