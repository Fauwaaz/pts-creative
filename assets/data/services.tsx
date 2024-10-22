import { ReactElement } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiAnalyse, BiEnvelope, BiLogoGoogle, BiSolidUser, BiWorld } from "react-icons/bi";
import { HiCursorClick, HiPencilAlt } from "react-icons/hi";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";

interface CTA {
    text?: string;
    button?: string;
}

interface ServiceInclude {
    title: string;
    heading?: string;
    paragraph: string;
    cta: CTA[];
}

interface ServiceSection {
    h3: string;
    service: {}[];
    desc: string;
}

interface SubCategory {
    slug: string;
    title: string;
    name: string;
    description: string;
    cover: string;
    desc: { text: string }[];
    ctaSection: { text: string; button: string }[];
    paragraph1?: string;
    servicesIncludes?: ServiceInclude[];
    serviceHeading: string;
    whyPtsSection:{heading: string; whyList: {id: number; title: string; desc: string}[]}[];
}

interface Service {
    slug: string;
    title: string;
    description: string;
    cover: string;
    h1: string;
    h2: string;
    h2Desc: string;
    card: { icon: ReactElement; title: string }[];
    desc: { text: string }[];
    cta1: string;
    cta2: string;
    subCategory: SubCategory[];
    serviceSection: ServiceSection[];
}

