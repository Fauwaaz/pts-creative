import { brand } from "@/assets/data/dummydata"
import { Title } from "./common/Title"

const Brand = () => {
  return (
    <>
        <section className="brand"> 
            <div className="container">
                <div className="heading-title">
                    <Title title="WE ARE PROUD TO WORK WITH THESE COMPANIES"/>
                </div>
                <div className="brand-content grid-6">
                        {brand.map((item) => (
                            <div className="images" key={item.id}>
                                <img src={item.cover} alt={item.cover} width="100%" height="100%"/>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Brand
