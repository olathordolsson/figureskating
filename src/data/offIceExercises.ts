import { TRICKS } from './tricks';
import { TRICK_OFF_ICE } from './trickOffIce';

export type ExerciseCategory = 'stretch' | 'strength' | 'cardio' | 'teknik';

export type Exercise = {
  id: string;
  name: string;
  contextNote: string; // the "why this exercise" note from the original data
  category: ExerciseCategory;
  trickIds: string[];
};

function parse(raw: string): { name: string; contextNote: string } {
  const idx = raw.indexOf(' – ');
  if (idx === -1) return { name: raw.trim(), contextNote: '' };
  return { name: raw.slice(0, idx).trim(), contextNote: raw.slice(idx + 3).trim() };
}

// Deduplicate by exercise NAME so "Ettbenssquat höger" and "Ettbenssquat vänster"
// are separate entries, but duplicate full strings are collapsed.
const byName = new Map<string, { name: string; contextNote: string; category: ExerciseCategory; trickIds: string[] }>();

for (const trick of TRICKS) {
  const ex = TRICK_OFF_ICE[trick.id];
  if (!ex) continue;
  const add = (raws: string[], cat: ExerciseCategory) => {
    for (const raw of raws) {
      const { name, contextNote } = parse(raw);
      if (!byName.has(name)) {
        byName.set(name, { name, contextNote, category: cat, trickIds: [] });
      }
      const entry = byName.get(name)!;
      if (!entry.trickIds.includes(trick.id)) entry.trickIds.push(trick.id);
    }
  };
  add(ex.stretch, 'stretch');
  add(ex.strength, 'strength');
  add(ex.cardio, 'cardio');
  if (ex.teknik) add(ex.teknik, 'teknik');
}

export const EXERCISES: Exercise[] = [...byName.values()].map((ex, i) => ({ id: `ex-${i}`, ...ex }));

export const EXERCISES_BY_CATEGORY: Record<ExerciseCategory, Exercise[]> = {
  stretch:  EXERCISES.filter((e) => e.category === 'stretch'),
  strength: EXERCISES.filter((e) => e.category === 'strength'),
  cardio:   EXERCISES.filter((e) => e.category === 'cardio'),
  teknik:   EXERCISES.filter((e) => e.category === 'teknik'),
};

const BY_NAME = new Map(EXERCISES.map((e) => [e.name, e]));

export function findExerciseByRaw(raw: string): Exercise | undefined {
  const idx = raw.indexOf(' – ');
  const name = idx === -1 ? raw.trim() : raw.slice(0, idx).trim();
  return BY_NAME.get(name);
}
