import { useState, useRef } from 'react';

type Props = {
  videoId: string;
  title: string;
  thumbnail?: string;
};

export function VideoPlayer({ videoId, title, thumbnail }: Props) {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const thumbnailSrc = thumbnail ?? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlay = () => {
    // Show the iframe synchronously via DOM before React re-renders
    if (iframeRef.current) {
      iframeRef.current.style.display = 'block';
      // Send playVideo inside the user-gesture context so the browser allows audio
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );
    }
    setPlaying(true);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9', background: '#0a0a0a' }}>
      {/* Iframe pre-loaded in background with JS API enabled, no autoplay */}
      <iframe
        ref={iframeRef}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=0&playsinline=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{ border: 'none', display: playing ? 'block' : 'none' }}
      />

      {/* Facade */}
      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 w-full h-full"
          aria-label={`Spela upp ${title}`}
        >
          <img
            src={thumbnailSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.75)' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#C8F500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{
                width: 0,
                height: 0,
                marginLeft: 4,
                borderTop: '11px solid transparent',
                borderBottom: '11px solid transparent',
                borderLeft: '18px solid #141414',
              }} />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
