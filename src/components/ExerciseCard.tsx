import { Bookmark } from 'lucide-react';
import type { Exercise } from '../data/offIceExercises';
import { useStore } from '../store/useStore';

const CATEGORY_LABEL: Record<string, string> = {
  stretch:  'Rörlighet',
  strength: 'Styrka',
  cardio:   'Kondition',
  teknik:   'Teknik',
};

const CATEGORY_COLOR: Record<string, { bg: string; text: string }> = {
  stretch:  { bg: '#2A2A1A', text: '#EAB308' },
  strength: { bg: '#1A1A2A', text: '#60A5FA' },
  cardio:   { bg: '#1A2A1A', text: '#4ADE80' },
  teknik:   { bg: '#2A1A2A', text: '#C084FC' },
};

export function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const { selectOffIce, favoritedExercises, toggleExerciseFavorite } = useStore();
  const isFav = favoritedExercises.has(exercise.id);
  const color = CATEGORY_COLOR[exercise.category];

  return (
    <div
      className="relative flex items-center gap-3 px-4 py-3.5 rounded-2xl active:scale-[0.98] transition-transform"
      style={{ background: '#1E1E1E' }}
    >
      {/* Tappable area — full card except bookmark zone */}
      <button
        onClick={() => selectOffIce(exercise.id)}
        className="absolute inset-0 rounded-2xl"
        aria-label={`Öppna ${exercise.name}`}
      />

      {/* Category badge */}
      <div className="relative flex-1 min-w-0 pointer-events-none">
        <p className="font-semibold text-[15px] text-white truncate">{exercise.name}</p>
        <span
          className="inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: color.bg, color: color.text }}
        >
          {CATEGORY_LABEL[exercise.category]}
        </span>
      </div>

      {/* Bookmark */}
      <button
        onClick={() => toggleExerciseFavorite(exercise.id)}
        className="relative shrink-0 flex items-center justify-center w-11 h-11 -mr-1.5"
        aria-label={isFav ? 'Ta bort från mina övningar' : 'Spara i mina övningar'}
      >
        <Bookmark
          size={16}
          strokeWidth={1.8}
          style={{
            color: isFav ? '#EAB308' : '#555',
            fill: isFav ? '#EAB308' : 'none',
          }}
        />
      </button>
    </div>
  );
}
