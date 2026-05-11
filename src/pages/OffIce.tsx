import { useState } from 'react';
import { Bookmark } from 'lucide-react';
import { HeroHeader } from '../components/HeroHeader';
import { ExerciseCard } from '../components/ExerciseCard';
import { EXERCISES, EXERCISES_BY_CATEGORY, type ExerciseCategory } from '../data/offIceExercises';
import { useStore } from '../store/useStore';

const heroImage = 'https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const SECTIONS: { key: ExerciseCategory; label: string }[] = [
  { key: 'teknik',   label: 'Teknik'    },
  { key: 'stretch',  label: 'Rörlighet' },
  { key: 'cardio',   label: 'Kondition' },
  { key: 'strength', label: 'Styrka'    },
];

type FilterState = ExerciseCategory | 'favoriter' | null;

export function OffIce({ onAccount }: { onAccount: () => void }) {
  const { favoritedExercises } = useStore();
  const [activeFilter, setActiveFilter] = useState<FilterState>(null);

  const myExercises = EXERCISES.filter((e) => favoritedExercises.has(e.id));

  const visibleSections = activeFilter === null || activeFilter === 'favoriter'
    ? activeFilter === 'favoriter' ? [] : SECTIONS
    : SECTIONS.filter((s) => s.key === activeFilter);

  return (
    <div className="pb-28">
      <HeroHeader
        image={heroImage}
        title="Off ice"
        subtitle="Träning utanför isen"
        onAccount={onAccount}
      />

      {/* Filter row */}
      <div className="flex gap-2 px-4 mt-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>

        {/* Bookmark pill — only visible when there are saved exercises */}
        {myExercises.length > 0 && (
          <button
            onClick={() => setActiveFilter(activeFilter === 'favoriter' ? null : 'favoriter')}
            className="shrink-0 relative flex items-center gap-2 px-3 py-2 rounded-full transition-colors"
            style={{
              background: activeFilter === 'favoriter' ? '#EAB308' : '#1E1E1E',
            }}
          >
            <Bookmark
              size={14}
              strokeWidth={2}
              style={{
                color: activeFilter === 'favoriter' ? '#141414' : '#EAB308',
                fill: activeFilter === 'favoriter' ? '#141414' : 'none',
              }}
            />
            <span
              className="text-[11px] font-bold leading-none flex items-center justify-center rounded-full min-w-[18px] h-[18px] px-1"
              style={{
                background: activeFilter === 'favoriter' ? 'rgba(0,0,0,0.2)' : '#2A2A2A',
                color: activeFilter === 'favoriter' ? '#141414' : '#EAB308',
              }}
            >
              {myExercises.length}
            </span>
          </button>
        )}

        <button
          onClick={() => setActiveFilter(null)}
          className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors"
          style={{
            background: activeFilter === null ? '#F05A28' : '#1E1E1E',
            color: activeFilter === null ? '#fff' : '#8A8A8A',
          }}
        >
          Alla
        </button>

        {SECTIONS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(activeFilter === key ? null : key)}
            className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            style={{
              background: activeFilter === key ? '#F05A28' : '#1E1E1E',
              color: activeFilter === key ? '#fff' : '#8A8A8A',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="px-4 mt-6 space-y-8">

        {/* Mina övningar — shown when bookmark pill is active */}
        {activeFilter === 'favoriter' && (
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-widest mb-3 px-1 flex items-center gap-2" style={{ color: '#666' }}>
              Mina övningar
              <span style={{ color: '#444' }}>{myExercises.length}</span>
            </h2>
            <div className="space-y-2">
              {myExercises.map((ex) => <ExerciseCard key={ex.id} exercise={ex} />)}
            </div>
          </div>
        )}

        {visibleSections.map(({ key, label }) => {
          const items = EXERCISES_BY_CATEGORY[key];
          if (items.length === 0) return null;
          return (
            <div key={key}>
              <h2 className="text-[10px] font-semibold uppercase tracking-widest mb-3 px-1 flex items-center gap-2" style={{ color: '#666' }}>
                {label}
                <span style={{ color: '#444' }}>{items.length}</span>
              </h2>
              <div className="space-y-2">
                {items.map((ex) => <ExerciseCard key={ex.id} exercise={ex} />)}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
