import { useEffect, useState } from 'react';
import { X, ChevronRight, Heart, CheckCircle, Lightbulb, TriangleAlert } from 'lucide-react';
import { TRICKS, type Trick } from '../data/tricks';
import { useStore } from '../store/useStore';
import { DifficultyBadge } from './DifficultyBadge';

export function TrickDetail() {
  const { selectedTrickId, selectTrick, favorites, learned, toggleFavorite, toggleLearned } = useStore();

  const [trick, setTrick] = useState<Trick | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (selectedTrickId) {
      const found = TRICKS.find((t) => t.id === selectedTrickId);
      if (found) {
        setTrick(found);
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      }
    } else {
      setVisible(false);
      const timer = setTimeout(() => setTrick(null), 520);
      return () => clearTimeout(timer);
    }
  }, [selectedTrickId]);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  const handleClose = () => selectTrick(null);

  if (!trick) return null;

  const related = TRICKS.filter((t) => trick.relatedIds?.includes(t.id));
  const isFav = favorites.has(trick.id);
  const isLearned = learned.has(trick.id);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.65)',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 500ms ease-out',
        }}
        onClick={handleClose}
      />

      {/* Close button — floats above the sheet */}
      <div
        className="fixed z-50 mx-auto inset-x-0 flex justify-end px-4"
        style={{
          maxWidth: 480,
          bottom: 'calc(85dvh + 12px)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 520ms cubic-bezier(0.32, 0.72, 0, 1)',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <button
          onClick={handleClose}
          className="w-9 h-9 flex items-center justify-center rounded-full"
          style={{ background: '#2A2A2A' }}
          aria-label="Stäng"
        >
          <X size={18} strokeWidth={2.5} style={{ color: '#fff' }} />
        </button>
      </div>

      {/* Sheet */}
      <div
        className="fixed bottom-0 inset-x-0 z-50 mx-auto rounded-t-3xl"
        style={{
          background: '#141414',
          maxWidth: 480,
          maxHeight: '85dvh',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 520ms cubic-bezier(0.32, 0.72, 0, 1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 pt-6 pb-14 space-y-4">

          {/* Title */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: '#555' }}>
                {trick.subcategoryLabel}
              </p>
              <DifficultyBadge level={trick.difficulty} showBv />
            </div>
            <h1 className="text-2xl font-bold text-white leading-tight">{trick.name}</h1>
            <p className="text-xs mt-1" style={{ color: '#555' }}>{trick.englishName}</p>
          </div>

          {/* Primary actions */}
          <div className="flex gap-2">
            <button
              onClick={() => toggleLearned(trick.id)}
              className="flex-1 flex items-center justify-center gap-1.5 h-12 rounded-xl text-sm font-semibold transition-colors"
              style={{
                background: isLearned ? '#C8F500' : '#1E1E1E',
                color: isLearned ? '#141414' : '#fff',
              }}
            >
              <CheckCircle size={15} strokeWidth={2.2} />
              {isLearned ? 'Lärt mig' : 'Markera som lärd'}
            </button>
            <button
              onClick={() => toggleFavorite(trick.id)}
              className="flex-1 flex items-center justify-center gap-1.5 h-12 rounded-xl text-sm font-semibold transition-colors"
              style={{
                background: isFav ? '#F05A28' : '#1E1E1E',
                color: '#fff',
              }}
            >
              <Heart size={15} strokeWidth={1.8} style={{ fill: isFav ? '#fff' : 'none' }} />
              {isFav ? 'Sparad' : 'Spara'}
            </button>
          </div>

          {/* Description */}
          <div className="rounded-2xl p-5" style={{ background: '#fff' }}>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: '#6B7280' }}>
              Om tricket
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
              {trick.description}
            </p>
          </div>

          {/* Tips */}
          <div className="rounded-2xl p-5" style={{ background: '#fff' }}>
            <div className="flex items-center gap-1.5 mb-4">
              <Lightbulb size={13} strokeWidth={2} style={{ color: '#92400E' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#6B7280' }}>
                Tänk på
              </p>
            </div>
            <ul className="space-y-4">
              {trick.tips.map((tip, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                    style={{ background: '#FEF9C3', color: '#92400E' }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pitfalls */}
          <div className="rounded-2xl p-5" style={{ background: '#fff', border: '1px solid #FFD5C8' }}>
            <div className="flex items-center gap-1.5 mb-4">
              <TriangleAlert size={13} strokeWidth={2} style={{ color: '#C2410C' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#C2410C' }}>
                Vanliga misstag
              </p>
            </div>
            <ul className="space-y-4">
              {trick.pitfalls.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                    style={{ background: '#FFD5C8', color: '#9A3412' }}
                  >
                    !
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 px-1" style={{ color: '#555' }}>
                Relaterade trick
              </p>
              <div className="space-y-1">
                {related.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => selectTrick(r.id)}
                    className="w-full text-left rounded-2xl px-4 py-3 flex items-center justify-between active:scale-[0.98] transition-transform"
                    style={{ background: '#1E1E1E' }}
                  >
                    <div>
                      <p className="font-semibold text-white text-sm">{r.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#555' }}>{r.englishName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <DifficultyBadge level={r.difficulty} />
                      <ChevronRight size={15} strokeWidth={2} style={{ color: '#555' }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
