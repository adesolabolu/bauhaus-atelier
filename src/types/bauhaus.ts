export interface CatalogItem {
  id: string;
  name: string;
  designer: string;
  year: number;
  workshop: string;
  materials: string;
  dimensions: string;
  description: string;
  provenance: string;
  category: 'furniture' | 'lighting' | 'metalwork' | 'typography';
  priceDisplay: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  master: string;
  yearIntroduced: string;
  description: string;
  focus: string;
  shape: 'circle' | 'square' | 'triangle';
  color: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  tag: string;
  imageShape: 'rounded-full' | 'rounded-none';
  svgType: 'wassily' | 'dessau' | 'sphere' | 'abstract';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  accentColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PosterShape {
  id: string;
  type: 'circle' | 'square' | 'triangle' | 'diagonal-bar' | 'semicircle' | 'ring';
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: number; // percentage 5-60
  rotation: number; // 0, 45, 90, 180, etc.
  color: string;
  opacity: number;
}
