export type Page = 'home' | 'accommodation' | 'offers' | 'contact';

export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pricePerNight: number;
  size: string;
  maxGuests: number;
  bedType: string;
  image: string;
  amenities: string[];
  popular?: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
  conditions: string;
  code: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  source: 'Google Reviews' | 'Trustpilot' | 'Direct Guest';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  stayDuration: string;
}
