export type Language = 'hi' | 'en';

export interface TrustItem {
  id: string;
  iconName: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
}

export interface ServicePackage {
  id: string;
  nameHi: string;
  nameEn: string;
  price: string;
  isPopular: boolean;
  featuresHi: string[];
  featuresEn: string[];
  descriptionHi: string;
  descriptionEn: string;
}

export interface VideoItem {
  id: string;
  titleHi: string;
  titleEn: string;
  category: 'cinematic' | 'traditional';
  durationHi: string;
  durationEn: string;
  videoUrl?: string; // Embedded video placeholder or uploaded local file URL
  thumbnailUrl: string;
}

export interface GalleryItem {
  id: string;
  titleHi: string;
  titleEn: string;
  thumbnailUrl: string;
  aspectRatio?: string;
  locationHi?: string;
  locationEn?: string;
}

export interface ProcessStep {
  stepNumber: number;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
}

export interface Testimonial {
  id: string;
  nameHi: string;
  nameEn: string;
  locationHi: string;
  locationEn: string;
  reviewHi: string;
  reviewEn: string;
  rating: number;
  date: string;
  avatarUrl: string;
}
