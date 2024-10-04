import { services } from "@/assets/data/dummydata"
import { Title } from "./common/Title"
import Card from "@/app/components/common/Card"

const Services = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our Comprehensive Services" />
          </div>
          <div className="hero-content grid-4">
            {services.map((item, i) => (
              <div className="box" key={i}>
                <Card data={item} key={item.i} caption="Learn more" path="services"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services