import type { Difficulty } from '../data/tricks';

const config: Record<Difficulty, { label: string; bv: string; bg: string; color: string }> = {
  nybörjare:     { label: 'Nybörjare',     bv: 'BV 0.40',      bg: '#0D2B1A', color: '#22C55E' },
  grundläggande: { label: 'Grundläggande', bv: 'BV 0.50–0.60', bg: '#1E2A0A', color: '#84CC16' },
  medel:         { label: 'Medel',         bv: 'BV 1.10–2.10', bg: '#2A2000', color: '#EAB308' },
  avancerad:     { label: 'Avancerad',     bv: 'BV 3.30–5.90', bg: '#2A1200', color: '#F97316' },
  elit:          { label: 'Elit',          bv: 'BV 8.00+',     bg: '#2A0A0A', color: '#EF4444' },
};

export function DifficultyBadge({ level, showBv }: { level: Difficulty; showBv?: boolean }) {
  const { label, bv, bg, color } = config[level];
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium"
      style={{ background: bg, color }}
    >
      {label}
      {showBv && <span style={{ opacity: 0.5, fontWeight: 400 }}>{bv}</span>}
    </span>
  );
}
