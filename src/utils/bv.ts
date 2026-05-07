import type { Difficulty } from '../data/tricks';
import type { SkatingProgram } from '../store/useStore';
import { TRICKS } from '../data/tricks';

const BV_BY_DIFFICULTY: Record<Difficulty, number> = {
  nybörjare:     0.40,
  grundläggande: 0.53,
  medel:         1.60,
  avancerad:     4.60,
  elit:          8.00,
};

export function elementBv(trickId: string): number {
  const trick = TRICKS.find((t) => t.id === trickId);
  return trick ? (BV_BY_DIFFICULTY[trick.difficulty] ?? 0) : 0;
}

export function programBv(program: SkatingProgram): number {
  return program.items
    .filter((it) => it.type === 'trick')
    .reduce((sum, it) => sum + (it.type === 'trick' ? elementBv(it.trickId) : 0), 0);
}

export function formatBv(value: number): string {
  return value.toFixed(2);
}
