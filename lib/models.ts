export type ModelProfile = {
  slug: string;
  name: string;
  role: string;
  location: string;
  cover: string;
  images: string[];
  summary: string;
  details: string[];
  socials: Array<{
    label: string;
    href: string;
  }>;
};

export const MODELS: ModelProfile[] = [
  {
    slug: "abby",
    name: "Abby",
    role: "Bridal model",
    location: "Utah",
    cover: "/models/abby-01.jpg",
    images: [
      "/models/abby-01.jpg",
      "/models/abby-02.jpg",
      "/models/abby-03.jpg",
      "/models/abby-04.jpg",
    ],
    summary:
      "Soft bridal presence with a polished editorial feel, ideal for airy venue portraits and floral-forward concepts.",
    details: ["Bridal", "Editorial", "TFP collaborator"],
    socials: [],
  },
  {
    slug: "abigail",
    name: "Abigail",
    role: "Bridal model",
    location: "Utah",
    cover: "/models/abigail-01.jpg",
    images: [
      "/models/abigail-01.jpg",
      "/models/abigail-02.jpg",
      "/models/abigail-03.jpg",
    ],
    summary:
      "Elegant bridal styling with bright, romantic movement for photographers building refined wedding-inspired portfolios.",
    details: ["Bridal", "Romantic", "TFP collaborator"],
    socials: [],
  },
  {
    slug: "sarah",
    name: "Sarah",
    role: "Editorial model",
    location: "Utah",
    cover: "/models/sarah-03.jpg",
    images: [
      "/models/sarah-03.jpg",
      "/models/sarah-02.jpg",
      "/models/sarah-01.jpg",
    ],
    summary:
      "Graceful, composed portrait work with a warm editorial look for seated scenes, detail-driven styling, and bridal portraits.",
    details: ["Editorial", "Bridal", "TFP collaborator"],
    socials: [],
  },
  {
    slug: "sophie",
    name: "Sophie",
    role: "Bridal model",
    location: "Utah",
    cover: "/models/sophie-03.jpg",
    images: [
      "/models/sophie-03.jpg",
      "/models/sophie-04.jpg",
      "/models/sophie-01.jpg",
      "/models/sophie-02.jpg",
    ],
    summary:
      "Light-filled bridal modeling with a calm, natural presence for timeless portrait and detail-focused galleries.",
    details: ["Bridal", "Natural light", "TFP collaborator"],
    socials: [],
  },
  {
    slug: "toussaint",
    name: "Toussaint",
    role: "Editorial model",
    location: "Utah",
    cover: "/models/toussaint-03.jpg",
    images: [
      "/models/toussaint-03.jpg",
      "/models/toussaint-05.jpg",
      "/models/toussaint-02.jpg",
      "/models/toussaint-04.jpg",
      "/models/toussaint-01.jpg",
    ],
    summary:
      "Strong formalwear presence with clean editorial lines, well suited for groom styling and cinematic portrait work.",
    details: ["Formalwear", "Editorial", "TFP collaborator"],
    socials: [],
  },
];

export function getModel(slug: string) {
  return MODELS.find((model) => model.slug === slug);
}
