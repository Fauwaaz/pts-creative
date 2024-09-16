import { brand } from "@/assets/data/dummydata"
import { Title } from "./common/Title"
import Image from "next/image"

const Brand = () => {
    const styling = {
        background: "#00335F" 
    }
  return (
    <>
        <section className="brand" style={styling}> 
            <div className="container">
                <div className="heading-title">
                    <Title title="WE ARE PROUD TO WORK WITH THESE COMPANIES"/>
                </div>
                <div className="brand-content grid-6 justify-items-center">
                        {brand.map((item) => (
                            <div className="images" key={item.id}>
                                <Image 
                                    src={item.cover} 
                                    alt={item.cover} 
                                    width={130} 
                                    height={130}
                                    quality={100}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Brand
