import Banner from "@/app/components/Banner"
import Expertise from "@/app/components/Expertise"
import Image from "next/image"

const About = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <h1 className="titleSm">ABOUT US</h1> <br />
            <br />
          </div>

          <div className='content flex1'>
            <div className='left w-70 py'>
              <h2 className="text-35 text-primary">Company&apos;s Journey</h2>
              <p className='desc-p'>
                Founded in the heart of India's bustling cities, Mumbai and Pune, <strong>PTS Systems Solutions Pvt. Ltd.</strong> has emerged as a pioneer in the digital marketing sphere. Our journey began with a simple yet profound idea: to empower businesses with innovative digital strategies that drive growth and success. Over the years, we have evolved alongside the digital landscape, continuously adapting to the latest trends and technologies. Our commitment to excellence has established us as a trusted partner for businesses looking to navigate the complexities of online marketing.
              </p>
            </div>
            <div className='right w-30 ml'>
              <Image
                className="round"
                src={'/s1.jpg'}
                alt={'/s1.jpg'}
                width={350}
                height={350}
                quality={100}
              />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-30 py'>
              <Image
                className="round"
                src={'/s4.jpg'}
                alt={'/s4.jpg'}
                width={350}
                height={350}
                quality={100}
              />
            </div>
            <div className='right w-70 ml'>
              <h2 className="text-35 text-primary">Purpose and Goals</h2>
              <p className='desc-p'>At <strong>PTS Systems & Solutions</strong>, our purpose is to elevate brands by unlocking their potential in the online market. We realize that every business is unique; therefore, we strive to deliver personalized marketing solutions tailored to individual needs. Our goals are to enhance brand visibility, foster customer engagement, and accelerate business growth through effective digital marketing strategies. We envision a future where every business, regardless of its size, can thrive in the digital realm.
              </p>
            </div>
          </div>
          <div className="content text-center">
            <h2 className="text-35 text-primary">Introduction to the Team</h2>
            <p className='desc-p'>Our success is a direct result of our talented team of digital marketing experts. Each member of PTS Systems & Solutions brings a unique skill set and years of experience in their respective fields, including Digital Marketing, Website Development, Strategy & Branding, Website Design, Mobile App Development, Cloud Hosting, Web Hosting, and Agile Methodology. Our collaborative approach ensures that we stay ahead of the curve, continuously learning, innovating, and implementing the best practices in digital marketing to provide exceptional service to our clients.
            </p>
          </div>
          <div className="content text-center">
            <h2 className="text-35 text-primary">Offerings</h2>
            <p className='desc-p'>With a comprehensive suite of services, we cater to a wide array of digital marketing needs. Our offerings include:
            </p>
            <Expertise />
          </div>
        </div>
      </section>
      <Banner />
    </>
  )
}

export default About