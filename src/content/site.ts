export const figmaAssets = {
  logoBlue: "/home/logo-blue.svg",
  logoWhite: "/home/footer-logo.svg",
  footerPattern: "/home/footer-pattern.svg",
  heroHome: "/home/hero.png",
  video: "/Webinar Card - horizontal tab.svg",
  play: "/home/play.svg",
  people: "/home/people.png",
  risk: "/home/risk-image.png",
  testimonial: "/home/testimonial.png",
  testimonialRing: "/home/testimonial-ring.png",
  news: "/home/news.png",
  contact: "/home/contact.png",
  caseStudy: "/home/case-study-remote.png",
  article: "/home/article.png",
  webinar: "/home/webinar.png",
  whoHero: "/home/who-hero.png",
} as const;

export const navigation = [
  { label: "Who We Are", href: "/who-we-are", key: "who" },
  { label: "What We Do", href: "/what-we-do", key: "what" },
  { label: "Insights", href: "/insights", key: "insights" },
] as const;

export const footerGroups = [
  {
    title: "Who We Are",
    links: [
      { label: "About Us", href: "/who-we-are/about-us" },
      { label: "Our Team", href: "/who-we-are/our-team" },
      { label: "Careers", href: "/who-we-are/careers" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Our Services", href: "/what-we-do/services" },
      { label: "Our Products", href: "/what-we-do/products" },
      { label: "Our Work", href: "/what-we-do/our-work" },
      { label: "Our Impact", href: "/what-we-do/our-impact" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Articles & Posts", href: "/insights/articles" },
      { label: "Webinars", href: "/insights/webinars" },
      { label: "News & Updates", href: "/insights/news" },
    ],
  },
  {
    title: "Contact us",
    links: [
      { label: "Address 1", href: "/contact" },
      { label: "Phone Number", href: "/contact" },
      { label: "Email Address", href: "/contact" },
    ],
  },
] as const;

export const siteContent = {
  brand: "HYBR",
  footerCopyright: "Copyright 2025 HYBR Group",
  socialLinks: ["Instagram", "X", "YouTube", "LinkedIn", "Medium"],
  wordpressEditable: [
    "Pages and section copy",
    "Navigation and footer labels",
    "Services, products, impact stats, and timeline entries",
    "Case studies, articles, webinars, and news",
    "Team members, careers, testimonials, and contact details",
    "Images and downloadable resources",
  ],
} as const;
