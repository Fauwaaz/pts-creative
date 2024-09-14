import { expertise } from "@/assets/data/dummydata"
import { Title } from "./common/Title"
import Card from "@/app/components/common/Card"

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our Expertise" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at exercitationem quasi placeat.</p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item, i) => (
              <div className="box" key={i}>
                <Card data={item} key={item.i} caption="Learn more" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
