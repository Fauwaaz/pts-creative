import { teamdata } from "../assets/data/dummydata"
import Card from "../app/components/common/Card"
import { Title, TitleSm } from "../app/components/common/Title"

const Team = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Introduction to the Team' /> <br />
            <br />
            <Title title='A Team of Smart & Passsionate Creatives' className='title-bg' />
            <p>Our success is a direct result of our talented team of digital marketing experts. Each member of PTS Systems & Solutions brings a unique skill set and years of experience in their respective fields, including Digital Marketing, Website Development, Strategy & Branding, Website Design, Mobile App Development, Cloud Hosting, Web Hosting, and Agile Methodology. Our collaborative approach ensures that we stay ahead of the curve, continuously learning, innovating, and implementing the best practices in digital marketing to provide exceptional service to our clients.</p>
          </div>
          <div className='grid-4 py'>
            {teamdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team