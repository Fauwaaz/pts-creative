import { AiFillContacts, AiOutlineCalendar } from "react-icons/ai"
import { TfiRulerPencil } from "react-icons/tfi"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiCalendar, BiEnvelope, BiLogoGoogle, BiPointer, BiSolidReport, BiUser, BiWorld } from "react-icons/bi"

export const home = [
  {
    icon: <AiOutlineCalendar size={40} />,
    title: "Expert Team",
    description: "Our diverse team of digital marketing specialists brings years of experience and innovative thinking.",
  },
  {
    icon: <TfiRulerPencil size={40} />,
    title: "Proven Results",
    description: "We focus on delivering measurable results. Our methods are rooted in data and analytics."
  },
  {
    icon: <VscFileSubmodule size={40} />,
    title: "Client-Centric Approach",
    description: "We prioritize your business goals and work collaboratively to help you achieve them."
  },
  {
    icon: <BiUser size={40} />,
    title: "Tailored Solutions",
    description: "Every business is unique, so we customize our strategies to fit your specific needs and target audience."
  },
]

export const services = [
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
        icon: <AiOutlineCalendar size={30} />,
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
        icon: <BiUser size={30} />,
        title: "Customized Marketing Strategies",
      },
    ],
    cta2: "Want to learn more? Enquire Now",
    serviceSection: [
      {
        h3: "Our Key Digital Marketing Services",
        service: [
          {
            icon: <BiLogoGoogle size={40} />,
            title: "Search Engine Optimization (SEO)",
            desc: "Optimize your website for search engines and rank higher on Google. Our tailored SEO strategies improve visibility, enhance organic traffic, and help your business get found by your target audience.",
            serviceInclude: "Keyword research, On-page optimization, Technical SEO, Link building, and Local SEO."
          },
          {
            icon: <BiPointer size={40} />,
            title: "Pay-Per-Click (PPC) Advertising",
            desc: "Maximize your return on investment with targeted and data-driven PPC campaigns. We craft ad strategies that target the right audience and deliver quick results.",
            serviceInclude: "Google Ads, Social Media Ads, Display Advertising, and Retargeting."
          },
          {
            icon: <BiWorld size={40} />,
            title: "Social Media Marketing (SMM)",
            desc: "Build a powerful brand presence across popular social platforms. Our social media marketing services are designed to engage your audience, build brand loyalty, and drive traffic to your website.",
            serviceInclude: "Strategy Development, Content Creation, Campaign Management, and Social Media Advertising."
          },
          {
            icon: <BiCalendar size={40} />,
            title: "Content Marketing",
            desc: "Engage your audience with compelling content that not only informs but also converts. Our content marketing team creates impactful blogs, articles, infographics, and videos that align with your brand voice and audience needs.",
            serviceInclude: "Blog Writing, Copywriting, Video Production, and Infographics."
          },
          {
            icon: <BiEnvelope size={40} />,
            title: "Email Marketing",
            desc: "Nurture leads and convert them into customers with personalized email campaigns. Our email marketing services focus on segmentation, automation, and targeting to ensure your message reaches the right audience at the right time.",
            serviceInclude: "Email Campaign Strategy, Drip Campaigns, Newsletters, and Automated Emails."
          },
          {
            icon: <AiFillContacts size={40} />,
            title: "Conversion Rate Optimization (CRO)",
            desc: "Turn your website visitors into paying customers with our CRO services. We analyze user behavior and make data-driven adjustments to enhance the user experience and increase conversion rates.",
            serviceInclude: "A/B Testing, Landing Page Optimization, and Heatmap Analysis."
          },
          {
            icon: <BiSolidReport size={40} />,
            title: "Analytics & Reporting",
            desc: "Gain valuable insights into the performance of your digital campaigns. We provide in-depth analytics and transparent reporting to help you understand what's working and how to improve.",
            serviceInclude: "Google Analytics Setup, Campaign Tracking, and Custom Reporting."
          },
        ],
        desc: "At PTS Systems & Solutions, we are committed to delivering results through data-driven strategies and innovative solutions. Partner with us to elevate your business and achieve your digital marketing goals."
      }
    ],
    subCategory: [
      {
        slug: "pay-per-click",
        title: "Pay Per Click (PPC)",
        name: "Pay Per Click (PPC)",
        description: "pay per click",
        cover: "/",
        desc: [{ text: "Portray your brand aesthetics on the web / Design and create your brand's presence on the internet." }],
      },
      {
        slug: "search-engine-optimization",
        title: "Search Engine Optimization",
        name: "Search Engine Optimization",
        description: "Search Engine Optimization",
        cover: "/",
        desc: [{ text: "Portray your brand aesthetics on the web / Design and create your brand's presence on the internet." }],
      },
      {
        slug: "social-media-marketing",
        title: "Leading Social Media Marketing Services in India | PTS Systems & Solutions",
        name: "Social Media Marketing",
        description: "Boost your brand's visibility with expert social media marketing services from PTS Systems & Solutions. Grow your audience, engage customers, and drive conversions.",
        cover: "/",
        desc: [{ text: "Portray your brand aesthetics on the web / Design and create your brand's presence on the internet." }],
      },
      {
        slug: "social-media-optimization",
        title: "Social Media Optimization Services | PTS Systems & Solutions",
        name :"Social Media Optimization",
        description: "Enhance your online presence with PTS Systems & Solutions' expert Social Media Optimization services. Drive engagement, increase visibility, and grow your brand with tailored strategies. Contact us today!",
        cover: "/",
        desc: [{ text: "Portray your brand aesthetics on the web / Design and create your brand's presence on the internet." }],
      },
      {
        slug: "ecommerce-marketing",
        title: "Ecommerce Marketing",
        name: "E-commerce Marketing",
        description: "Ecommerce Marketing",
        cover: "/",
        desc: [{ text: "Portray your brand aesthetics on the web / Design and create your brand's presence on the internet." }],
      },
      {
        slug: "email-marketing",
        title: "Email Marketing",
        name: "Email Marketing",
        description: "Email Marketing",
        cover: "/",
        desc: [{ text: "Portray your brand aesthetics on the web / Design and create your brand's presence on the internet." }],
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Webdevelopment",
    cover: "/website-development.webp",
    desc: [{ text: "Portray your brand aesthetics on the web / Design and create your brand's presence on the internet." }],
  },
  {
    slug: "web-design",
    title: "Web Design",
    description: "Web Design",
    cover: "/web-design.webp",
    desc: [{ text: "Web design encompasses many different skills and disciplines in the production and maintenance of websites." }],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Mobile App Development",
    cover: "/mobiel-app-development.webp",
    desc: [{ text: "We'll create a user-friendly app that keeps customers coming back for more." }],
  },
  {
    slug: "strategy-and-branding",
    title: "Strategy & Branding",
    description: "Strategy & Branding",
    cover: "/Branding-Strategy.webp",
    desc: [{ text: "Branding and awareness are two critical components of a successful business or organization's marketing strategy." }],
  },
  {
    slug: "cloud-hosting",
    title: "Cloud Hosting",
    description: "Cloud Hosting",
    cover: "/cloud-hosting.webp",
    desc: [{ text: "This allows for greater scalability, flexibility, and reliability, as the resources of the network can be dynamically allocated to meet the changing needs of the website." }],
  },
  {
    slug: "web-hosting",
    title: "Web Hosting",
    description: "Web Hosting",
    cover: "/web-hosting.webp",
    desc: [{ text: "Boost your website's performance with our high-speed servers and optimized infrastructure. Enjoy faster load times and a smoother user experience." }],
  },
  {
    slug: "agile-methodology",
    title: "Agile Methodology",
    description: "Agile Methodology",
    cover: "/agile-methodology.webp",
    desc: [{ text: "From product ideation to design, development, release, and maintenance, we help you turn your vision into reality. We deliver strategic product development services for various lines of business by leveraging our years of established experience and expertise." }],
  },
]

