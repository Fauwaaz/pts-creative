import { Metadata } from "next";
import { services } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/app/components/common/Title";


export async function generateStaticParams() {
  const params: { slug: string; subslug: string; }[] = [];

  services.forEach((service) => {
    if (service.subCategory) {
      service.subCategory.forEach((subcat) => {
        params.push({
          slug: service.slug,
          subslug: subcat.slug,
        });
      });
    }
  });

  return params; 
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; subslug: string };
}): Promise<Metadata> {
  const { slug, subslug } = params;
  const service = services.find(
    (service) =>
      service.slug === slug && service.subCategory?.map((item) => {
        if (item.slug === subslug) {
          return item.title;
        }
      })
  );

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.subCategory?.map((item) => {
      if (item.slug === subslug) {
        return item.title;
      }
    }).join('')} | Services`,
    description: service.subCategory?.map((item) => {
      if (item.slug === subslug) {
        return item.description;
      }
    }).join(''),
    robots: "index, follow",
  };
}

const SubServicePage = ({ params }: { params: { slug: string, subslug: string } }) => {
  const { slug, subslug } = params;

  const service = services.find(
    (service) =>
      service.slug === slug && service.subCategory?.map((item, index) => {
        if (item.slug === subslug) {
          return index;
        }
      })
  );

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <section className="heading-title">
      <TitleSm title={service.title} />
      <p>Categories</p>
      <Title title={service.subCategory?.map((item) => {
        if (item.slug === subslug) {
          return item.name;
        }
      })} className="title" />
    </section>
  );
};

export default SubServicePage;