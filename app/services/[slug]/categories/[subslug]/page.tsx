import { Metadata } from "next";
import { Title, TitleSm } from "@/app/components/common/Title";
import BackHistory from "@/app/components/common/BackHistory";
import { services } from "@/assets/data/services";
import Link from "next/link";
import { HiOutlineArrowDownLeft } from "react-icons/hi2";

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
        {service.subCategory?.map((item) => {
          if (item.slug === subslug) {
            return (
              <>
                <h1>{item.desc.map((text) => text.text)}</h1>
                <p className="desc">{item.paragraph1}</p>
              </>
            )
          }
        })}

        {service.subCategory?.map((item, index) => {
          if (item.slug === subslug) {
            return (
              <div key={index}>
                {service.serviceSection &&
                  service.serviceSection.length > 0 &&
                  item.name &&
                  item.ctaSection &&
                  item.ctaSection.length > 0 &&
                  item.ctaSection.every((cta) => cta.text || cta.button) &&
                  item.servicesIncludes &&
                  item.servicesIncludes.length > 0 &&
                  (
                    <>
                      <div>
                        <h3 className="title">{item.serviceHeading}</h3>
                        {item.servicesIncludes.length > 0 &&
                          item.servicesIncludes.every((data) => data.cta || data.heading || data.paragraph) &&
                          item.servicesIncludes?.map((data, index) => {
                            return (
                              <div key={index}>
                                <ul style={{ listStyle: "circle" }} className="text-left">
                                  <li>
                                    <p className="desc">{data.paragraph}</p>
                                    {data.cta.every((data) => data.button || data.text) &&
                                      <p className="blue">{data.cta.map((c) => {
                                        return (
                                          <>
                                            <span className="desc-p">- {c.text}</span> &nbsp;
                                            <Link href="/contact" className="blue">{c.button}</Link>
                                          </>
                                        )
                                      })}</p>
                                    }
                                  </li>
                                </ul>
                              </div>
                            )
                          })}
                        <div className="banner text-center">
                          <div className="container">
                            <div className="banner-content">
                              <h4 className="title-logo">{item.name}</h4>
                              <span className="desc" style={{ color: "white" }}>
                                {item.ctaSection?.map((p) => p.text)}
                              </span>
                            </div>
                            <br />
                            <Link href="/contact" className="button-primary">
                              {item.ctaSection?.map((c) => c.button)} &nbsp;
                              <HiOutlineArrowDownLeft />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
              </div>
            )
          }
        })}
      </section>
  );
};

export default SubServicePage;