export const testimonial = [
  {
    id: 1,
    name: "Amir",
    cover: "/Yaqeen Trading logo.webp",
    post: "Yaqeen Trading - CEO",
    desc: "We are thrilled with the results of our e-commerce website developed by PTS Systems. Their comprehensive approach, from design and development to marketing and SEO, has helped us achieve significant growth and reach a wider audience.",
  },
  {
    id: 2,
    name: "Kalyani",
    cover: "/Kalyani Creation.webp",
    post: "Kalyani Creation - Founder",
    desc: "The Kalyani Creations Saree website, expertly crafted by the PTS Systems and Solutions team, has transformed our online presence. The visually stunning design and seamless user experience have significantly boosted our online sales and customer satisfaction",
  },
  {
    id: 3,
    name: "Hussain Danewala",
    cover: "/Wipro_Logo.webp",
    post: "Wipro International - CEO",
    desc: "The PTS team's expertise in e-commerce development was instrumental in creating a visually stunning and user-friendly website for Wipro's international catalog. Their strategic SEO approach has significantly boosted our online visibility and generated valuable leads",
  },
  {
    id: 4,
    name: "Trupti Dhane",
    cover: "/AGT-Logo.webp",
    post: "Avant-Garde Technology - Founder",
    desc: "PTS Systems's team expertly crafted a visually stunning and user-friendly e-commerce website that has significantly boosted our online sales. Their creative social media marketing campaigns, featuring captivating reels and engaging content, have expanded our brand reach and driven customer engagement.",
  },
]

