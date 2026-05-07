import { useMemo, useState } from 'react';
import heroImage from '../assets/hero.jpg';
import { Search, X, ArrowUpFromLine, IterationCw, LineSquiggle, PilcrowRight } from 'lucide-react';
import { HeroHeader } from '../components/HeroHeader';
import { CATEGORIES, TRICKS, type CategoryId, type Difficulty } from '../data/tricks';
import { useStore } from '../store/useStore';
import { TrickCard } from '../components/TrickCard';

const categoryIcon: Record<CategoryId, React.ReactNode> = {
  hopp:         <ArrowUpFromLine size={13} strokeWidth={2} />,
  snurrar:      <IterationCw size={13} strokeWidth={2} style={{ transform: 'rotate(90deg)' }} />,
  svängar:      <LineSquiggle size={13} strokeWidth={2} />,
  glidövningar: <PilcrowRight size={13} strokeWidth={2} />,
};

const DIFFICULTIES: { id: Difficulty; label: string; bg: string; color: string }[] = [
  { id: 'nybörjare',     label: 'Nybörjare',     bg: '#0D2B1A', color: '#22C55E' },
  { id: 'grundläggande', label: 'Grundläggande', bg: '#1E2A0A', color: '#84CC16' },
  { id: 'medel',         label: 'Medel',         bg: '#2A2000', color: '#EAB308' },
  { id: 'avancerad',     label: 'Avancerad',     bg: '#2A1200', color: '#F97316' },
  { id: 'elit',          label: 'Elit',          bg: '#2A0A0A', color: '#EF4444' },
];

export function Browse() {
  const { activeCategory, setCategory } = useStore();
  const [selectedDifficulties, setSelectedDifficulties] = useState<Set<Difficulty>>(new Set());
  const [query, setQuery] = useState('');
  const toggleDifficulty = (d: Difficulty) => {
    setSelectedDifficulties((prev) => {
      const next = new Set(prev);
      next.has(d) ? next.delete(d) : next.add(d);
      return next;
    });
  };

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    let tricks = activeCategory ? TRICKS.filter((t) => t.category === activeCategory) : TRICKS;
    if (selectedDifficulties.size > 0) {
      tricks = tricks.filter((t) => selectedDifficulties.has(t.difficulty));
    }
    if (q) {
      tricks = tricks.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.englishName.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }
    return tricks.reduce<Record<string, typeof TRICKS>>((acc, t) => {
      const key = t.subcategoryLabel;
      if (!acc[key]) acc[key] = [];
      acc[key].push(t);
      return acc;
    }, {});
  }, [activeCategory, selectedDifficulties, query]);

  return (
    <div className="pb-28">
      <HeroHeader
        image={heroImage}
        title="Min konståkning"
        subtitle="Utforska trick och tekniker"
      />

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-app-muted pointer-events-none" strokeWidth={2} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Sök trick…"
            className="w-full bg-app-raised rounded-xl pl-9 pr-9 py-2.5 text-sm text-white placeholder:text-app-muted outline-none focus:ring-2 focus:ring-brand-orange/40"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-app-muted hover:text-white transition-colors"
              aria-label="Rensa sökning"
            >
              <X size={15} strokeWidth={2} />
            </button>
          )}
        </div>
      </div>

      {/* Category tabs — primary */}
      <div className="flex gap-2 px-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        <button
          onClick={() => setCategory(null)}
          className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors"
          style={{
            background: activeCategory === null ? '#F05A28' : '#1E1E1E',
            color: activeCategory === null ? '#fff' : '#8A8A8A',
          }}
        >
          Alla
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            style={{
              background: activeCategory === cat.id ? '#F05A28' : '#1E1E1E',
              color: activeCategory === cat.id ? '#fff' : '#8A8A8A',
            }}
          >
            {categoryIcon[cat.id]}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Difficulty filter — secondary */}
      <div className="flex gap-1.5 px-4 mt-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {DIFFICULTIES.map((d) => {
          const active = selectedDifficulties.has(d.id);
          return (
            <button
              key={d.id}
              onClick={() => toggleDifficulty(d.id)}
              className="shrink-0 px-3 py-1 rounded-full text-[11px] font-medium transition-colors"
              style={{
                background: active ? d.bg : '#262626',
                color: active ? d.color : '#8A8A8A',
              }}
            >
              {d.label}
            </button>
          );
        })}
      </div>

      {/* List */}
      <div className="px-4 mt-6 space-y-8">
        {Object.entries(grouped).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-white font-medium">Inga trick matchar filtret</p>
            <p className="text-app-sub text-sm mt-1">Prova att ta bort något filter</p>
          </div>
        ) : (
          Object.entries(grouped).map(([subcatLabel, tricks]) => (
            <div key={subcatLabel}>
              <h2 className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: '#666' }}>
                {subcatLabel}
              </h2>
              <div className="space-y-2">
                {tricks.map((trick) => (
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
