'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Song } from '../types';

interface DonationModalProps {
  song: Song;
  isOpen: boolean;
  onClose: () => void;
  onDonate: (amount: number) => void;
}

export default function DonationModal({ song, isOpen, onClose, onDonate }: DonationModalProps) {
  const [amount, setAmount] = useState(100);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card text-card-foreground">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Support {song.artist.name}</h2>
          <div className="mb-6">
            <p className="text-muted-foreground mb-2">Choose your donation amount:</p>
            <div className="flex items-center space-x-4">
              <span className="text-sm">KSH 25</span>
              <Slider
                value={[amount]}
                onValueChange={(value) => setAmount(value[0])}
                min={25}
                max={1000}
                step={25}
                className="flex-1"
              />
              <span className="text-sm">KSH 1000</span>
            </div>
            <p className="text-center mt-2 text-xl font-bold">KSH {amount}</p>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={() => onDonate(amount)}>Donate & Download</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}