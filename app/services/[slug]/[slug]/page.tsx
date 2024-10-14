import { services } from "@/assets/data/dummydata";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: {
            firstSlug: service.slug,
            secondSlug: service.subCategory?.slug
        }
    }));
}

export async function generateMetadata({ params }: { params: { slug: { firstSlug: string; secondSlug: string } } }): Promise<Metadata> {
    const service = services.find(
        (service) => service.slug === params.slug.firstSlug && service.subCategory?.slug === params.slug.secondSlug
    );

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


const subServices = ({ params }: { params: { slug: { firstSlug: string; secondSlug: string } } }) => {
    const service = services.find(
      (service) => service.slug === params.slug.firstSlug && service.subCategory?.slug === params.slug.secondSlug
    );

    if (!service) {
        notFound();
    }

    return (
        <>
            <section className="heading-title">
                TITLE
            </section>
        </>
    )
}

export default subServices;