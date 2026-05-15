export const figmaAssets = {
  figmaBusinessPartners: "/figma-assets/image-fills/1958cc39abc0ad658a9c5454fb531e80c31f464e.png",
  figmaBuilding: "/figma-assets/image-fills/49ea5afcd08e354d2128485561e0136b723e384e.png",
  figmaFieldHero: "/figma-assets/image-fills/d50005e607480723ef80c8b7ba3864acdbcd1a39.png",
  figmaTeamPortrait: "/figma-assets/image-fills/3575adb86737d96194fbaf002a8bc285b11fb790.png",
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
  ourWorkFeature: "/home/our-work-feature-source.png",
  ourWorkTall: "/home/our-work-tall-source.png",
  productOrbit: "/what-product-orbit.svg",
  servicesCaseStudy: "/what/services-case-study.png",
  servicesTestimonialAvatar: "/what/services-testimonial-avatar.png",
  servicesTestimonialBg: "/what/services-testimonial-bg.png",
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
  footerCopyright: "\u00A9 2025 HYBR GROUP",
  socialLinks: ["Instagram", "Facebook", "TikTok", "LinkedIn", "X", "YouTube", "Medium"],
  wordpressEditable: [
    "Pages and section copy",
    "Navigation and footer labels",
    "Services, products, impact stats, and timeline entries",
    "Case studies, articles, webinars, and news",
    "Team members, careers, testimonials, and contact details",
    "Images and downloadable resources",
  ],
} as const;
