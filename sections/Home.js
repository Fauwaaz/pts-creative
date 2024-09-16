import { Title, TitleLogo, TitleSm } from "../app/components/common/Title"
import { home } from "@/assets/data/dummydata"
import Expertise from "@/app/components/Expertise"
import Banner from "@/app/components/Banner"
import Testimonials from "@/app/components/Testimonials"
import Showcase from "@/app/components/Showcase"
import Brand from "@/app/components/Brand" 
import BlogCard from "@/app/components/BlogCard"

const Home = () => {
  return (
    <>
      <section className="hero" >
        <div className="container"> 
            <h1 className="logobg">Unlock Your Business Potential with <br />Premier <span className="blue">Digital Marketing</span> Solutions</h1>
            <div className="sub-heading heading-title white">
              <TitleSm title="WEBSITES"/> <span className="text-accent">.</span>
              <TitleSm title="BRANDING"/> <span>.</span>
              <TitleSm title="DIGITAL MARKETING"/>
            </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The Last Digital Agency You'll Ever Need"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at exercitationem quasi placeat vel modi libero quam earum quaerat expedita.</p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="blue">{item.icon}</span> 
                <br />
                <h3>{item.title}</h3>
              </div>  
            ))}
          </div> 
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonials />
      <Showcase />
      <Brand />
  
      <div className="heading-title">
        <Title title="Latest News & Articles" />
      </div>
      <BlogCard />
    </>
  )
}

export default Home