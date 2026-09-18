/**
 * Single Data Structure for Wedding Reception Invitation Details
 * Vinay & Kishma — Sunday, 25th October 2026 · 6:30 PM onwards
 */

export const WEDDING_COUPLE = {
  groom: {
    name: 'Vinay',
    role: 'The Groom',
    relation: 'Son of',
    parents: 'Mrs. Aarthi & Mr. Shashi Bhushan Sahani',
    heritage: 'Sahani Family',
  },
  bride: {
    name: 'Kishma',
    role: 'The Bride',
    relation: 'Daughter of',
    parents: 'Mrs. Sangita & Mr. Francis Xavier',
    heritage: 'Xavier Family',
  },
};

export const WEDDING_MESSAGES = {
  sacredInvocation: '॥ श्री गणेशाय नमः ॥',
  invocationMeaning: 'Shree Ganeshaya Namaha',
  leadQuote: 'Two Hearts. Two Traditions. One Beautiful Beginning.',
  invitationText:
    'With hearts full of joy and gratitude, we cordially invite you to celebrate the joyous Wedding Reception of Vinay & Kishma.',
  blessing:
    'Request the honour of your gracious presence and heartfelt blessings as we celebrate our new beginnings at our wedding reception banquet.',
};

export const WEDDING_EVENTS = [
  {
    id: 'reception',
    title: 'Wedding Reception',
    day: 'Sunday',
    date: '25th October 2026',
    time: '6:30 PM onwards',
    description:
      'A grand celebratory evening banquet with dinner, heartfelt toasts, joyful beginnings, and celebratory festivities.',
    motif: 'lotus-crest',
    accentColor: '#C6A66B', // Antique Gold
    isMain: true,
  },
];

export const WEDDING_DATE_CONFIG = {
  targetDateISO: '2026-10-25T18:30:00', // Reception Banquet Time (6:30 PM)
  displayDate: 'Sunday, 25th October 2026',
  displayYear: '2026',
  receptionTime: '6:30 PM onwards',
};

export const WEDDING_VENUE = {
  name: 'Tranquil Wedding Venue',
  address: [
    'Near Sudarshan Vidya Mandir School Road,',
    'Muthathi Anjaneya Temple Road,',
    'Laxmipura Kere, Sakalavara Road,',
    'Next to Miraya Greens, Bannerghatta Road,',
    'Bangalore – 560083',
  ],
  // Coordinates for Tranquil Wedding Venue, Bannerghatta Road, Bangalore
  lat: 12.8708,
  lng: 77.5844,
  googleMapsSearchUrl:
    'https://www.google.com/maps/search/Tranquil+Wedding+Venue,+Sakalavara+Road,+Bannerghatta+Road,+Bangalore+560083',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d77.5844!3d12.8708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVHJhbnF1aWwgV2VkZGluZyBWZW51ZQ!5e1!3m2!1sen!2sin!4v1',
};

export const CALENDAR_EVENTS = [
  {
    title: 'Vinay & Kishma – Wedding Reception',
    startISO: '2026-10-25T18:30:00',
    endISO: '2026-10-25T23:00:00',
    description:
      'Wedding Reception — A grand celebratory evening banquet with dinner, toasts, and joyful beginnings. Tranquil Wedding Venue, Bannerghatta Road, Bangalore.',
    location: 'Tranquil Wedding Venue, Bannerghatta Road, Bangalore 560083',
  },
];