export const showcase = [
  {
    id: 1,
    title: "Neon Lights",
    cover: "/s1.jpg",
    category: "DIGITAL MARKETING",
  },
  {
    id: 2,
    title: "Futuristic Furniture",
    category: "WEBSITES",
    cover: "/s2.jpg",
  },
  {
    id: 3,
    title: "Smart Living",
    cover: "/s3.jpg",
    category: "WEBSITES",
  },
  {
    id: 4,
    title: "Light Painting",
    cover: "/s4.jpg",
    category: "BRANDING	",
  },
  {
    id: 5,
    title: "Ideabox",
    cover: "/s5.jpg",
    category: "BRANDING	",
  },
  {
    id: 5,
    title: "VR Experience",
    cover: "/s6.jpg",
    category: "WEBSITES	",
  },
]

export const brand = [
  {
    id: 1,
    cover: "/JVR.webp",
  },
  {
    id: 2,
    cover: "/YQT.webp",
  },
  {
    id: 3,
    cover: "/KC.webp",
  },
  {
    id: 4,
    cover: "/WIT.webp",
  },
  {
    id: 5,
    cover: "/AGT.webp",
  }
]

export const blogdata = [
  {
    slug: 'ligula-vel-urna-accumsan-placerat',
    title: "Ligula vel urna accumsan placerat",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugit?",
    cover: "/b1.webp",
    category: "INDUSTRY",
    date: "JANUARY 12, 2023",
    content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum voluptates asperiores itaque totam iusto in assumenda obcaecati. Libero dolore modi veniam at, soluta sapiente rerum nemo ab sint temporibus? Soluta corporis nobis, officia sed sapiente dolor nulla vero, aliquam at, harum debitis commodi? Odio excepturi laudantium optio cumque id?'
  },
  {
    slug: 'Dont-underestimate-the-lorem-ipsum-dolor-amet',
    title: "Don't underestimate the lorem ipsum dolor amet",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugit?",
    cover: "/b2.jpg",
    category: "TIPS & TRICKS",
    date: "OCTOBER 20, 2023",
    content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum voluptates asperiores itaque totam iusto in assumenda obcaecati. Libero dolore modi veniam at, soluta sapiente rerum nemo ab sint temporibus? Soluta corporis nobis, officia sed sapiente dolor nulla vero, aliquam at, harum debitis commodi? Odio excepturi laudantium optio cumque id? this is second'
  },
  {
    slug: "building-the-real-vr-lorem-ipsum-dolor-amet-glavrida-from-a-scratch",
    title: "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
    description: "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
    cover: "/b3.jpg",
    category: "TIPS & TRICKS",
    date: "OCTOBER 9, 2023",
    content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum voluptates asperiores itaque totam iusto in assumenda obcaecati. Libero dolore modi veniam at, soluta sapiente rerum nemo ab sint temporibus? Soluta corporis nobis, officia sed sapiente dolor nulla vero, aliquam at, harum debitis commodi? Odio excepturi laudantium optio cumque id?'
  },
  {
    slug: "what-eleifend-posuere-tincidunt",
    title: "What eleifend posuere tincidunt",
    description: "What eleifend posuere tincidunt",
    cover: "/b4.jpg",
    category: "EVENTS",
    date: "OCTOBER 8, 2023",
    content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum voluptates asperiores itaque totam iusto in assumenda obcaecati. Libero dolore modi veniam at, soluta sapiente rerum nemo ab sint temporibus? Soluta corporis nobis, officia sed sapiente dolor nulla vero, aliquam at, harum debitis commodi? Odio excepturi laudantium optio cumque id?'
  },
]

