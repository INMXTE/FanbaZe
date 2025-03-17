'use client';

import { HomeIcon, SearchIcon, RadioIcon, ClockIcon, HeartIcon, UsersIcon, LibraryIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  return (
    <div className="w-64 bg-card h-full flex flex-col p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">Fanbase</h1>
      </div>
      
      <nav className="space-y-1">
        <Link href="/" className="sidebar-item active">
          <HomeIcon size={20} />
          <span>Home</span>
        </Link>
        
        <Link href="/search" className="sidebar-item">
          <SearchIcon size={20} />
          <span>Search</span>
        </Link>
        
        <Link href="/radio" className="sidebar-item">
          <RadioIcon size={20} />
          <span>Radio</span>
        </Link>
      </nav>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-gray-400">YOUR LIBRARY</span>
          <button className="text-gray-400 hover:text-white">
            <PlusIcon size={20} />
          </button>
        </div>
        
        <nav className="space-y-1">
          <Link href="/recent" className="sidebar-item">
            <ClockIcon size={20} />
            <span>Recently Played</span>
          </Link>
          
          <Link href="/favorites" className="sidebar-item">
            <HeartIcon size={20} />
            <span>Favorite Songs</span>
          </Link>
          
          <Link href="/artists" className="sidebar-item">
            <UsersIcon size={20} />
            <span>Artists</span>
          </Link>
          
          <Link href="/albums" className="sidebar-item">
            <LibraryIcon size={20} />
            <span>Albums</span>
          </Link>
        </nav>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <p className="text-sm text-gray-400">© 2024 Fanbase</p>
      </div>
    </div>
  );
}