import { HiOutlineArrowDownLeft } from "react-icons/hi2"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
        <section className="banner">
            <div className="container">
                <div>
                    <Title title="We're Looking To Start A New Project..."/>    
                    <TitleLogo title="Let's Take Your Business To Next Level!" />    
                </div>    
                <div>
                    <button className="button-primary">
                        Request a call back <HiOutlineArrowDownLeft />
                    </button>
                </div>
            </div>    
        </section> 
    </> 
  )
}

export default Banner
