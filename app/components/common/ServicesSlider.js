"use client";

import { services } from "@/assets/data/services";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import IconBox from "@/app/components/common/IconBox"
import { Title } from "./Title";

const ServicesSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        arrow: false,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    const service = services.find((service) => service.slug);

    return (
        <section>
            <div className="py">
                {service && service.serviceSection && service.serviceSection.map((item, index) => {
                    return (
                        <div key={index}>
                            <Title title="Our Services" className="" />
                            <h3>{item.h3}</h3>
                            <div className="slider-container py">
                                <Slider {...settings}>
                                    {item.service.map((item, index) => {
                                        return (
                                            <IconBox data={item} key={index} includes={"Services Includes: "} path={`${service.slug}/categories`} />
                                        )
                                    })}
                                </ Slider>
                            </div>
                            <p className="desc">{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ServicesSlider