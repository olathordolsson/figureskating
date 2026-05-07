import { Pin, ArrowUpFromLine, IterationCw, LineSquiggle, PilcrowRight, CheckCircle } from 'lucide-react';
import type { CategoryId, Trick } from '../data/tricks';
import { useStore } from '../store/useStore';
import { DifficultyBadge } from './DifficultyBadge';

const categoryIcon: Record<CategoryId, React.ReactNode> = {
  hopp:          <ArrowUpFromLine size={16} strokeWidth={2} />,
  snurrar:       <IterationCw size={15} strokeWidth={2} style={{ transform: 'rotate(90deg)' }} />,
  svängar:       <LineSquiggle size={15} strokeWidth={2} />,
  glidövningar:  <PilcrowRight size={15} strokeWidth={2} />,
};

type Props = { trick: Trick };

export function TrickCard({ trick }: Props) {
  const { favorites, learned, selectTrick, toggleFavorite } = useStore();
  const isFav = favorites.has(trick.id);
  const isLearned = learned.has(trick.id);

  return (
    <div
      className="relative flex items-center gap-3 px-4 py-3.5 rounded-2xl active:scale-[0.98] transition-transform"
      style={{ background: '#1E1E1E' }}
    >
      {/* Tappable area for opening trick — covers full card except heart zone */}
      <button
        onClick={() => selectTrick(trick.id)}
        className="absolute inset-0 rounded-2xl"
        aria-label={`Öppna ${trick.name}`}
      />

      {/* Category icon */}
      <div
        className="relative shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-app-sub pointer-events-none"
        style={{ background: '#262626' }}
      >
        {categoryIcon[trick.category]}
      </div>

      {/* Name + difficulty */}
      <div className="relative flex-1 min-w-0 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <p className="font-semibold text-[15px] leading-snug truncate text-white">
            {trick.name}
          </p>
          {isLearned && <CheckCircle size={13} strokeWidth={2.2} style={{ color: '#C8F500', flexShrink: 0 }} />}
        </div>
        <div className="mt-1.5">
          <DifficultyBadge level={trick.difficulty} />
        </div>
      </div>

      {/* Heart — sits above the card button via relative positioning */}
      <button
        onClick={() => toggleFavorite(trick.id)}
        className="relative shrink-0 flex items-center justify-center w-11 h-11 -mr-1.5"
        aria-label={isFav ? 'Ta bort från tränar på' : 'Lägg till i tränar på'}
      >
        <Pin
          size={16}
          strokeWidth={1.8}
          className={isFav ? 'text-brand-orange fill-brand-orange' : 'text-app-muted'}
        />
      </button>
    </div>
  );
}