export const teamdata = [
  {
    id: 1,
    title: "Alexander Black",
    cover: "/t1.jpg",
    post: "FOUNDER, CEO",
  },
  {
    id: 2,
    title: "Anna Kovalenko",
    cover: "/t2.jpg",
    post: "FINANCE DIRECTOR",
  },
  {
    id: 3,
    title: "Tiffany White",
    cover: "/t3.jpg",
    post: "CREATIVE DIRECTOR",
  },
  {
    id: 4,
    title: "Richard Greenwood",
    cover: "/t4.jpg",
    post: "PROGRAMMER",
  },
  {
    id: 5,
    title: "Jessica Brown",
    cover: "/t5.jpg",
    post: "MARKETING DIRECTOR",
  },
  {
    id: 6,
    title: "Gregory Windstorm",
    cover: "/t6.jpg",
    post: "ACCOUNTING MANAGER",
  },
  {
    id: 7,
    title: "Anna Red",
    cover: "/t7.jpg",
    post: "PROJECT MANAGER",
  },
  {
    id: 8,
    title: "Join our team!",
    cover: "/t8.jpg",
    post: "",
  },
]

export const subMenu = [
  {
    "id": 1,
    "title": "Digital Marketing",
    "services": [
      {
        "name": "Pay Per Click (PPC)",
        "href": "/services/digital-marketing/categories/pay-per-click"
      },
      {
        "name": "Search Engine Optimization",
        "href": "/services/digital-marketing/categories/search-engine-optimization"
      },
      {
        "name": "Social Media Marketing",
        "href": "/services/digital-marketing/categories/social-media-marketing"
      },
      {
        "name": "Social Media Optimization",
        "href": "/services/digital-marketing/categories/social-media-optimization"
      },
      {
        "name": "Ecommerce Marketing",
        "href": "/services/digital-marketing/categories/ecommerce-marketing"
      },
      {
        "name": "Email Marketing",
        "href": "/services/digital-marketing/categories/email-marketing"
      },
    ]
  },
  {
    "id": 2,
    "title": "Website Development",
    "services": [
      {
        "name": "Wordpress Website Development",
        "href": "/"
      },
      {
        "name": "PHP Web Development",
        "href": "/"
      },
      {
        "name": "E-commerce Development",
        "href": "/"
      },
      {
        "name": "Shopify Website Development",
        "href": "/"
      },
      {
        "name": "CMS Development",
        "href": "/"
      },
      {
        "name": "CRM Development",
        "href": "/"
      }
    ]
  },
  {
    "id": 3,
    "title": "Branding",
    "services": [
      {
        "name": "Logo Design",
        "href": "/"
      },
      {
        "name": "UI/UX Design",
        "href": "/"
      },
      {
        "name": "Packaging Design",
        "href": "/"
      },
      {
        "name": "Company Profile Design",
        "href": "/"
      }
    ]
  },
  {
    "id": 4,
    "title": "Videos Creation",
    "services": [
      {
        "name": "Explainer Videos",
        "href": "/"
      },
      {
        "name": "Educational Videos",
        "href": "/"
      },
      {
        "name": "Tutorial & How-to Videos",
        "href": "/"
      },
      {
        "name": "Commercial Videos",
        "href": "/"
      },
      {
        "name": "Whiteboard Animation",
        "href": "/"
      },
      {
        "name": "Social Media Videos",
        "href": "/"
      },
      {
        "name": "Ecommerce Product Videos",
        "href": "/"
      }
    ]
  },
  {
    "id": 4,
    "title": "Graphic Design",
    "services": [
      {
        "name": "Social Media Creatives",
        "href": "/"
      }
    ]
  }
]