import { services } from "@/assets/data/dummydata";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Title, TitleSm } from "@/app/components/common/Title";

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
            <div className='heading-title'>
                <TitleSm title='SERVICES' /> <br />
                <br />
                <Title title={service.title} className='title-bg' />
                {service.desc.map((text, i) => (
                    <p key={i} className="desc">{text.text}</p>
                ))}
            </div>
        </section>
    );
};

export default SingleService;