export type CaseStudyListing = {
  image: string;
  imagePosition: string;
  title: string;
  body: string;
  shortBody: string;
  company: string;
  companyLogo?: string;
  href: string;
};

export const cocaColaCaseStudy: CaseStudyListing = {
  image: "/home/edit-flags/plastic-waste.jpg",
  imagePosition: "center center",
  title: "Eliminating Plastic Waste In Nigeria",
  body: "We delivered a holistic innovation programme to tackle a critical and urgent environmental problem which helps Coca-Cola to radically eliminate plastic waste.",
  shortBody: "How HYBR helped Coca-Cola move from ambition to locally developed waste-to-value innovations.",
  company: "Coca-Cola",
  companyLogo: "/logos/coca-cola-logo.svg",
  href: "/case-studies/one-liner",
};

export const absaDiscoveryCaseStudy: CaseStudyListing = {
  image: "/figma-assets/image-fills/1958cc39abc0ad658a9c5454fb531e80c31f464e-optimized.jpg",
  imagePosition: "center center",
  title: "Beyond the Obvious",
  body: "How Absa expanded its innovation radar across Africa by connecting defined business priorities with emerging technology ventures.",
  shortBody: "A discovery engine for finding the external innovations that matter to the business.",
  company: "Absa Group",
  companyLogo: "/logos/absa-logo.svg",
  href: "/case-studies/absa",
};

export const alitheiaCaseStudy: CaseStudyListing = {
  image: "/home/our-work-tall-source.png",
  imagePosition: "center center",
  title: "Operational and technical diagnostics",
  body: "We conducted robust due diligence and scale diagnostics for a female-led food company working towards a Series A round.",
  shortBody: "Operational and technical diagnostics for a growth-stage food company.",
  company: "Alitheia Capital",
  companyLogo: "/logos/alitheia-capital-white.png",
  href: "/case-studies/one-liner",
};

export const absaDiscoveryEditorial = {
  title: "Beyond the Obvious: How Absa Expanded Its Innovation Radar Across Africa",
  subtitle: "Absa wanted a disciplined way to connect business priorities with emerging technology ventures across Africa. HYBR helped extend the search from possibility to relevance.",
  facts: [
    ["Client", "Absa Group"],
    ["Sector", "Financial Services"],
    ["Region", "Pan-African Engagement"],
    ["HYBR practice", "Discover"],
    ["Period", "2021-2024"],
  ],
  sections: [
    {
      title: "The challenge: finding what mattered",
      copy: [
        "Financial-services ventures were emerging across payments, data, digital commerce, financial inclusion, AI and customer experience. For Absa, the challenge was not access to more fintech noise. It was knowing which external innovations genuinely mattered to the business.",
        "HYBR and SystemicLogic were appointed in 2021 to support a discovery effort built around strategic relevance rather than volume.",
      ],
    },
    {
      title: "Start with the business need",
      copy: [
        "The search began with customer problems, business priorities and capability gaps. Seven publicly disclosed innovation territories shaped the work: advanced data and analytics, artificial intelligence, digital adoption, inclusive banking, connected ecosystems, cashless economies and transforming internal operations.",
        "This framing made it possible to search with intent. A venture was not interesting simply because it was new; it had to be relevant to a real business question.",
      ],
    },
    {
      title: "A continent of possibilities - not one ecosystem",
      copy: [
        "African markets are not interchangeable. Local context, ecosystem relationships and commercial realities determine whether a seemingly promising venture can work in a specific market. HYBR's Southern Africa team in Cape Town contributed local intelligence alongside wider Pan-African scouting.",
        "Finding the obvious company is increasingly easy. Finding the right company still requires context.",
      ],
    },
    {
      title: "Building the discovery engine",
      copy: [
        "The discovery process moved through clear stages: define, search, scout, screen, match, engage and test. The work improved the signal-to-noise ratio by connecting each opportunity to a business sponsor, commercial fit and the practical questions of integration, procurement and regulation.",
        "The result was not a one-off database. It was a repeatable way to sense what was changing, identify the opportunities worth developing and learn from the market over time.",
      ],
    },
    {
      title: "What the work made possible",
      copy: [
        "The engagement extended Absa's field of view across African ecosystems, strengthened thematic filtering and created a clearer bridge between strategy and market possibility. It provided a pathway toward more focused collaboration and a repeatable learning capability.",
        "Discovery is not about putting more startups in the room. It is about improving the signal-to-noise ratio and finding the parts of the future that matter to your organisation.",
      ],
    },
  ],
};
