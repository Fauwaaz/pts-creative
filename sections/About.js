import Banner from "@/app/components/Banner"
import Brand from "@/app/components/Brand"
import Testimonial from "@/app/components/Testimonials"
import { Title, TitleSm } from "@/app/components/common/Title"
import Image from "next/image"

const About = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='The Last Digital Agency You Will Ever Need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title="Company's journey" />
              <p className='desc-p'>Company's Journey
                Founded in the heart of India's bustling cities, Mumbai and Pune, PTS Systems Solutions Pvt. Ltd. has emerged as a pioneer in the digital marketing sphere. Our journey began with a simple yet profound idea: to empower businesses with innovative digital strategies that drive growth and success. Over the years, we have evolved alongside the digital landscape, continuously adapting to the latest trends and technologies. Our commitment to excellence has established us as a trusted partner for businesses looking to navigate the complexities of online marketing.
              </p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='blue'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='blue'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='blue'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <Image
                className="round"
                src={'/s1.jpg'}
                alt={'/s1.jpg'}
                width={450}
                height={450}
                quality={100}
              />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <Image
                className="round"
                src={'/s4.jpg'}
                alt={'/s4.jpg'}
                width={450}
                height={450}
                quality={100}
              />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Purpose and Goals' />
              <br />
              <p className='misson-p'>At PTS Systems & Solutions, our purpose is to elevate brands by unlocking their potential in the online market. We realize that every business is unique; therefore, we strive to deliver personalized marketing solutions tailored to individual needs. Our goals are to enhance brand visibility, foster customer engagement, and accelerate business growth through effective digital marketing strategies. We envision a future where every business, regardless of its size, can thrive in the digital realm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default About