import { services } from "@/assets/data/dummydata"
import { Title } from "./common/Title"
import Card from "@/app/components/common/Card"
import Link from "next/link"
import { HiOutlineArrowUpRight } from "react-icons/hi2"

const Services = () => {
  const limitedServices = services.slice(0, 4)

  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our Comprehensive Services" />
          </div>
          <div className="hero-content grid-4">
            {limitedServices.map((item, i) => (
              <div className="box" key={i}>
                <Card data={item} key={item.i} path="services" />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center"}} >
            <Link href="/services" className="button-secondary">
              Show More &nbsp; <HiOutlineArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services