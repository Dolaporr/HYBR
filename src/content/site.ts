export const figmaAssets = {
  logoBlue:
    "https://www.figma.com/api/mcp/asset/a26cc075-62ac-4cd8-8253-a20930553d73",
  logoWhite:
    "https://www.figma.com/api/mcp/asset/8a8b4e5d-1e28-4ce2-992b-22d56c3ff03e",
  footerPattern:
    "https://www.figma.com/api/mcp/asset/7adca3e0-18c5-4818-bad1-f96b19cc6daa",
  heroHome:
    "https://www.figma.com/api/mcp/asset/95ed038c-dc61-43d7-bcca-fabdfe9d9264",
  video:
    "https://www.figma.com/api/mcp/asset/f44f734a-7019-4532-a28a-137a9824172a",
  play:
    "https://www.figma.com/api/mcp/asset/124322ca-2bc8-4620-9f59-7c3d59ecaea3",
  people:
    "https://www.figma.com/api/mcp/asset/72160259-5bd6-4fa5-93b6-9b5e49e2203e",
  risk:
    "https://www.figma.com/api/mcp/asset/9d3d7dbf-17f8-47eb-a97c-51ba20fc7236",
  testimonial:
    "https://www.figma.com/api/mcp/asset/23f7e594-6b2a-46cb-a2b3-3f7613073f60",
  testimonialRing:
    "https://www.figma.com/api/mcp/asset/8429c3de-4ca4-4b2b-ac9f-7f7af39e7f53",
  news:
    "https://www.figma.com/api/mcp/asset/c1b3d5e5-5a6a-4b39-bcda-911fa26c8a6d",
  contact:
    "https://www.figma.com/api/mcp/asset/e5edcada-e35b-42c2-82f7-9b6a9088e237",
  caseStudy:
    "https://www.figma.com/api/mcp/asset/2877131b-9065-458e-a13d-38f968a2becc",
  article:
    "https://www.figma.com/api/mcp/asset/be1ccff6-0457-4474-a409-4817f5ce47be",
  webinar:
    "https://www.figma.com/api/mcp/asset/379c66fb-c0d7-435d-8be1-ebda8b41e054",
};

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
];

export const siteContent = {
  brand: "HYBR",
  footerCopyright: "© 2025 HYBR Group",
  socialLinks: ["Instagram", "X", "YouTube", "LinkedIn", "Medium"],
  wordpressEditable: [
    "Pages and section copy",
    "Navigation and footer labels",
    "Services, products, impact stats, and timeline entries",
    "Case studies, articles, webinars, and news",
    "Team members, careers, testimonials, and contact details",
    "Images and downloadable resources",
  ],
};
