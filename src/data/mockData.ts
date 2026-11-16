import { RoomType, SpecialOffer, Review, Testimonial } from '../types';

export const ROOMS: RoomType[] = [
  {
    id: 'studio-apartment',
    name: 'Executive Studio Apartment',
    tagline: 'Modern, compact urban living for solo travellers and couples',
    description: 'Designed for effortless urban living at 15 Whitaker Place, our Executive Studio features a comfortable queen bed, kitchenette with microwave and cooktop, en-suite bathroom, and high-speed Wi-Fi.',
    pricePerNight: 195,
    size: '35 sqm',
    maxGuests: 2,
    bedType: '1 Queen Bed',
    image: '/assets/aistudio/unnamed__3__c1d60734.jpg',
    amenities: ['Kitchenette with Microwave', 'High-Speed Wi-Fi', 'Smart TV', 'Air Conditioning', 'En-suite Bathroom', 'Weekly Housekeeping'],
    popular: true
  },
  {
    id: 'one-bedroom',
    name: '1-Bedroom Apartment',
    tagline: 'Spacious living area with city views in Grafton',
    description: 'Experience home-away-from-home comfort with separate living quarters, fully equipped kitchenette, laundry access, and floor-to-ceiling windows overlooking Auckland central.',
    pricePerNight: 265,
    size: '52 sqm',
    maxGuests: 3,
    bedType: '1 King Bed or 2 Singles',
    image: '/assets/aistudio/unnamed__4__2c7cd866.jpg',
    amenities: ['Kitchen Facilities', 'In-room Laundry', 'City View', 'Work Desk', 'Smart TV', 'High-Speed Wi-Fi'],
    popular: true
  },
  {
    id: 'two-bedroom',
    name: '2-Bedroom Executive Suite',
    tagline: 'Ultimate space and sophistication for families and groups',
    description: 'Our premier two-bedroom suite offers two bathrooms, expansive living quarters, premium bedding, kitchen facilities, and easy access to Auckland City Hospital and University.',
    pricePerNight: 380,
    size: '78 sqm',
    maxGuests: 5,
    bedType: '1 King & 1 Queen Bed',
    image: '/assets/aistudio/thumbnail_cb8452fb.jpg',
    amenities: ['2 Bathrooms', 'Kitchen Facilities', 'Washing Machine', 'Dining Area', 'Panoramic Views', 'Secure Parking On-site']
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'weekend-getaway',
    title: 'Auckland Weekend Getaway',
    subtitle: 'Relax and recharge in the heart of Grafton',
    description: 'Enjoy a 15% discount on Friday and Saturday night stays, including complimentary late check-out at 12:00 PM and welcome refreshments.',
    discount: '15% OFF',
    validUntil: 'Valid for weekend stays through March 2027',
    image: '/assets/aistudio/unnamed__3__c1d60734.jpg',
    conditions: 'Minimum 2-night stay. Subject to availability.',
    code: 'WEEKEND15'
  },
  {
    id: 'extended-stay',
    title: 'Extended Stay Package (7+ Nights)',
    subtitle: 'The ultimate corporate or relocation solution',
    description: 'Staying in Auckland for work, study, or relocation? Book 7 nights or more and receive 20% off our standard rates plus weekly linen refresh.',
    discount: '20% OFF',
    validUntil: 'Ongoing seasonal offer',
    image: '/assets/aistudio/unnamed__4__2c7cd866.jpg',
    conditions: 'Minimum 7 consecutive nights required.',
    code: 'EXTENDED20'
  },
  {
    id: 'business-traveller',
    title: 'Business Traveller Advantage',
    subtitle: 'Seamless corporate accommodation in Auckland central',
    description: 'Corporate rates including express check-in, dedicated workspace desk, complimentary high-speed Wi-Fi, and flexible cancellation policy.',
    discount: 'Corporate Rates',
    validUntil: 'Available year-round',
    image: '/assets/aistudio/unnamed_c788c8f4.jpg',
    conditions: 'Valid company ID or corporate booking code required.',
    code: 'BIZPRO'
  },
  {
    id: 'spring-seasonal',
    title: 'Spring in the City Special',
    subtitle: 'Explore Auckland as the city blooms',
    description: 'Experience Auckland Domain and Grafton events with 18% savings on all 1-Bedroom and Studio apartments when booking 14 days in advance.',
    discount: '18% OFF',
    validUntil: 'Book by December 31, 2026',
    image: '/assets/aistudio/thumbnail_cb8452fb.jpg',
    conditions: 'Advance purchase non-refundable rate.',
    code: 'SPRING18'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Aiden Mitchell',
    location: 'Wellington, NZ',
    rating: 5,
    date: 'October 2026',
    title: 'Exceptional location and immaculate cleanliness',
    comment: 'Columbia Apartments is in a fantastic spot near Grafton and Auckland City Hospital. The room was extremely spacious, immaculately clean, and the bed was super comfortable. Staff were very welcoming.',
    source: 'Google Reviews'
  },
  {
    id: 'rev-2',
    author: 'Dr. Sarah Henderson',
    location: 'Sydney, Australia',
    rating: 5,
    date: 'September 2026',
    title: 'Perfect for business trips and conferences',
    comment: 'I stayed here for a week-long conference at University of Auckland. The high-speed internet and quiet rooms made working a breeze. Highly recommended for professionals!',
    source: 'Trustpilot'
  },
  {
    id: 'rev-3',
    author: 'Liam & Chloe Thorne',
    location: 'Christchurch, NZ',
    rating: 5,
    date: 'August 2026',
    title: 'Wonderful weekend getaway!',
    comment: 'Loved the kitchenette facilities and modern decor. It felt like our own upscale apartment in Auckland. Close to great cafes on Symonds Street.',
    source: 'Direct Guest'
  },
  {
    id: 'rev-4',
    author: 'Marcus Vance',
    location: 'London, UK',
    rating: 4.5,
    date: 'July 2026',
    title: 'Great value in central Auckland',
    comment: 'Spacious compared to typical hotel rooms. Easy walk to Grafton train station and downtown. Will definitely stay here again on my next visit.',
    source: 'Google Reviews'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Victoria Zhang',
    role: 'Visiting Researcher',
    comment: 'Columbia Apartments provided the ideal sanctuary during my 3-month research fellowship. The staff went above and beyond to make me feel at home.',
    rating: 5,
    stayDuration: '3 Months Stay'
  },
  {
    id: 'test-2',
    name: 'James O’Connor',
    role: 'Executive Consultant',
    comment: 'Impeccable service, quiet environment, and top-tier amenities. The location right by Grafton makes getting across Auckland effortless.',
    rating: 5,
    stayDuration: '2 Weeks Stay'
  },
  {
    id: 'test-3',
    name: 'Sophie & Daniel Taylor',
    role: 'Leisure Travellers',
    comment: 'We spent our anniversary weekend here. The 1-bedroom apartment was stunning with views of the city lights. 10/10 experience!',
    rating: 5,
    stayDuration: 'Weekend Getaway'
  }
];

export const FACILITIES = [
  { name: 'High-Speed Wi-Fi', description: 'Complimentary fiber optic internet throughout the building', icon: 'Wifi', image: '/assets/aistudio/unnamed__7__ebea0536.jpg' },
  { name: 'Columbia Mini Mart', description: 'On-site convenience store for groceries, snacks, and essentials', icon: 'Utensils', image: '/assets/aistudio/unnamed__5__6100b00e.jpg' },
  { name: 'Secure Parking', description: 'On-site secure undercover parking available for residents', icon: 'Car', image: '/assets/aistudio/thumbnail_cb8452fb.jpg' },
  { name: '24/7 Reception', description: 'Friendly reception and security team at your service', icon: 'ShieldCheck', image: '/assets/aistudio/unnamed_c788c8f4.jpg' },
  { name: 'Laundry Facilities', description: 'Convenient laundry amenities on-site for all guests', icon: 'Shirt', image: '/assets/aistudio/unnamed__3__c1d60734.jpg' },
  { name: 'Prime Grafton Location', description: 'Steps from Auckland City Hospital and University of Auckland', icon: 'Building2', image: '/assets/aistudio/unnamed__6__cc9ecde7.jpg' }
];
