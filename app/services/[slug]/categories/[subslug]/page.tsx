import { Metadata } from "next";
import { services } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/app/components/common/Title";
import BackHistory from "@/app/components/common/BackHistory";
import Link from "next/link";
import { HiOutlineArrowDownLeft } from "react-icons/hi2";
import ServicesBanner from "@/app/components/ServicesBanner";

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
    return <h1 className="heading-title">Service Not Found</h1>;
  }

  return (
    <section className="heading-title container">
        <BackHistory />
        <TitleSm title={service.title} />
        <span className="">Categories</span>
        <br />
        <br />
        <Title title={service.subCategory?.map((item) => {
          if (item.slug === subslug) {
            return item.name;
          }
        })} className="title" />
      {service.subCategory?.map((item, index) => {
        if (item.slug === subslug) {
          return (
            <div key={index}>
              <h1>{item.desc.map((text) => text.text)}</h1>
              <p className="desc">{item.paragraph1}</p>
              {/* <div className="banner text-center">
                <div className="container">
                  <div className="banner-content">
                    <h4 className="title-logo">{item.name}</h4>
                    <span className="desc" style={{ color: "white" }}>
                      {item.ctaSection?.map((p: { paragraph: string }) => p.paragraph)}
                    </span>
                  </div>
                  <br />
                  <Link href="/contact" className="button-primary">
                    {item.ctaSection?.map((c: { cta: string }) => c.cta)} &nbsp;
                    <HiOutlineArrowDownLeft />
                  </Link>
                </div>
              </div> */}
            </div>
          )
        }
      })}
      <ServicesBanner />
    </section>
  );
};

export default SubServicePage;