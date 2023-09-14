'use client';

import CloseIcon from '@/../public/img/icons/close.svg';
import { useAppStore } from '@/store/app.store';

export const VideoOverlay = ({}: {}) => {
  const { videoIsOpen, toggleVideoOpen, videoId, videoTitle } = useAppStore();

  if (!videoIsOpen) return null;

  return (
    <div className={'fixed bottom-0 left-0 right-0 top-0 z-30'}>
      <div className="flex h-full w-full items-center justify-center">
        <div className={'h-full w-full bg-black/90 p-4 pt-2 backdrop-blur'}>
          <div className={'flex items-center justify-between pb-2'}>
            <span className={'text-md font-heading font-medium text-white'}>{videoTitle}</span>
            <CloseIcon
              className={'cursor-pointer text-white hover:text-red'}
              onClick={toggleVideoOpen}
            />
          </div>
          <div className={'h-full w-full pb-10'}>
            <iframe
              title={videoTitle}
              src={`https://player.vimeo.com/video/${videoId}?h=e0bdcbf189&autoplay=1&color=ED1C24&title=0&byline=0&portrait=0`}
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </div>
      </div>
    </div>
  );
};
