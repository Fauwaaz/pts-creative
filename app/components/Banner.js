import { HiOutlineArrowDownLeft } from "react-icons/hi2"
import Link from "next/link";

const Banner = () => {
    return (
        <>
            <section className="banner text-center">
                <div className="container">
                    <div className="banner-content">
                        <h4 className="title-logo">Elevate Your Digital Strategy Today! </h4>
                        <h5 className="desc" style={{color: "white"}}>
                            Are you ready to take your marketing to the next level? Our team is here to help. 
                            Schedule Your Free Consultation Now.
                        </h5>
                    </div>
                    <Link href="/contact" className="button-primary" style={{marginTop: "10px"}}>
                        Book Now &nbsp; <HiOutlineArrowDownLeft />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Banner;