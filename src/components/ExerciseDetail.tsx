import { X, ListOrdered, Lightbulb, TriangleAlert, Dumbbell, Link, TrendingUp } from 'lucide-react';
import { useStore } from '../store/useStore';
import { EXERCISES } from '../data/offIceExercises';
import { findExerciseDetail } from '../data/exerciseData';
import { TRICKS } from '../data/tricks';
import { DifficultyBadge } from './DifficultyBadge';

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

export function ExerciseDetail() {
  const { selectedOffIceId, selectOffIce } = useStore();
  const exercise = EXERCISES.find((e) => e.id === selectedOffIceId);
  if (!exercise) return null;

  const color = CATEGORY_COLOR[exercise.category];
  const detail = findExerciseDetail(exercise.name);
  const relatedTricks = TRICKS.filter((t) => exercise.trickIds.includes(t.id));

  return (
    <div className="fixed inset-0 z-[60] flex flex-col overflow-hidden" style={{ background: '#141414' }}>

      {/* Header */}
      <div
        className="flex items-center justify-between px-4 shrink-0"
        style={{ paddingTop: 'calc(env(safe-area-inset-top, 44px) + 12px)', paddingBottom: '12px' }}
      >
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: color.bg, color: color.text }}
        >
          {CATEGORY_LABEL[exercise.category]}
        </span>
        <button
          onClick={() => selectOffIce(null)}
          className="w-9 h-9 flex items-center justify-center rounded-full"
          style={{ background: '#1E1E1E' }}
        >
          <X size={18} strokeWidth={2} style={{ color: '#888' }} />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 pb-12">

        <h1 className="text-3xl font-bold text-white leading-tight mb-1">{exercise.name}</h1>
        {exercise.contextNote && (
          <p className="text-sm mb-6" style={{ color: '#666' }}>{exercise.contextNote}</p>
        )}

        {/* Primary muscles */}
        {detail?.muscles && (
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-3 px-1">
              <Dumbbell size={13} strokeWidth={2} style={{ color: '#555' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                Tränade muskler
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {detail.muscles.map((m, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ background: '#1E1E1E', color: '#999' }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Steps */}
        {detail?.steps && (
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-3 px-1">
              <ListOrdered size={13} strokeWidth={2} style={{ color: '#555' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                Så här gör du
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: '#fff' }}>
              <ol className="space-y-4">
                {detail.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                      style={{ background: '#DBEAFE', color: '#1D4ED8' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* Tips */}
        {detail?.tips && (
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-3 px-1">
              <Lightbulb size={13} strokeWidth={2} style={{ color: '#555' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                Tänk på
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: '#fff' }}>
              <ul className="space-y-4">
                {detail.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                      style={{ background: '#FEF9C3', color: '#92400E' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Mistakes */}
        {detail?.mistakes && (
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-3 px-1">
              <TriangleAlert size={13} strokeWidth={2} style={{ color: '#555' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                Vanliga misstag
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: '#fff', border: '1px solid #FFD5C8' }}>
              <ul className="space-y-4">
                {detail.mistakes.map((m, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                      style={{ background: '#FFD5C8', color: '#9A3412' }}
                    >
                      !
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Progressions */}
        {detail?.progressions && (
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-3 px-1">
              <TrendingUp size={13} strokeWidth={2} style={{ color: '#555' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                Progressioner
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: '#1E1E1E' }}>
              <ol className="space-y-3">
                {detail.progressions.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                      style={{ background: '#1A2A1A', color: '#4ADE80' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: '#999' }}>{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* Related tricks */}
        {relatedTricks.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-3 px-1">
              <Link size={13} strokeWidth={2} style={{ color: '#555' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                Tränar inför
              </p>
            </div>
            <div className="rounded-2xl px-4 py-3 space-y-2" style={{ background: '#1E1E1E' }}>
              {relatedTricks.map((t) => (
                <div key={t.id} className="flex items-center justify-between">
                  <p className="text-sm text-white font-medium">{t.name}</p>
                  <DifficultyBadge level={t.difficulty} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
