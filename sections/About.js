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
              <TitleSm title='Turning your business ideas into smart digital products since 2001' />
              <p className='desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam non dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, sem eget sollicitudin tempor, libero velit aliquam enim, vel egestas tortor ante quis sem.</p>
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
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>Fusce fringilla justo vel dui consectetur, fringilla maximus ante malesuada. Suspendisse facilisis nisl augue, ut sollicitudin lectus ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse vitae officia nostrum facere. Fugiat voluptates, expedita dolore at perferendis quae libero fuga consequatur veniam, eius non fugit nulla vitae?</p>
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