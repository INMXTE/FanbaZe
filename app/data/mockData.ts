import { Artist, Song } from '../types';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Sarah Wave',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
    genre: 'Pop',
    followers: 125000,
  },
  {
    id: '2',
    name: 'Electric Pulse',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    genre: 'Electronic',
    followers: 89000,
  },
  {
    id: '3',
    name: 'The Midnight Crew',
    imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b',
    genre: 'Rock',
    followers: 230000,
  },
];

export const songs: Song[] = [
  {
    id: '1',
    title: 'Summer Nights',
    artist: artists[0],
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    duration: '3:45',
    downloadCount: 15000,
    trending: true,
  },
  {
    id: '2',
    title: 'Electric Dreams',
    artist: artists[1],
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    duration: '4:20',
    downloadCount: 12500,
    trending: true,
  },
  {
    id: '3',
    title: 'Midnight Drive',
    artist: artists[2],
    coverUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b',
    duration: '3:55',
    downloadCount: 18000,
    trending: true,
  },
];