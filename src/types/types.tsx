export type BbcArticle = {
  title: string;
  docId: string;
  description: string;
  article: string;
  url: string;
  time: string;
  img: string | null;
};
export type HamariArticle = {
  title: string;
  docId: string;
  description: string;
  link: string;
  author: string;
  imgSrc: string;
  published: number;
  category: string[];
  content: string;
  content_encoded: string;
  media: Record<string, any>; // You may want to define a specific type for media
};

export type TribuneArticle = {
  docId: string;
  title: string;
  imgSrc: string | null;
  description: string;
  link: string;
  published: number;
  created: number;
  category: string;
  content: string;
  content_encoded: string;
};
export type NewsArticle = {
  id: string;
  title: string;
  imgSrc: string;
  docId: string;
  description: string;
  link: string;
  published: number;
  created: number;
  category: string;
  content: string;
  enclosures: any[]; // You may want to replace 'any' with a specific type if you know the structure of enclosures
  content_encoded: string;
  media: Record<string, any>; // You may want to replace 'any' with a specific type if you know the structure of media
};

export const tribuneTypes = [
  {
    param: "home",
  },
  {
    param: "latest",
  },
  {
    param: "analysis",
  },
  {
    param: "politics",
  },
  {
    param: "cricket",
  },
  {
    param: "movies",
  },
  {
    param: "health",
  },
  {
    param: "style",
  },
  {
    param: "advice",
  },
  {
    param: "pakistan",
  },
  {
    param: "sindh",
  },
  {
    param: "punjab",
  },
  {
    param: "balochistan",
  },
  {
    param: "khyber-pakhtunkhwa",
  },
  {
    param: "jammu-kashmir",
  },
  {
    param: "gilgit-baltistan",
  },
  {
    param: "business",
  },
  {
    param: "world",
  },
  {
    param: "sports",
  },
  {
    param: "technology",
  },
  {
    param: "games",
  },
  {
    param: "life-style",
  },
  {
    param: "art-books",
  },
  {
    param: "music",
  },
  {
    param: "film",
  },
  {
    param: "fashion",
  },
  {
    param: "gossip",
  },
  {
    param: "tv",
  },
  {
    param: "theatre",
  },
  {
    param: "opinion",
  },
  {
    param: "editorial",
  },
  {
    param: "blogs",
  },
];
