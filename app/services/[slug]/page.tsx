"use client";

import { services } from "@/assets/data/dummydata";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Title, TitleSm } from "@/app/components/common/Title";
import Link from "next/link";
import IconBox from "@/app/components/common/IconBox"
import ServicesBanner from "@/app/components/ServicesBanner";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = services.find((service) => service.slug === params.slug);

    if (!service) {
        return {
            title: 'Service Not Found',
            description: 'The requested service could not be found.',
        };
    }

    return {
        title: `${service.title} | Services`,
        description: service.description,
        robots: "index, follow",
    };
}

const SingleService = ({ params }: { params: { slug: string } }) => {
    const service = services.find((service) => service.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <section className="bg-top">
            <div className='heading-title container'>
                <TitleSm title='SERVICES' /> <br />
                <Title title={service.title} className='title-bg' />
                <h1>{service.h1}</h1>
                <div className="py">
                    {service.desc.map((text, i) => (
                        <p key={i} className="desc">{text.text}</p>
                    ))}
                    {service.cta1 && (
                        <Link href="/contact" className="button-secondary">
                            {service.cta1}
                        </Link>
                    )}
                </div>

                <div className="py">
                    <h2>{service.h2}</h2>
                    <span>{service.h2Desc}</span>
                    <div className="grid-5 py">
                        {service && service.card && service.card.map((item, index) => {
                            return (
                                <div key={index} className="box">
                                    <span className="blue">{item.icon}</span>
                                    <h3>{item.title}</h3>
                                </div>
                            )
                        })}
                    </div>
                    {service.cta2 && (
                        <Link href="/contact" className="button-primary">
                            {service.cta2}
                        </Link>
                    )}
                </div>

                <div className="py">
                    {service && service.serviceSection && service.serviceSection.map((item, index) => {
                        return (
                            <div key={index}>
                                <Title title="Our Services" className="" />
                                <h3>{item.h3}</h3>
                                <div className="grid-2 text-left py">
                                    {item.service.map((item, index) => {
                                        return (
                                            <IconBox data={item} key={index} includes={"Services Includes: "} />
                                        )
                                    })}
                                </div>
                                <p className="desc">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <ServicesBanner />
        </section>
    );
};

export default SingleService;