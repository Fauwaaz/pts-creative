import { HiOutlineArrowDownLeft } from "react-icons/hi2"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div>
                        <Title title="Elevate Your Digital Strategy Today!" />
                        <TitleLogo title="Are you ready to take your marketing to the next level? Our team is here to help." />
                    </div>
                    <button className="button-primary">
                        Schedule Your Free Consultation Now <HiOutlineArrowDownLeft />
                    </button>
                </div>
            </section>
        </>
    )
}

export default Banner;