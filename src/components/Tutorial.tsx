import { useState } from 'react';
import { X, LayoutList, Pin, CheckCircle, Music2, ListPlus } from 'lucide-react';

const slides = [
  {
    Icon: LayoutList,
    iconBg: '#DBEAFE',
    iconColor: '#1D4ED8',
    title: 'Välkommen till Figurskate',
    body: 'Din digitala träningsdagbok för konståkning. Utforska trick, följ dina framsteg och bygg upp dina tävlingsprogram — allt på ett ställe.',
  },
  {
    Icon: LayoutList,
    iconBg: '#FEF9C3',
    iconColor: '#B45309',
    title: 'Utforska tricklistan',
    body: 'Bläddra bland trick sorterade efter kategori och svårighetsgrad. Tryck på ett trick för att läsa beskrivning, tips och övningar du kan göra utanför isen.',
  },
  {
    Icon: Pin,
    iconBg: '#FCE7F3',
    iconColor: '#BE185D',
    title: 'Tränar på & Lärt mig',
    body: 'Nålikonen markerar trick du jobbar med just nu. Bocken markerar trick du redan behärskar. Under Lärt mig ser du dina framsteg per nivå.',
  },
  {
    Icon: Music2,
    iconBg: '#D1FAE5',
    iconColor: '#065F46',
    title: 'Bygg ditt program',
    body: 'Skapa ett tränings- eller tävlingsprogram genom att lägga till trick och anteckningar i ordning. Koppla musik från Spotify och se ditt totala basvärde (BV) direkt.',
  },
  {
    Icon: ListPlus,
    iconBg: '#EDE9FE',
    iconColor: '#6D28D9',
    title: 'Snabbstart',
    body: 'Under Tränar på och Lärt mig finns en knapp som omvandlar alla dina markerade trick till ett nytt program — med ett enda tryck.',
  },
];

export function Tutorial({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const isLast = current === slides.length - 1;

  const next = () => isLast ? onClose() : setCurrent((c) => c + 1);
  const prev = () => current > 0 && setCurrent((c) => c - 1);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (delta > 50) next();
    else if (delta < -50) prev();
    setTouchStartX(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: 'white' }}>

      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 pt-3 shrink-0"
        style={{ paddingTop: 'calc(env(safe-area-inset-top, 44px) + 12px)' }}
      >
        <button
          onClick={prev}
          className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium"
          style={{ color: current === 0 ? 'transparent' : '#999', pointerEvents: current === 0 ? 'none' : 'auto' }}
        >
          ←
        </button>
        <p className="text-xs font-medium tabular-nums" style={{ color: '#CCC' }}>
          {current + 1} / {slides.length}
        </p>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-full"
          style={{ background: '#F5F5F5' }}
        >
          <X size={17} strokeWidth={2} style={{ color: '#888' }} />
        </button>
      </div>

      {/* Slides */}
      <div
        className="flex-1 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: 'transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 w-full h-full flex flex-col items-center justify-center px-8 text-center"
            >
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-8"
                style={{ background: slide.iconBg }}
              >
                <slide.Icon size={36} strokeWidth={1.6} style={{ color: slide.iconColor }} />
              </div>
              <h2 className="text-2xl font-bold mb-4 leading-snug" style={{ color: '#111' }}>
                {slide.title}
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: '#666', maxWidth: '300px' }}>
                {slide.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mb-5 shrink-0">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              height: '7px',
              width: i === current ? '22px' : '7px',
              borderRadius: '999px',
              background: i === current ? '#111' : '#DDD',
              transition: 'all 0.25s ease',
            }}
          />
        ))}
      </div>

      {/* CTA */}
      <div
        className="px-5 shrink-0"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 24px) + 16px)' }}
      >
        <button
          onClick={next}
          className="w-full h-14 rounded-2xl text-base font-semibold"
          style={{ background: '#141414', color: 'white' }}
        >
          {isLast ? 'Kom igång' : 'Nästa'}
        </button>
      </div>

    </div>
  );
}
