import { services } from "@/assets/data/dummydata";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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
        <div className="container">
            <Image 
                className="rounded-lg"
                src={service.cover}
                width={600}
                height={450}
                alt={service.title}
                unoptimized={true}
            />
            <h1 className="">{service.title}</h1>
            {service.desc.map((text, i) => (
                <p key={i} className="desc"> - {text.text}</p>
            ))}
        </div>
    );
};

export default SingleService;