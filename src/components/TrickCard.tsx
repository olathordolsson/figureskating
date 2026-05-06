import { Heart, ArrowUp, RefreshCw, CornerRightDown, Wind } from 'lucide-react';
import type { CategoryId, Trick } from '../data/tricks';
import { useStore } from '../store/useStore';
import { DifficultyBadge } from './DifficultyBadge';

const categoryIcon: Record<CategoryId, React.ReactNode> = {
  hopp:          <ArrowUp size={16} strokeWidth={2} />,
  snurrar:       <RefreshCw size={15} strokeWidth={2} />,
  svängar:       <CornerRightDown size={15} strokeWidth={2} />,
  glidövningar:  <Wind size={15} strokeWidth={2} />,
};

type Props = { trick: Trick };

export function TrickCard({ trick }: Props) {
  const { favorites, learned, selectTrick, toggleFavorite } = useStore();
  const isFav = favorites.has(trick.id);
  const isLearned = learned.has(trick.id);

  return (
    <button
      onClick={() => selectTrick(trick.id)}
      className="w-full text-left flex items-center gap-3 px-3 py-3 rounded-2xl active:scale-[0.98] transition-transform"
      style={{ background: '#1E1E1E' }}
    >
      {/* Category icon */}
      <div
        className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-app-sub"
        style={{ background: '#262626' }}
      >
        {categoryIcon[trick.category]}
      </div>

      {/* Name + difficulty */}
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-[15px] leading-snug truncate ${isLearned ? 'text-brand-lime' : 'text-white'}`}>
          {trick.name}
        </p>
        <div className="mt-1.5">
          <DifficultyBadge level={trick.difficulty} />
        </div>
      </div>

      {/* Right side: heart */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleFavorite(trick.id); }}
        className="shrink-0 flex items-center justify-center w-8 h-8"
        aria-label={isFav ? 'Ta bort från favoriter' : 'Spara som favorit'}
      >
        <Heart
          size={16}
          strokeWidth={1.8}
          className={isFav ? 'text-brand-orange fill-brand-orange' : 'text-app-muted'}
        />
      </button>
    </button>
  );
}