export const services: Service[] = [
    {
        slug: "digital-marketing",
        title: "Digital Marketing",
        description: "Digital Marketing",
        cover: "/digital-marketing.webp",
        h1: "Your Success Story Starts Now!",
        desc: [{ text: "PTS Systems Solutions Pvt. Ltd. is a full-suite best digital marketing agency in India, offering a wide range of digital marketing services globally. Turn your business into a sales engine today, generating revenue 3 times faster than comparable markets. We offer a comprehensive suite of digital marketing services designed to help businesses thrive in the ever-evolving digital landscape. Our goal is to drive measurable results that align with your business objectives, whether you're looking to increase brand awareness, generate leads, or boost conversions." }],
        cta1: "Get Started Today!",
        h2: "Everything starts with a Marketing Plan",
        h2Desc: "Let our skilled talent unleash the full revenue potential of your business, creating a lucrative success story. Want to find out how we do it?",
        card: [
            {
                icon: <BiSolidUser size={30} />,
                title: "Amazing communication",
            },
            {
                icon: <TfiRulerPencil size={30} />,
                title: "Define campaign objectives",
            },
            {
                icon: <AiOutlineCalendar size={30} />,
                title: "Conduct market research",
            },
            {
                icon: <VscFileSubmodule size={30} />,
                title: "Identify target audience",
            },
            {
                icon: <BiAnalyse size={30} />,
                title: "Customized Marketing Strategies",
            },
        ],
        cta2: "Want to learn more? Enquire Now",
        serviceSection: [
            {
                h3: "Our Key Digital Marketing Services",
                service: [
                    {
                        slug: "search-engine-optimization",
                        icon: <BiLogoGoogle size={40} />,
                        title: "Search Engine Optimization (SEO)",
                        desc: "Optimize your website for search engines and rank higher on Google. Our tailored SEO strategies improve visibility, enhance organic traffic, and help your business get found by your target audience.",
                        serviceInclude: "Keyword research, On-page optimization, Technical SEO, Link building, and Local SEO."
                    },
                    {
                        slug: "pay-per-click",
                        icon: <HiCursorClick size={40} />,
                        title: "Pay-Per-Click (PPC) Advertising",
                        desc: "Maximize your return on investment with targeted and data-driven PPC campaigns. We craft ad strategies that target the right audience and deliver quick results.",
                        serviceInclude: "Google Ads, Social Media Ads, Display Advertising, and Retargeting."
                    },
                    {
                        slug: "social-media-marketing",
                        icon: <BiWorld size={40} />,
                        title: "Social Media Marketing (SMM)",
                        desc: "Build a powerful brand presence across popular social platforms. Our social media marketing services are designed to engage your audience, build brand loyalty, and drive traffic to your website.",
                        serviceInclude: "Strategy Development, Content Creation, Campaign Management, and Social Media Advertising."
                    },
                    {
                        slug: "content-marketing",
                        icon: <HiPencilAlt size={40} />,
                        title: "Content Marketing",
                        desc: "Engage your audience with compelling content that not only informs but also converts. Our content marketing team creates impactful blogs, articles, infographics, and videos that align with your brand voice and audience needs.",
                        serviceInclude: "Blog Writing, Copywriting, Video Production, and Infographics."
                    },
                    {
                        slug: "email-marketing",
                        icon: <BiEnvelope size={40} />,
                        title: "Email Marketing",
                        desc: "Nurture leads and convert them into customers with personalized email campaigns. Our email marketing services focus on segmentation, automation, and targeting to ensure your message reaches the right audience at the right time.",
                        serviceInclude: "Email Campaign Strategy, Drip Campaigns, Newsletters, and Automated Emails."
                    },
                ],
                desc: "At PTS Systems & Solutions, we are committed to delivering results through data-driven strategies and innovative solutions. Partner with us to elevate your business and achieve your digital marketing goals."
            }
        ],
        subCategory: [
            {
                slug: "pay-per-click",
                title: "Pay Per Click (PPC)",
                name: "Pay Per Click",
                description: "pay per click",
                cover: "/",
                desc: [{
                    text: "Pay Per Click (PPC) Services at PTS Systems & Solutions",
                }],
                ctaSection: [
                    {
                        text: "Maximize ROI with targeted PPC campaigns. We develop and manage high-performing Google Ads, Bing Ads, and social media ads designed to drive traffic and boost sales.",
                        button: "Launch Your PPC Campaign Now!"
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "search-engine-optimization",
                title: "Search Engine Optimization",
                name: "Search Engine Optimization",
                description: "Search Engine Optimization",
                cover: "/",
                desc: [{
                    text: "Search Engine Optimization Services at PTS Systems & Solutions",
                }],
                paragraph1: "In today's competitive digital landscape, achieving top rankings on search engines like Google is critical to your business success. At PTS Systems & Solutions, we offer comprehensive Search Engine Optimization (SEO) services that help businesses in India and globally increase their online visibility, attract high-quality traffic, and drive conversions. Our SEO strategies are tailored to your specific needs, ensuring that your website not only ranks higher but also delivers a great user experience. Whether you're looking to dominate local searches or improve your organic rankings on a national scale, our expert team of SEO professionals will craft a custom strategy designed to achieve your goals.",
                ctaSection: [
                    {
                        text: "Improve your website's visibility on major search engines like Google. Our expert team uses advanced SEO techniques to help you rank higher, attract more visitors, and increase conversions.",
                        button: "Get Your Free SEO Audit Today!"
                    }
                ],
                serviceHeading: "Our SEO Services Include",
                servicesIncludes: [
                    {
                        title: "On-Page SEO Optimization",
                        paragraph: "We optimize your website's content and structure to make it search engine-friendly. This includes optimizing meta tags, headings, URLs, and images to improve your site's relevancy for target keywords. We also ensure that your content is high-quality, engaging, and aligned with user intent.",
                        cta: [
                            { text: "Want to improve your website's content for SEO?" },
                            { button: "Contact us today!" }
                        ]
                    },
                    {
                        title: "Off-Page SEO & Link Building",
                        paragraph: "We boost your site's authority and trustworthiness through ethical link-building strategies. Our team acquires high-quality backlinks from authoritative websites, increasing your domain authority and improving your rankings in search engines.",
                        cta: [
                            { text: "Need authoritative backlinks?" },
                            { button: "Let's build your off-page SEO strategy" }
                        ]
                    },
                    {
                        title: "Technical SEO Services",
                        paragraph: "Our technical SEO audits identify and fix issues related to website speed, mobile responsiveness, indexing, and crawlability. We ensure your website's technical setup is fully optimized for search engines, allowing it to rank higher and provide a seamless user experience.",
                        cta: [
                            { text: "Is your website slow or facing crawl issues?" },
                            { button: " Request a technical SEO audit now!" }
                        ]
                    },
                    {
                        title: "Local SEO Optimization",
                        paragraph: "For businesses targeting specific geographic locations, our local SEO strategies will help you rank higher in local search results. We optimize your Google My Business profile, enhance your local listings, and implement geo-targeted keywords to ensure your business is easily found by nearby customers.",
                        cta: [
                            { text: "Need more customers from your local area?" },
                            { button: "Boost your local SEO now" }
                        ]
                    },
                    {
                        title: "Content Marketing & SEO",
                        paragraph: "Our team creates engaging, SEO-friendly content that not only ranks well but also resonates with your audience. From blogs and articles to product descriptions and landing pages, we ensure your content drives traffic and converts visitors into customers.",
                        cta: [
                            { text: "Looking for SEO-optimized content?" },
                            { button: "Get started with our content marketing services" }
                        ]
                    },
                    {
                        title: "Ecommerce SEO",
                        paragraph: "For online stores, we offer specialized Ecommerce SEO services designed to increase product visibility, drive traffic, and boost sales. We optimize your product pages, category pages, and site architecture to improve your rankings on search engines.",
                        cta: [
                            { text: "Want more visibility for your online store?" },
                            { button: "Talk to our Ecommerce SEO experts" }
                        ]
                    },
                    {
                        title: "SEO Audits & Reporting",
                        paragraph: "We provide comprehensive SEO audits to evaluate your website's current performance and identify areas for improvement. Our detailed reports offer actionable insights and include keyword rankings, traffic analysis, and suggestions to further enhance your SEO strategy.",
                        cta: [
                            { text: "Curious about your website's SEO health?" },
                            { button: "Get a free SEO audit today" }
                        ]
                    },
                ],
                whyPtsSection: [
                    {
                        heading: "Why Choose PTS Systems & Solutions for SEO?",
                        whyList: [
                            {
                                id: 1,
                                title: "Proven Results:",
                                desc: "We deliver SEO strategies that result in sustained growth in organic traffic and search rankings.",
                            },
                            {
                                id: 2,
                                title: "Tailored Strategies:",
                                desc: "No two businesses are alike. We create a custom SEO plan that aligns with your unique business goals.",
                            },
                            {
                                id: 3,
                                title: "Experienced Team:",
                                desc: "Our SEO professionals have years of experience working with clients across various industries, ensuring you get the best expertise.",
                            },
                            {
                                id: 4,
                                title: "Transparent Reporting:",
                                desc: "With regular, easy-to-understand reports, you'll always know how your SEO campaign is performing and the next steps for improvement.",
                            },
                        ]
                    },
                ]
            },
            {
                slug: "social-media-marketing",
                title: "Leading Social Media Marketing Services in India | PTS Systems & Solutions",
                name: "Social Media Marketing",
                description: "Boost your brand's visibility with expert social media marketing services from PTS Systems & Solutions. Grow your audience, engage customers, and drive conversions.",
                cover: "/",
                desc: [{
                    text: "Social Media Marketing Servics at PTS Systems & Solutions",
                }],
                paragraph1: "In today's digital age, a strong social media presence is essential for businesses looking to connect with their target audience. At PTS Systems & Solutions, we offer comprehensive Social Media Marketing (SMM) services designed to help your brand stand out, engage customers, and drive conversions. As one of India's leading digital marketing agencies, with offices in Mumbai and Pune, we craft tailored social media strategies to meet your unique business goals. Our team of social media experts manages everything from creating engaging content to running highly targeted ad campaigns, ensuring that your brand remains top of mind for your audience.",
                ctaSection: [
                    {
                        text: "Engage with your audience and grow your following through strategic social media campaigns. We create and manage content that resonates, helping you build strong connections and increase brand loyalty.",
                        button: "Grow Your Social Presence Today!"
                    }
                ],
                serviceHeading: "Our Social Media Marketing Services Include:",
                servicesIncludes: [
                    {
                        title: "Social Media Strategy Development",
                        paragraph: "We start by understanding your business goals and identifying your target audience. Based on this, we craft a tailored social media strategy that aligns with your brand's message and objectives, ensuring maximum reach and engagement.",
                        cta: [
                            { text: "Ready to develop a winning social media strategy?" },
                            { button: "Contact us today!" }
                        ]
                    },
                    {
                        title: "Off-Page SEO & Link Building",
                        paragraph: "We boost your site's authority and trustworthiness through ethical link-building strategies. Our team acquires high-quality backlinks from authoritative websites, increasing your domain authority and improving your rankings in search engines.",
                        cta: [
                            { text: "Need authoritative backlinks?" },
                            { button: "Let's build your off-page SEO strategy" }
                        ]
                    },
                    {
                        title: "Content Creation & Management",
                        paragraph: "We create visually appealing and engaging content that resonates with your audience. From social media posts to stories, reels, and ads, our team handles all aspects of content creation and management to maintain consistent brand messaging.",
                        cta: [
                            { text: "Need captivating content for your social platforms?" },
                            { button: " Let's create engaging content for your brand" }
                        ]
                    },
                    {
                        title: "Paid Social Media Advertising",
                        paragraph: "Our paid social campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter are designed to drive targeted traffic and increase your ROI. We manage everything from ad creation, targeting, budgeting, and monitoring for optimal performance.",
                        cta: [
                            { text: "Want to boost your brand with paid ads?" },
                            { button: " Explore our social media advertising solutions" }
                        ]
                    },
                    {
                        title: "Community Management",
                        paragraph: "Building a strong community is key to long-term social media success. We manage your social media accounts, engage with your followers, and foster conversations to keep your audience connected and engaged.",
                        cta: [
                            { text: "Looking to grow and engage your community?" },
                            { button: " Let us help with community management" }
                        ]
                    },
                    {
                        title: "Ecommerce SEO",
                        paragraph: "For online stores, we offer specialized Ecommerce SEO services designed to increase product visibility, drive traffic, and boost sales. We optimize your product pages, category pages, and site architecture to improve your rankings on search engines.",
                        cta: [
                            { text: "Want more visibility for your online store?" },
                            { button: "Talk to our Ecommerce SEO experts" }
                        ]
                    },
                    {
                        title: "Social Media Analytics & Reporting",
                        paragraph: "We provide detailed reports that track your social media performance, measuring key metrics such as reach, engagement, follower growth, and conversions. This data-driven approach allows us to continually optimize your strategy for better results.",
                        cta: [
                            { text: "Curious about your social media performance?" },
                            { button: "Request a detailed report today" }
                        ]
                    },
                ],
                whyPtsSection: [
                    {
                        heading: "Why Choose PTS Systems & Solutions for Social Media Marketing?",
                        whyList: [
                            {
                                id: 1,
                                title: "Custom Strategies:",
                                desc: "We create tailored social media plans designed to meet your business goals.",
                            },
                            {
                                id: 2,
                                title: "Multi-Platform Expertise:",
                                desc: " Our team is experienced in managing social media campaigns across all major platforms including Facebook, Instagram, LinkedIn, and more.",
                            },
                            {
                                id: 3,
                                title: "Engagement-Focused:",
                                desc: "We focus on creating content that not only attracts followers but also encourages meaningful engagement and customer loyalty.",
                            },
                            {
                                id: 4,
                                title: "Proven Results:",
                                desc: "We deliver campaigns that generate real results, from growing your audience to increasing website traffic and conversions.",
                            },
                        ]
                    },
                ]
            },
            {
                slug: "social-media-optimization",
                title: "Social Media Optimization Services | PTS Systems & Solutions",
                name: "Social Media Optimization",
                description: "Enhance your online presence with PTS Systems & Solutions' expert Social Media Optimization services. Drive engagement, increase visibility, and grow your brand with tailored strategies. Contact us today!",
                cover: "/",
                desc: [{
                    text: "Social Media Optimization (SMO) Services at PTS Systems & Solutions",
                }],
                paragraph1: "In the current digital age, social media has evolved beyond a simple communication tool; it is now a vital platform for businesses to connect with their audience. At PTS Systems & Solutions, we specialize in Social Media Optimization (SMO) services that can transform your online presence and help you effectively reach your target audience.",
                ctaSection: [
                    {
                        text: "Embrace the power of social media with PTS Systems & Solutions. Our dedicated team is ready to elevate your online presence and connect you with your audience like never before. Contact us today to learn more about our Social Media Optimization services and how we can help your business grow in the digital world.",
                        button: "Contact Us Today!"
                    }
                ],
                serviceHeading: "Our Approach",
                servicesIncludes: [
                    {
                        title: "Comprehensive Analysis",
                        paragraph: "Understanding your current social media presence, competitor strategies, and audience behavior.",
                        cta: [
                            { text: "" },
                            { button: "" }
                        ]
                    },
                    {
                        title: "Strategy Development",
                        paragraph: "Crafting a customized SMO strategy that aligns with your business goals and targets your audience effectively.",
                        cta: [
                            { text: "" },
                            { button: "" }
                        ]
                    },
                    {
                        title: "Content Creation",
                        paragraph: "Developing high-quality content that reflects your brand voice, including graphics, videos, and written posts.",
                        cta: [
                            { text: "" },
                            { button: "" }
                        ]
                    },
                    {
                        title: "Monitoring and Reporting",
                        paragraph: " Regularly tracking the performance of your social media campaigns and providing insightful reports that help you understand the impact of our strategies.",
                        cta: [
                            { text: "" },
                            { button: "" }
                        ]
                    },
                ],
                whyPtsSection: [
                    {
                        heading: "Why Social Media Optimization?",
                        whyList: [
                            {
                                id: 1,
                                title: "Increased Visibility:",
                                desc: "Our team will optimize your social media profiles to ensure they are easily discoverable. By enhancing keywords, descriptions, and visuals, we help your brand capture attention quickly.",
                            },
                            {
                                id: 2,
                                title: "Enhanced Engagement:",
                                desc: " Social media is all about interaction. We create engaging content tailored to your audience, ensuring your posts resonate and encourage shares, likes, and comments. This builds a loyal community around your brand.",
                            },
                            {
                                id: 3,
                                title: "Data-Driven Strategies:",
                                desc: "Using advanced analytics tools, we monitor your social media performance and adjust strategies accordingly. Our data-driven approach allows us to optimize your campaigns for maximum reach and engagement.",
                            },
                            {
                                id: 4,
                                title: "Targeted Campaigns",
                                desc: "Every business is unique, and so are its customers. We design targeted campaigns that align with your goals, whether it's brand awareness, lead generation, or community building.",
                            },
                            {
                                id: 5,
                                title: "Consistency Across Platforms",
                                desc: "We ensure that your brand message is consistent across all social media channels, from Facebook and Instagram to LinkedIn and Twitter. This consistency helps build brand trust and recognition.",
                            },
                        ]
                    },
                ],
            },
            {
                slug: "ecommerce-marketing",
                title: "Ecommerce Marketing",
                name: "E-commerce Marketing",
                description: "Ecommerce Marketing",
                cover: "/",
                desc: [{
                    text: "Ecommerce Marketing Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    },
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "email-marketing",
                title: "Email Marketing",
                name: "Email Marketing",
                description: "Email Marketing",
                cover: "/",
                desc: [{
                    text: "Email Marketing Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "Strengthen your brand's authority and attract new customers with valuable content. From blog posts to eBooks, we craft content that informs, engages, and converts.",
                        button: "Explore Our Email Services!"
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "content-marketing",
                title: "Content Marketing",
                name: "Content Marketing",
                description: "Content Marketing",
                cover: "/",
                desc: [{
                    text: "Content Marketing Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "Strengthen your brand's authority and attract new customers with valuable content. From blog posts to eBooks, we craft content that informs, engages, and converts.",
                        button: "Explore Our Content Services!"
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
        ],
    },
    {
        slug: "web-development",
        title: "Web Development",
        description: "Webdevelopment",
        cover: "/website-development.webp",
        desc: [{ text: "Portray your brand aesthetics on the web / Design and create your brand's presence on the internet." }],
        subCategory: [
            {
                slug: "wordpress-website-development",
                title: "Wordpress Website Development",
                name: "Wordpress Website Development",
                description: "wordpress website development",
                cover: "/",
                desc: [{
                    text: "Wordpress Website Development Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "Build a website that not only looks great but also converts visitors into customers. Our team creates stunning, user-friendly websites optimized for performance and usability.",
                        button: "Start Your Website Project!"
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "php-web-development",
                title: "PHP Web Development",
                name: "PHP Web Development",
                description: "PHP Web Development",
                cover: "/",
                desc: [{
                    text: "PHP Web Development Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "ecommerce-development",
                title: "Ecommerce Development",
                name: "E-commerce Development",
                description: "ecommerce website development",
                cover: "/",
                desc: [{
                    text: "E-commerce Development Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "shopify-website-development",
                title: "Shopify Website Development",
                name: "Shopify Website Development",
                description: "Shopify Website Development",
                cover: "/",
                desc: [{
                    text: "Shopify Website Development Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "cms-development",
                title: "CMS Development",
                name: "CMS Development",
                description: "CMS Development",
                cover: "/",
                desc: [{
                    text: "CMS Development Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "crm-development",
                title: "CRM Development",
                name: "CRM Development",
                description: "CRM Development",
                cover: "/",
                desc: [{
                    text: "CRM Development Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
        ],
        h1: "",
        h2: "",
        h2Desc: "",
        card: [],
        cta1: "",
        cta2: "",
        serviceSection: []
    },
    {
        slug: "branding",
        title: "Branding",
        description: "Branding",
        cover: "/web-design.webp",
        desc: [{ text: "Web design encompasses many different skills and disciplines in the production and maintenance of websites." }],
        subCategory: [
            {
                slug: "logo-design",
                title: "Logo Design",
                name: "Logo Design",
                description: "Logo Design",
                cover: "/",
                desc: [{
                    text: "Wordpress Website Development Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "ui-ux-design",
                title: "UI/UX Design",
                name: "UI/UX Design",
                description: "UI/UX Design",
                cover: "/",
                desc: [{
                    text: "UI/UX Design Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "packaging-design",
                title: "Packaging Design",
                name: "Packaging Design",
                description: "Packaging Design",
                cover: "/",
                desc: [{
                    text: "Packaging Design Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "company-profile-design",
                title: "Company Profile Design",
                name: "Company Profile Design",
                description: "Company Profile Design",
                cover: "/",
                desc: [{
                    text: "Company Profile Design Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
        ],
        h1: "",
        h2: "",
        h2Desc: "",
        card: [],
        cta1: "",
        cta2: "",
        serviceSection: []
    },
    {
        slug: "videos-creation",
        title: "Videos Creation",
        description: "Videos Creation",
        cover: "/mobiel-app-development.webp",
        desc: [{ text: "We'll create a user-friendly app that keeps customers coming back for more." }],
        subCategory: [
            {
                slug: "explainer-videos",
                title: "Explainer Videos",
                name: "Explainer Videos",
                description: "Explainer Videos",
                cover: "/",
                desc: [{
                    text: "Explainer Videos Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "educational-videos",
                title: "Educational Videos",
                name: "Educational Videos",
                description: "Educational Videos",
                cover: "/",
                desc: [{
                    text: "Educational Videos Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "tutorial-how-to-videos",
                title: "Tutorial & How-to Videos",
                name: "Tutorial & How-to Videos",
                description: "Tutorial & How-to Videos",
                cover: "/",
                desc: [{
                    text: "Tutorial & How-to Videos Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "commercial-videos",
                title: "Commercial Videos",
                name: "Commercial Videos",
                description: "Commercial Videos",
                cover: "/",
                desc: [{
                    text: "Commercial Videos Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "whiteboard-animation",
                title: "Whiteboard Animation",
                name: "Whiteboard Animation",
                description: "Whiteboard Animation",
                cover: "/",
                desc: [{
                    text: "Whiteboard Animation Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "social-media-videos",
                title: "Social Media Videos",
                name: "Social Media Videos",
                description: "Social Media Videos",
                cover: "/",
                desc: [{
                    text: "Social Media Videos Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
            {
                slug: "ecommerce-product-videos",
                title: "Ecommerce Product Videos",
                name: "Ecommerce Product Videos",
                description: "Ecommerce Product Videos",
                cover: "/",
                desc: [{
                    text: "Ecommerce Product Videos Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            },
        ],
        h1: "",
        h2: "",
        h2Desc: "",
        card: [],
        cta1: "",
        cta2: "",
        serviceSection: []
    },
    {
        slug: "graphic-design",
        title: "Graphic Design",
        description: "Graphic Design",
        cover: "/Branding-Strategy.webp",
        desc: [{ text: "Branding and awareness are two critical components of a successful business or organization's marketing strategy." }],
        subCategory: [
            {
                slug: "social-media-creatives",
                title: "Social Media Creatives",
                name: "Social Media Creatives",
                description: "Social Media Creatives",
                cover: "/",
                desc: [{
                    text: "Social Media Creatives Services at PTS Systems & Solutions",
                }],
                paragraph1: "",
                ctaSection: [
                    {
                        text: "",
                        button: ""
                    }
                ],
                serviceHeading: "",
                whyPtsSection: []
            }
        ],
        h1: "",
        h2: "",
        h2Desc: "",
        card: [],
        cta1: "",
        cta2: "",
        serviceSection: []
    }
];