import React from 'react';
import { PlaylistSelector } from '../components/PlaylistSelector';
import { Player } from '../components/Player';
import { SpotifyPlaylist, SpotifyTrack, SpotifyUser } from '../types/spotify';
import { Layout } from '../components/Layout';

interface HomeProps {
  user: SpotifyUser | null;
  playlists: SpotifyPlaylist[];
  currentTrack: SpotifyTrack | null;
  error: string | null;
  onPlaylistSelect: (playlist: SpotifyPlaylist) => void;
}

export const Home: React.FC<HomeProps> = ({
  user,
  playlists,
  currentTrack,
  error,
  onPlaylistSelect,
}) => {
  return (
    <Layout user={user}>
      <main className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Your Playlists</h2>
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}
        <PlaylistSelector playlists={playlists} onSelect={onPlaylistSelect} />
      </main>
      <Player track={currentTrack} />
    </Layout>
  );
};