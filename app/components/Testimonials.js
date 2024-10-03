"use client";

import { Title } from '@/app/components/common/Title'
import { testimonial } from '@/assets/data/dummydata'
import Image from 'next/image';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="slick-arrow">
            <button className='next' onClick={onClick}>
                <RiArrowRightLine />
            </button>
        </div>
    );
}



function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="slick-arrow">
            <button className='prev' onClick={onClick}>
                <RiArrowLeftLine />
            </button>
        </div>
    );
}

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
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

    return (
        <>
            <section className="testimonial">
                <div className="container">

                    <div className="heading-title">
                        <Title title="What Our Clients Are Saying" />
                    </div>
                    <div className="cards slider-container">
                        <Slider {...settings}>
                            {testimonial.map((user, i) => (
                                <div key={i}>
                                    <div className="card">
                                        <div className="image">
                                            <div className="img">
                                                <Image
                                                    src={user.cover}
                                                    alt={user.cover}
                                                    width={130}
                                                    height={130}
                                                    quality={100}
                                                />
                                            </div>
                                            <div className="img-text">
                                                <h3>{user.name}</h3>
                                                <span>{user.post}</span>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <p>{user.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
