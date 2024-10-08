import { services } from "../assets/data/dummydata"
import Card from "../app/components/common/Card"
import { Title, TitleSm } from "../app/components/common/Title"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SERVICES' /> <br />
            <br />
            <Title title='Unique Technologies & Modern Approach' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {services.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} path="services"/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services