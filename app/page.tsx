'use client';

import { useState } from 'react';
import { artists, songs } from './data/mockData';
import Sidebar from './components/Sidebar';
import DonationModal from './components/DonationModal';
import ThankYouModal from './components/ThankYouModal';
import { Header } from './components/Header';
import { Song } from './types';
import { PlayIcon, TrendingUpIcon } from 'lucide-react';

export default function Home() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleDonation = (amount: number) => {
    setShowDonationModal(false);
    setShowThankYouModal(true);
  };

  const featuredSong = songs[0];

  return (
    <div className="flex h-screen bg-background">
      <div className={`${showSidebar ? 'block' : 'hidden'} lg:block`}>
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setShowSidebar(!showSidebar)} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Featured Section */}
            <section className="mb-12">
              <div className="featured-card">
                <img
                  src={featuredSong.coverUrl}
                  alt={featuredSong.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <TrendingUpIcon size={20} />
                    <span className="text-sm font-medium">Trending Now</span>
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2">{featuredSong.title}</h1>
                  <p className="text-gray-300 mb-4">{featuredSong.artist.name}</p>
                  <button 
                    onClick={() => {
                      setSelectedSong(featuredSong);
                      setShowDonationModal(true);
                    }}
                    className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 rounded-full"
                  >
                    Support Artist
                  </button>
                </div>
              </div>
            </section>

            {/* Top Artists Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-white mb-6">Top Artists</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {artists.map(artist => (
                  <div key={artist.id} className="text-center space-y-3">
                    <div className="artist-card">
                      <img
                        src={artist.imageUrl}
                        alt={artist.name}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-sm">{artist.name}</h3>
                      <p className="text-gray-400 text-xs">{artist.genre}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Trending Songs Section */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6">Trending Songs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {songs.filter(song => song.trending).map(song => (
                  <div
                    key={song.id}
                    className="group bg-card hover:bg-card/80 transition-colors p-4 rounded-xl cursor-pointer"
                    onClick={() => {
                      setSelectedSong(song);
                      setShowDonationModal(true);
                    }}
                  >
                    <div className="relative mb-4">
                      <img
                        src={song.coverUrl}
                        alt={song.title}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                      <button className="absolute right-2 bottom-2 bg-primary text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayIcon size={20} />
                      </button>
                    </div>
                    <h3 className="font-semibold text-white">{song.title}</h3>
                    <p className="text-gray-400 text-sm">{song.artist.name}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-400 text-sm">{song.duration}</span>
                      <span className="text-gray-400 text-sm">{song.downloadCount.toLocaleString()} downloads</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {selectedSong && (
        <>
          <DonationModal
            song={selectedSong}
            isOpen={showDonationModal}
            onClose={() => setShowDonationModal(false)}
            onDonate={handleDonation}
          />
          <ThankYouModal
            song={selectedSong}
            isOpen={showThankYouModal}
            onClose={() => {
              setShowThankYouModal(false);
              setSelectedSong(null);
            }}
          />
        </>
      )}
    </div>
  );
}