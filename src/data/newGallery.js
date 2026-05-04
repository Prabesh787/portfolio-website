import {
  eventThumbnail1,
  eventThumbnail2,
  eventThumbnail3,
  tripImage1_1,
  tripImage1_2,
  birthdayImage2_1,
  birthdayImage2_2,
  natureImage3_1,
  natureImage3_2,
} from '../assets/images/newGalleryImages';

export const galleryEvents = [
  {
    id: 1,
    title: 'Trip Memories',
    shortDescription: 'Adventures and explorations from my travels.',
    date: '2024',
    thumbnail: eventThumbnail1,
    category: 'travel',
    images: [
      { id: '1-1', src: tripImage1_1, alt: 'Trip moment 1' },
      { id: '1-2', src: tripImage1_2, alt: 'Trip moment 2' },
    ],
  },
  {
    id: 2,
    title: 'Birthday Celebrations',
    shortDescription: 'Special moments from birthday gatherings.',
    date: '2024',
    thumbnail: eventThumbnail2,
    category: 'events',
    images: [
      { id: '2-1', src: birthdayImage2_1, alt: 'Birthday moment 1' },
      { id: '2-2', src: birthdayImage2_2, alt: 'Birthday moment 2' },
    ],
  },
  {
    id: 3,
    title: 'Nature & Outdoors',
    shortDescription: 'Captures from the great outdoors.',
    date: '2024',
    thumbnail: eventThumbnail3,
    category: 'nature',
    images: [
      { id: '3-1', src: natureImage3_1, alt: 'Nature moment 1' },
      { id: '3-2', src: natureImage3_2, alt: 'Nature moment 2' },
    ],
  },
];

export const galleryCategories = ['all', 'travel', 'events', 'nature'];
