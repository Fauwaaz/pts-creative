import { HiOutlineArrowDownLeft } from "react-icons/hi2"
import Link from "next/link";

const ServicesBanner = () => {
    return (
        <>
            <section className="banner" style={{marginTop: "-70px"}}>
                <div className="container">
                    <div className="banner-content">
                        <h4 className="title-logo">Contact Us Today For A Free Consultation!
                        </h4>
                        <h5 className="titleSm" style={{ color: "white" }}>
                           Grow your business with India&apos;s leading digital marketing agency. 
                        </h5>
                    </div>
                    <Link href="/contact" className="button-primary">
                        Book Now &nbsp; <HiOutlineArrowDownLeft />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default ServicesBanner