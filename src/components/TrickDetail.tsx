import { ChevronLeft, ChevronRight, Heart, CheckCircle, Lightbulb, TriangleAlert } from 'lucide-react';
import { TRICKS } from '../data/tricks';
import { useStore } from '../store/useStore';
import { DifficultyBadge } from './DifficultyBadge';

export function TrickDetail() {
  const { selectedTrickId, selectTrick, favorites, learned, toggleFavorite, toggleLearned } = useStore();
  const trick = TRICKS.find((t) => t.id === selectedTrickId);

  if (!trick) return null;

  const related = TRICKS.filter((t) => trick.relatedIds?.includes(t.id));
  const isFav = favorites.has(trick.id);
  const isLearned = learned.has(trick.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={{ background: '#141414' }}>
      <div className="max-w-[480px] mx-auto min-h-full flex flex-col">

        {/* Header */}
        <div className="sticky top-0 z-10 pt-safe" style={{ background: '#141414', borderBottom: '1px solid #2A2A2A' }}>
          <div className="flex items-center justify-between h-12 px-4">
            <button
              onClick={() => selectTrick(null)}
              className="flex items-center gap-0.5 -ml-1 transition-opacity active:opacity-60"
              style={{ color: '#8A8A8A' }}
            >
              <ChevronLeft size={20} strokeWidth={2} />
              <span className="text-sm font-medium">Tillbaka</span>
            </button>
            <button
              onClick={() => toggleFavorite(trick.id)}
              className="w-8 h-8 flex items-center justify-center"
              aria-label={isFav ? 'Ta bort favorit' : 'Lägg till favorit'}
            >
              <Heart
                size={18}
                strokeWidth={1.8}
                style={{ color: isFav ? '#F05A28' : '#555', fill: isFav ? '#F05A28' : 'none' }}
              />
            </button>
          </div>
        </div>

        <div className="flex-1 px-4 pt-4 pb-8 space-y-3">

          {/* Title */}
          <div>
            <p className="text-[10px] uppercase tracking-widest font-medium mb-1.5" style={{ color: '#555' }}>
              {trick.subcategoryLabel}
            </p>
            <h1 className="text-2xl font-bold text-white leading-tight">{trick.name}</h1>
            <p className="text-xs mt-0.5" style={{ color: '#555' }}>{trick.englishName}</p>
            <div className="mt-2">
              <DifficultyBadge level={trick.difficulty} showBv />
            </div>
          </div>

          {/* Primary actions */}
          <div className="flex gap-2">
            <button
              onClick={() => toggleLearned(trick.id)}
              className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-xl text-sm font-semibold transition-colors"
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
              className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-xl text-sm font-semibold transition-colors"
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
          <div className="rounded-2xl p-4" style={{ background: '#fff' }}>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6B7280' }}>
              Om tricket
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
              {trick.description}
            </p>
          </div>

          {/* Tips */}
          <div className="rounded-2xl p-4" style={{ background: '#fff' }}>
            <div className="flex items-center gap-1.5 mb-3">
              <Lightbulb size={13} strokeWidth={2} style={{ color: '#92400E' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#6B7280' }}>
                Tänk på
              </p>
            </div>
            <ul className="space-y-3">
              {trick.tips.map((tip, i) => (
                <li key={i} className="flex gap-2.5">
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
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
          <div className="rounded-2xl p-4" style={{ background: '#fff', border: '1px solid #FFD5C8' }}>
            <div className="flex items-center gap-1.5 mb-3">
              <TriangleAlert size={13} strokeWidth={2} style={{ color: '#C2410C' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#C2410C' }}>
                Vanliga misstag
              </p>
            </div>
            <ul className="space-y-3">
              {trick.pitfalls.map((p, i) => (
                <li key={i} className="flex gap-2.5">
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
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
    </div>
  );
}
