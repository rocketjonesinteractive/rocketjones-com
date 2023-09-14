import { create } from 'zustand';

interface AppState {
  videoIsOpen: boolean;
  videoId: string;
  videoTitle: string;
  toggleVideoOpen: (videoId: string, videoTitle: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  videoIsOpen: false,
  videoId: '',
  videoTitle: '',
  toggleVideoOpen: (videoId: string, videoTitle: string) =>
    set((state) => ({ videoIsOpen: !state.videoIsOpen, videoId, videoTitle })),
}));
