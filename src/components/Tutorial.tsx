import { useState, useEffect } from 'react';
import { X, LayoutList, Pin, Music2, ListPlus, SportShoe, Bookmark } from 'lucide-react';

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
    body: 'Bläddra bland trick sorterade efter kategori och svårighetsgrad. Tryck på ett trick för att läsa beskrivning, tips och se rekommenderade övningar du kan göra utanför isen.',
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
    body: 'Skapa ett tränings- eller tävlingsprogram genom att lägga till trick i ordning. Koppla musik från Spotify och se ditt totala basvärde (BV) direkt.',
  },
  {
    Icon: SportShoe,
    iconBg: '#EDE9FE',
    iconColor: '#7C3AED',
    title: 'Off ice-träning',
    body: 'Under Off ice hittar du övningar i fyra kategorier: Teknik, Rörlighet, Kondition och Styrka. Varje övning har steg-för-steg-guide, tips och progressioner anpassade för konståkning.',
  },
  {
    Icon: Bookmark,
    iconBg: '#FEF9C3',
    iconColor: '#92400E',
    title: 'Spara dina övningar',
    body: 'Tryck på bookmark-ikonen på en övning för att spara den. Dina sparade övningar samlas i det gula bookmark-filtret längst till vänster — enkelt att hitta när du tränar.',
  },
  {
    Icon: ListPlus,
    iconBg: '#ECFDF5',
    iconColor: '#065F46',
    title: 'Snabbstart',
    body: 'Under Tränar på och Lärt mig finns en knapp som omvandlar alla dina markerade trick till ett nytt program — med ett enda tryck.',
  },
];

export function Tutorial({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 350);
  };

  const isLast = current === slides.length - 1;
  const next = () => isLast ? handleClose() : setCurrent((c) => c + 1);
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
    <div className="fixed inset-0 z-50 flex flex-col justify-end">

      {/* Scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0,0,0,0.5)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        onClick={handleClose}
      />

      {/* Sheet */}
      <div
        className="relative flex flex-col rounded-t-3xl overflow-hidden"
        style={{
          background: 'white',
          maxHeight: '82vh',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
          <button
            onClick={prev}
            className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium"
            style={{
              color: current === 0 ? 'transparent' : '#999',
              pointerEvents: current === 0 ? 'none' : 'auto',
            }}
          >
            ←
          </button>
          <div className="w-10 h-1 rounded-full" style={{ background: '#E0E0E0' }} />
          <button
            onClick={handleClose}
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
                className="shrink-0 w-full h-full flex flex-col items-center justify-center px-8 text-center py-6"
              >
                <div
                  className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
                  style={{ background: slide.iconBg }}
                >
                  <slide.Icon size={32} strokeWidth={1.6} style={{ color: slide.iconColor }} />
                </div>
                <h2 className="text-xl font-bold mb-3 leading-snug" style={{ color: '#111' }}>
                  {slide.title}
                </h2>
                <p className="text-[14px] leading-relaxed" style={{ color: '#666', maxWidth: '280px' }}>
                  {slide.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mb-4 shrink-0">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                height: '6px',
                width: i === current ? '20px' : '6px',
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
          style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 16px) + 12px)' }}
        >
          <button
            onClick={next}
            className="w-full rounded-2xl text-base font-semibold py-3.5"
            style={{ background: '#141414', color: 'white' }}
          >
            {isLast ? 'Kom igång' : 'Nästa'}
          </button>
        </div>
      </div>

    </div>
  );
}
