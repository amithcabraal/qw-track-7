import React, { useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { SpotifyTrack } from '../types/spotify';
import { usePlayer } from '../hooks/usePlayer';

interface PlayerProps {
  track: SpotifyTrack | null;
}

export const Player: React.FC<PlayerProps> = ({ track }) => {
  const { isPlaying, error, playTrack, togglePlayback } = usePlayer();

  useEffect(() => {
    if (track) {
      playTrack(track);
    }
  }, [track]);

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={track.album.images[0]?.url}
            alt={track.album.name}
            className="w-16 h-16 rounded"
          />
          <div className="ml-4">
            <h3 className="font-semibold">{track.name}</h3>
            <p className="text-sm text-gray-600">
              {track.artists.map(a => a.name).join(', ')}
            </p>
          </div>
        </div>
        {error ? (
          <div className="text-red-500 text-sm">{error}</div>
        ) : (
          <button
            onClick={togglePlayback}
            className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        )}
      </div>
    </div>
  );
};