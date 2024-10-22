
import Image from "next/image"
import { services } from "@/assets/data/services"
import { BiCheckCircle } from "react-icons/bi";

const WhySection = ({ slug = "" } ) => {
    const service = services.find(service =>
        service.subCategory?.some(item => item.slug === slug)
    );

    return (
        <>

            <div className="py" style={{ position: "relative"}}>
                <Image
                    alt="pts-logo"
                    src="/PTS-only-logo.webp"
                    height={100}
                    width={100}
                    unoptimized={true}
                    style={{ position: "absolute", top: "-10px", left: "-30px" }}
                />
                <div style={{ padding: "20px", background: "#165eca", borderRadius: "10px" }}>
                    {service?.subCategory?.map((item, index) => {
                        if (item.slug !== slug) return null;

                        return (
                            <div key={index}>
                                {item.whyPtsSection?.map((data, index) => {
                                    return (
                                        <div key={index} style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                                            <h4 style={{ color: "white", fontSize: "35px", fontWeight: "bold", width: "80%"}}>{data.heading}</h4>
                                            <div className="grid-2 py">
                                                {data.whyList?.map((list) => {
                                                    return (
                                                        <ul key={list.id}>
                                                            <li className="text-left" style={{ color: "white", border: "0.5px solid white", borderRadius: "10px", padding: "10px", height:"100%"}}>
                                                                <span className="flex gap-1"><BiCheckCircle size={25} /><strong>{list.title}</strong></span>
                                                                <p style={{ color: "white" }}>{list.desc}</p>
                                                            </li>
                                                        </ul>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default WhySection
