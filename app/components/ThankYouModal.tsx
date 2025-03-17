'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PlayIcon, DownloadIcon } from 'lucide-react';
import { Song } from '../types';

interface ThankYouModalProps {
  song: Song;
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ song, isOpen, onClose }: ThankYouModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card text-card-foreground">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for supporting {song.artist.name} by downloading "{song.title}"
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button className="flex items-center space-x-2">
              <PlayIcon size={20} />
              <span>Play Now</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <DownloadIcon size={20} />
              <span>Download</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}