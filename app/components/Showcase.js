import { showcase } from "@/assets/data/dummydata"
import { Title } from "./common/Title"
import Card from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Success Stories"/>
          </div>
          <div className="hero-content grid-3 py">
            {showcase.map((item) => (
              <Card data={item} key={item.id}/>
            ))}
          </div> 
          <div className="card links">
            <Link href="/#">VIEW CASE <HiOutlineArrowRight  className='link-icon'/></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase