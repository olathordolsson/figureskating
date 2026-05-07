import { useState } from 'react';
import { X, Search } from 'lucide-react';
import { TRICKS } from '../data/tricks';
import { DifficultyBadge } from './DifficultyBadge';

type Props = {
  onSelect: (trickId: string) => void;
  onClose: () => void;
};

export function TrickPicker({ onSelect, onClose }: Props) {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? TRICKS.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.englishName.toLowerCase().includes(query.toLowerCase())
      )
    : TRICKS;

  const grouped = filtered.reduce<Record<string, typeof TRICKS>>((acc, t) => {
    if (!acc[t.subcategoryLabel]) acc[t.subcategoryLabel] = [];
    acc[t.subcategoryLabel].push(t);
    return acc;
  }, {});

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{ background: 'rgba(0,0,0,0.65)' }}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="fixed bottom-0 inset-x-0 z-50 mx-auto rounded-t-3xl flex flex-col"
        style={{ background: '#141414', maxWidth: 480, maxHeight: '85dvh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0">
          <p className="text-white font-semibold">Välj element</p>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full"
            style={{ background: '#2A2A2A' }}
          >
            <X size={16} strokeWidth={2.5} style={{ color: '#fff' }} />
          </button>
        </div>

        {/* Search */}
        <div className="px-5 pb-3 shrink-0">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#555' }} strokeWidth={2} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Sök trick…"
              className="w-full rounded-xl pl-8 pr-3 py-2.5 text-sm text-white outline-none"
              style={{ background: '#1E1E1E' }}
              autoFocus
            />
          </div>
        </div>

        {/* List */}
        <div className="overflow-y-auto flex-1 px-5 pb-8 space-y-5">
          {Object.entries(grouped).map(([label, tricks]) => (
            <div key={label}>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#555' }}>
                {label}
              </p>
              <div className="space-y-1">
                {tricks.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => { onSelect(t.id); onClose(); }}
                    className="w-full text-left flex items-center justify-between px-4 py-3 rounded-2xl active:scale-[0.98] transition-transform"
                    style={{ background: '#1E1E1E' }}
                  >
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <DifficultyBadge level={t.difficulty} showBv />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
