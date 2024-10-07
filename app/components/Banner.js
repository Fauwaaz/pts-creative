import { HiOutlineArrowDownLeft } from "react-icons/hi2"
import { TitleLogo } from "./common/Title"
import Link from "next/link";

const Banner = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="banner-content">
                        <h4 className="title-logo">Elevate Your Digital Strategy Today!</h4>
                        <TitleLogo title="Are you ready to take your marketing to the next level? Our team is here to help." />
                    </div>
                    <Link href="/contact" className="button-primary">
                        Schedule Your Free Consultation Now <HiOutlineArrowDownLeft />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Banner;