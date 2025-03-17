export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genre: string;
  followers: number;
}

export interface Song {
  id: string;
  title: string;
  artist: Artist;
  coverUrl: string;
  duration: string;
  downloadCount: number;
  trending: boolean;
}

export interface DonationTransaction {
  id: string;
  songId: string;
  amount: number;
  timestamp: Date;
}