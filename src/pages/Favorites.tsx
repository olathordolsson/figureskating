import { useState } from 'react';
import { Pin, Dumbbell, ChevronDown, Footprints, BicepsFlexed, Activity } from 'lucide-react';
import { TRICKS } from '../data/tricks';
import { TRICK_OFF_ICE } from '../data/trickOffIce';
import { useStore } from '../store/useStore';
import { TrickCard } from '../components/TrickCard';
import { HeroHeader } from '../components/HeroHeader';
import heroImage from '../assets/hero.jpg';

export function Favorites() {
  const { favorites } = useStore();
  const tricks = TRICKS.filter((t) => favorites.has(t.id));
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (key: string) =>
    setOpenCategories((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const aggregated = (() => {
    const stretch = new Set<string>();
    const strength = new Set<string>();
    const cardio = new Set<string>();
    for (const t of tricks) {
      const ex = TRICK_OFF_ICE[t.id];
      if (!ex) continue;
      ex.stretch.forEach((s) => stretch.add(s));
      ex.strength.forEach((s) => strength.add(s));
      ex.cardio.forEach((s) => cardio.add(s));
    }
    return {
      stretch: [...stretch],
      strength: [...strength],
      cardio: [...cardio],
    };
  })();

  const hasOffIce = aggregated.stretch.length + aggregated.strength.length + aggregated.cardio.length > 0;

  const rows = [
    { key: 'stretch',  label: 'Rörlighet', Icon: Footprints,   dot: '#FEF9C3', dotText: '#92400E', items: aggregated.stretch },
    { key: 'strength', label: 'Styrka',    Icon: BicepsFlexed, dot: '#DBEAFE', dotText: '#1D4ED8', items: aggregated.strength },
    { key: 'cardio',   label: 'Kondition', Icon: Activity,     dot: '#DCFCE7', dotText: '#15803D', items: aggregated.cardio },
  ];

  return (
    <div className="pb-28">
      <HeroHeader
        image={heroImage}
        title="Tränar på"
        subtitle="Trick du jobbar med just nu"
      />

      <div className="px-4 mt-5 space-y-2">
        {tricks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-full bg-app-card flex items-center justify-center mb-4">
              <Pin size={24} className="text-app-muted" strokeWidth={1.5} />
            </div>
            <p className="text-white font-semibold">Inga trick här ännu</p>
            <p className="text-app-sub text-sm mt-1 max-w-[220px]">
              Tryck på nålen på ett trick för att markera att du tränar på det
            </p>
          </div>
        ) : (
          tricks.map((trick) => <TrickCard key={trick.id} trick={trick} />)
        )}
      </div>

      {hasOffIce && (
        <div className="px-4 mt-8">
          <div className="flex items-center gap-1.5 mb-3 px-1">
            <Dumbbell size={13} strokeWidth={2} style={{ color: '#555' }} />
            <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
              Träning utanför isen
            </p>
          </div>
          <div className="space-y-1">
            {rows.map(({ key, label, Icon, dot, dotText, items }) => {
              if (!items.length) return null;
              const isOpen = openCategories.has(key);
              return (
                <div key={key} className="rounded-2xl overflow-hidden" style={{ background: '#1E1E1E' }}>
                  <button
                    onClick={() => toggleCategory(key)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 active:scale-[0.98] transition-transform"
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: '#262626' }}
                    >
                      <Icon size={16} strokeWidth={2} style={{ color: '#888' }} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-semibold text-[15px] text-white">{label}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#555' }}>{items.length} övningar</p>
                    </div>
                    <ChevronDown
                      size={15}
                      strokeWidth={2}
                      style={{
                        color: '#555',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 300ms ease',
                      }}
                    />
                  </button>
                  {isOpen && (
                    <ul className="px-4 pb-4 space-y-3">
                      {items.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span
                            className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                            style={{ background: dot, color: dotText }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-sm leading-relaxed" style={{ color: '#999' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
