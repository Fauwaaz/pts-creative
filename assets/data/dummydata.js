import { AiOutlineCalendar } from "react-icons/ai"
import { TfiRulerPencil } from "react-icons/tfi"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiAnalyse, BiEnvelope, BiLogoGoogle, BiSolidUser, BiUser, BiWorld } from "react-icons/bi"
import { HiCursorClick, HiPencilAlt } from "react-icons/hi"

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
        desc: [{text: "Pay Per Click (PPC) Services at PTS Systems & Solutions",}],
      },
      {
        slug: "search-engine-optimization",
        title: "Search Engine Optimization",
        name: "Search Engine Optimization",
        description: "Search Engine Optimization",
        cover: "/",
        desc: [{ text: "Search Engine Optimization Services at PTS Systems & Solutions" }],
        paragraph1: "In today's competitive digital landscape, achieving top rankings on search engines like Google is critical to your business success. At PTS Systems & Solutions, we offer comprehensive Search Engine Optimization (SEO) services that help businesses in India and globally increase their online visibility, attract high-quality traffic, and drive conversions.Our SEO strategies are tailored to your specific needs, ensuring that your website not only ranks higher but also delivers a great user experience. Whether you're looking to dominate local searches or improve your organic rankings on a national scale, our expert team of SEO professionals will craft a custom strategy designed to achieve your goals." ,
      },
      {
        slug: "social-media-marketing",
        title: "Leading Social Media Marketing Services in India | PTS Systems & Solutions",
        name: "Social Media Marketing",
        description: "Boost your brand's visibility with expert social media marketing services from PTS Systems & Solutions. Grow your audience, engage customers, and drive conversions.",
        cover: "/",
        desc: [{ text: "Social Media Marketing Servics at PTS Systems & Solutions" }],
        paragraph1: "In today's digital age, a strong social media presence is essential for businesses looking to connect with their target audience. At PTS Systems & Solutions, we offer comprehensive Social Media Marketing (SMM) services designed to help your brand stand out, engage customers, and drive conversions. As one of India's leading digital marketing agencies, with offices in Mumbai and Pune, we craft tailored social media strategies to meet your unique business goals.Our team of social media experts manages everything from creating engaging content to running highly targeted ad campaigns, ensuring that your brand remains top of mind for your audience.",
      },
      {
        slug: "social-media-optimization",
        title: "Social Media Optimization Services | PTS Systems & Solutions",
        name :"Social Media Optimization",
        description: "Enhance your online presence with PTS Systems & Solutions' expert Social Media Optimization services. Drive engagement, increase visibility, and grow your brand with tailored strategies. Contact us today!",
        cover: "/",
        desc: [{ text: "Social Media Optimization (SMO) Services at PTS Systems & Solutions" }],
        paragraph1: "In the current digital age, social media has evolved beyond a simple communication tool; it is now a vital platform for businesses to connect with their audience. At PTS Systems & Solutions, we specialize in Social Media Optimization (SMO) services that can transform your online presence and help you effectively reach your target audience.",
      },
      {
        slug: "ecommerce-marketing",
        title: "Ecommerce Marketing",
        name: "E-commerce Marketing",
        description: "Ecommerce Marketing",
        cover: "/",
        desc: [{ text: "Ecommerce Marketing Services at PTS Systems & Solutions" }],
        paragraph1: "",
      },
      {
        slug: "email-marketing",
        title: "Email Marketing",
        name: "Email Marketing",
        description: "Email Marketing",
        cover: "/",
        desc: [{ text: "Email Marketing Services at PTS Systems & Solutions" }],
        paragraph1: "",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Webdevelopment",
    cover: "/website-development.webp",
    desc: [{ text: "Portray your brand aesthetics on the web / Design and create your brand's presence on the internet."}],
    subCategory: [
      {
        slug: "wordpress-website-development",
        title: "Wordpress Website Development",
        name: "Wordpress Website Development",
        description: "wordpress website development",
        cover: "/",
        desc: [{ text: "Wordpress Website Development Services at PTS Systems & Solutions" }],
        paragraph1: "",
      },
      {
        slug: "php-web-development",
        title: "PHP Web Development",
        name: "PHP Web Development",
        description: "PHP Web Development",
        cover: "/",
        desc: [{ text: "PHP Web Development Services at PTS Systems & Solutions" }],
        paragraph1: "",
      },
    ],
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
    "href": "/services/digital-marketing",
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
    "href": "/services/web-development",
    "services": [
      {
        "name": "Wordpress Website Development",
        "href": "/services/web-development/categories/wordpress-website-development"
      },
      {
        "name": "PHP Web Development",
        "href": "/services/web-development/categories/php-web-development"
      },
      {
        "name": "E-commerce Development",
        "href": "/services/web-development/categories/ecommerce-development"
      },
      {
        "name": "Shopify Website Development",
        "href": "/services/web-development/categories/shopify-website-development"
      },
      {
        "name": "CMS Development",
        "href": "/services/web-development/categories/cms-development"
      },
      {
        "name": "CRM Development",
        "href": "/services/web-development/categories/crm-development"
      }
    ]
  },
  {
    "id": 3,
    "title": "Branding",
    "href": "/services/branding",
    "services": [
      {
        "name": "Logo Design",
        "href": "/services/branding/categories/logo-design"
      },
      {
        "name": "UI/UX Design",
        "href": "/services/branding/categories/ui-ux-design"
      },
      {
        "name": "Packaging Design",
        "href": "/services/branding/categories/packaging-design"
      },
      {
        "name": "Company Profile Design",
        "href": "/services/branding/categories/company-profile-design"
      }
    ]
  },
  {
    "id": 4,
    "title": "Videos Creation",
    "href": "/services/videos-creation",
    "services": [
      {
        "name": "Explainer Videos",
        "href": "/services/videos-creation/categories/explainer-videos"
      },
      {
        "name": "Educational Videos",
        "href": "/services/videos-creation/categories/educational-videos"
      },
      {
        "name": "Tutorial & How-to Videos",
        "href": "/services/videos-creation/categories/tutorial-how-to-videos"
      },
      {
        "name": "Commercial Videos",
        "href": "/services/videos-creation/categories/commercial-videos"
      },
      {
        "name": "Whiteboard Animation",
        "href": "/services/videos-creation/categories/whiteboard-animation"
      },
      {
        "name": "Social Media Videos",
        "href": "/services/videos-creation/categories/social-media-videos"
      },
      {
        "name": "Ecommerce Product Videos",
        "href": "/services/videos-creation/categories/ecommerce-product-videos"
      }
    ]
  },
  {
    "id": 4,
    "title": "Graphic Design",
    "href": "/services/graphic-design",
    "services": [
      {
        "name": "Social Media Creatives",
        "href": "/services/graphic-design/categories/social-media-creatives"
      }
    ]
  }
]