import { CheckCircle } from 'lucide-react';
import { TRICKS } from '../data/tricks';
import { useStore } from '../store/useStore';
import { TrickCard } from '../components/TrickCard';
import { DifficultyBadge } from '../components/DifficultyBadge';
import { HeroHeader } from '../components/HeroHeader';
import heroImage from '../assets/thumbsup.jpg';

const ORDER = ['nybörjare', 'grundläggande', 'medel', 'avancerad', 'elit'] as const;

export function Learned() {
  const { learned } = useStore();
  const tricks = TRICKS.filter((t) => learned.has(t.id));

  const byDifficulty = ORDER.reduce<Record<string, typeof TRICKS>>((acc, d) => {
    const group = tricks.filter((t) => t.difficulty === d);
    if (group.length > 0) acc[d] = group;
    return acc;
  }, {});

  return (
    <div className="pb-28">
      <HeroHeader
        image={heroImage}
        title="Tricks jag lärt mig"
        subtitle={tricks.length === 0 ? 'Inga trick markerade' : `${tricks.length} trick klarade`}
      />

      {tricks.length > 0 && (
        <div className="mx-4 mt-5 bg-app-card rounded-2xl p-4 mb-5">
          <p className="text-[10px] font-semibold text-app-muted uppercase tracking-widest mb-3">
            Framsteg
          </p>
          <div className="flex flex-wrap gap-2">
            {ORDER.map((d) => {
              const count = byDifficulty[d]?.length ?? 0;
              if (count === 0) return null;
              return (
                <div key={d} className="flex items-center gap-2">
                  <DifficultyBadge level={d} />
                  <span className="text-sm font-bold text-white">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="px-4 space-y-6">
        {tricks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-full bg-app-card flex items-center justify-center mb-4">
              <CheckCircle size={24} className="text-app-muted" strokeWidth={1.5} />
            </div>
            <p className="text-white font-semibold">Inga trick klarade ännu</p>
            <p className="text-app-sub text-sm mt-1 max-w-[220px]">
              Öppna ett trick och tryck "Markera som lärd" när du kan det
            </p>
          </div>
        ) : (
          Object.entries(byDifficulty).map(([diff, group]) => (
            <div key={diff}>
              <div className="mb-3">
                <DifficultyBadge level={diff as typeof ORDER[number]} />
              </div>
              <div className="space-y-1">
                {group.map((trick) => (
                  <TrickCard key={trick.id} trick={trick} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
