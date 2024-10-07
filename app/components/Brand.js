import { brand } from "@/assets/data/dummydata"
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
                    <h3 className="title-logo">WE ARE PROUD TO WORK WITH THESE COMPANIES</h3>
                </div>
                <div className="brand-content grid-5 justify-items-center">
                        {brand.map((item) => (
                            <div className="images" key={item.id}>
                                <Image
                                    className="brand-img"
                                    src={item.cover} 
                                    alt={item.cover} 
                                    width={100} height={100}
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
