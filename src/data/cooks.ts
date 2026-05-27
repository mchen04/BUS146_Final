export interface Cook {
  name: string;
  neighborhood: string;
  cuisine: string;
  rating: number;
  reviews: number;
  signature: string;
  miles: number;
  prep: string;
  price: number;
  photo: string;
  avatar: string;
}

export const COOKS: Cook[] = [
  {
    name: 'Amara O.',
    neighborhood: 'Fruitvale',
    cuisine: 'Nigerian',
    rating: 4.9,
    reviews: 127,
    signature: 'Jollof rice & suya',
    miles: 0.4,
    prep: '45 min',
    price: 14,
    photo: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Linh T.',
    neighborhood: 'Sunset',
    cuisine: 'Vietnamese',
    rating: 4.8,
    reviews: 84,
    signature: 'Bún chả Hà Nội',
    miles: 0.8,
    prep: '30 min',
    price: 13,
    photo: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Sofia M.',
    neighborhood: 'Mission',
    cuisine: 'Oaxacan',
    rating: 5.0,
    reviews: 211,
    signature: 'Mole negro tamales',
    miles: 0.6,
    prep: '60 min',
    price: 16,
    photo: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&h=400&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Daniel K.',
    neighborhood: 'Richmond',
    cuisine: 'Levantine',
    rating: 4.7,
    reviews: 58,
    signature: 'Maqluba & kibbeh',
    miles: 1.1,
    prep: '40 min',
    price: 15,
    photo: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=600&h=400&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Priya V.',
    neighborhood: 'Berkeley',
    cuisine: 'South Indian',
    rating: 4.9,
    reviews: 163,
    signature: 'Dosa breakfast box',
    miles: 1.3,
    prep: '25 min',
    price: 11,
    photo: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=400&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Yusuf B.',
    neighborhood: 'Oakland',
    cuisine: 'Eritrean',
    rating: 4.8,
    reviews: 92,
    signature: 'Zigni & injera platter',
    miles: 0.9,
    prep: '50 min',
    price: 17,
    photo: 'https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=600&h=400&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
  },
];

export interface MenuItem {
  name: string;
  price: number;
  day: string;
  left: string;
}

export const AMARA_MENU: MenuItem[] = [
  { name: 'Jollof Rice & Suya', price: 14, day: 'Tonight', left: '8 plates' },
  { name: 'Egusi Soup & Pounded Yam', price: 16, day: 'Thu', left: '12 plates' },
  { name: 'Akara Breakfast Box', price: 9, day: 'Fri 8am', left: '6 boxes' },
];
