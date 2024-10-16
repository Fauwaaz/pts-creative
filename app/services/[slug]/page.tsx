import { services } from "@/assets/data/dummydata";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Title, TitleSm } from "@/app/components/common/Title";
import Link from "next/link";
import ServicesBanner from "@/app/components/ServicesBanner";
import ServicesSlider from "@/app/components/common/ServicesSlider";

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
                    {service.card && (
                        <div className="serviceSection2">
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
                            <br />
                            {service.cta2 && (
                                <Link href="/contact" className="button-primary">
                                    {service.cta2}
                                </Link>
                            )}
                        </div>
                    )}
                    {service.serviceSection && (
                        <ServicesSlider />
                    )}
                </div>
            </div>
            <ServicesBanner />
        </section>
    );
};

export default SingleService;