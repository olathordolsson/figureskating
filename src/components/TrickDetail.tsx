import { useEffect, useState } from 'react';
import { X, ChevronRight, Pin, CheckCircle, Lightbulb, TriangleAlert, ListOrdered, Play, Info, Link, Dumbbell, ChevronDown, Footprints, Activity, BicepsFlexed, Target } from 'lucide-react';
import { TRICKS, type Trick } from '../data/tricks';
import { TRICK_VIDEOS } from '../data/trickVideos';
import { TRICK_PHOTOS } from '../data/trickPhotos';
import { TRICK_STEPS } from '../data/trickSteps';
import { TRICK_OFF_ICE } from '../data/trickOffIce';
import { findExerciseByRaw, type Exercise } from '../data/offIceExercises';
import { VideoPlayer } from './VideoPlayer';
import { ExerciseCard } from './ExerciseCard';
import { useStore } from '../store/useStore';
import { DifficultyBadge } from './DifficultyBadge';

export function TrickDetail() {
  const { selectedTrickId, selectTrick, favorites, learned, toggleFavorite, toggleLearned } = useStore();

  const [trick, setTrick] = useState<Trick | null>(null);
  const [visible, setVisible] = useState(false);
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());
  const toggleCategory = (key: string) =>
    setOpenCategories((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  useEffect(() => {
    if (selectedTrickId) {
      const found = TRICKS.find((t) => t.id === selectedTrickId);
      if (found) {
        setTrick(found);
        setOpenCategories(new Set());
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      }
    } else {
      setVisible(false);
      const timer = setTimeout(() => setTrick(null), 520);
      return () => clearTimeout(timer);
    }
  }, [selectedTrickId]);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  const handleClose = () => selectTrick(null);

  if (!trick) return null;

  const related = TRICKS.filter((t) => trick.relatedIds?.includes(t.id));
  const isFav = favorites.has(trick.id);
  const isLearned = learned.has(trick.id);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.65)',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 500ms ease-out',
        }}
        onClick={handleClose}
      />

      {/* Close button — floats above the sheet */}
      <div
        className="fixed z-50 mx-auto inset-x-0 flex justify-end px-4"
        style={{
          maxWidth: 480,
          bottom: 'calc(85dvh + 12px)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 520ms cubic-bezier(0.32, 0.72, 0, 1)',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <button
          onClick={handleClose}
          className="w-9 h-9 flex items-center justify-center rounded-full"
          style={{ background: '#2A2A2A' }}
          aria-label="Stäng"
        >
          <X size={18} strokeWidth={2.5} style={{ color: '#fff' }} />
        </button>
      </div>

      {/* Sheet */}
      <div
        className="fixed bottom-0 inset-x-0 z-50 mx-auto rounded-t-3xl"
        style={{
          background: '#141414',
          maxWidth: 480,
          maxHeight: '85dvh',
          overflow: 'hidden',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 520ms cubic-bezier(0.32, 0.72, 0, 1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">

          {/* Header — photo right, title bottom-left */}
          <div className="relative overflow-hidden" style={{ height: TRICK_PHOTOS[trick.id] ? 260 : 'auto', background: '#141414', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}>

            {TRICK_PHOTOS[trick.id] && (
              <>
                {/* Wrapper sizes to image's natural width — gradient lives inside it */}
                <div style={{ position: 'absolute', top: 0, right: 0, height: '100%', display: 'flex' }}>
                  <img
                    src={TRICK_PHOTOS[trick.id]}
                    alt={trick.name}
                    style={{ height: '100%', width: 'auto', display: 'block', filter: 'grayscale(1) contrast(1.1) brightness(0.7)' }}
                  />
                  {/* Left gradient — spans full image width, always aligned */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, bottom: 0, width: '60%',
                    background: 'linear-gradient(to right, #141414 20%, transparent)',
                  }} />
                </div>
                {/* Bottom gradient on outer container */}
                <div style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0, height: '50%',
                  background: 'linear-gradient(to bottom, transparent, #141414)',
                  zIndex: 1,
                }} />
              </>
            )}

            {/* Title overlaid at bottom-left */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 20px 20px', zIndex: 2 }}>
              <p className="text-[10px] uppercase tracking-widest font-medium mb-2" style={{ color: '#555' }}>
                {trick.subcategoryLabel}
              </p>
              <h1 className="text-2xl font-bold text-white leading-tight">{trick.name}</h1>
              <div className="flex items-center justify-between gap-2 mt-1">
                <p className="text-xs" style={{ color: '#555' }}>{trick.englishName}</p>
                <DifficultyBadge level={trick.difficulty} showBv />
              </div>
            </div>
          </div>

          {/* All padded content */}
          <div className="px-5 pt-4 pb-14 space-y-4">

          {/* Primary actions */}
          <div className="flex gap-2">
            <button
              onClick={() => toggleLearned(trick.id)}
              className="flex-1 flex items-center justify-center gap-1.5 h-12 rounded-xl text-sm font-semibold transition-colors"
              style={{
                background: isLearned ? '#C8F500' : '#1E1E1E',
                color: isLearned ? '#141414' : '#fff',
              }}
            >
              <CheckCircle size={15} strokeWidth={2.2} />
              {isLearned ? 'Lärt mig' : 'Markera som lärd'}
            </button>
            <button
              onClick={() => toggleFavorite(trick.id)}
              className="flex-1 flex items-center justify-center gap-1.5 h-12 rounded-xl text-sm font-semibold transition-colors"
              style={{
                background: isFav ? '#F05A28' : '#1E1E1E',
                color: '#fff',
              }}
            >
              <Pin size={15} strokeWidth={1.8} style={{ fill: isFav ? '#fff' : 'none' }} />
              {isFav ? 'Tränar på' : 'Tränar på'}
            </button>
          </div>

          {/* Description */}
          <div>
            <div className="flex items-center gap-1.5 mb-3 px-1">
              <Info size={13} strokeWidth={2} style={{ color: '#555' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                Om tricket
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: '#fff' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                {trick.description}
              </p>
            </div>
          </div>

          {/* Steps */}
          {TRICK_STEPS[trick.id] && (
            <div>
              <div className="flex items-center gap-1.5 mb-3 px-1">
                <ListOrdered size={13} strokeWidth={2} style={{ color: '#555' }} />
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                  Så här gör du
                </p>
              </div>
              <div className="rounded-2xl p-5" style={{ background: '#fff' }}>
                <ol className="space-y-4">
                  {TRICK_STEPS[trick.id].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                        style={{ background: '#DBEAFE', color: '#1D4ED8' }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* Tips */}
          <div>
            <div className="flex items-center gap-1.5 mb-3 px-1">
              <Lightbulb size={13} strokeWidth={2} style={{ color: '#555' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                Tänk på
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: '#fff' }}>
              <ul className="space-y-4">
                {trick.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                      style={{ background: '#FEF9C3', color: '#92400E' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pitfalls */}
          <div>
            <div className="flex items-center gap-1.5 mb-3 px-1">
              <TriangleAlert size={13} strokeWidth={2} style={{ color: '#555' }} />
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                Vanliga misstag
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: '#fff', border: '1px solid #FFD5C8' }}>
              <ul className="space-y-4">
                {trick.pitfalls.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold"
                      style={{ background: '#FFD5C8', color: '#9A3412' }}
                    >
                      !
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: '#1a1a1a' }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Video */}
          {TRICK_VIDEOS[trick.id] && (
            <div>
              <div className="flex items-center gap-1.5 mb-3 px-1">
                <Play size={13} strokeWidth={2} style={{ color: '#555' }} />
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                  Se tekniken
                </p>
              </div>
              <VideoPlayer
                videoId={TRICK_VIDEOS[trick.id]}
                title={`${trick.name} — video`}
                thumbnail={TRICK_PHOTOS[trick.id]}
              />
            </div>
          )}

          {/* Related */}
          {related.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-3 px-1">
                <Link size={13} strokeWidth={2} style={{ color: '#555' }} />
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                  Relaterade trick
                </p>
              </div>
              <div className="space-y-1">
                {related.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => selectTrick(r.id)}
                    className="w-full text-left rounded-2xl px-4 py-3 flex items-center justify-between active:scale-[0.98] transition-transform"
                    style={{ background: '#1E1E1E' }}
                  >
                    <div>
                      <p className="font-semibold text-white text-sm">{r.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#555' }}>{r.englishName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <DifficultyBadge level={r.difficulty} />
                      <ChevronRight size={15} strokeWidth={2} style={{ color: '#555' }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Off-ice training */}
          {TRICK_OFF_ICE[trick.id] && (() => {
            const offIce = TRICK_OFF_ICE[trick.id];
            const toExercises = (raws: string[]): Exercise[] => {
              const seen = new Set<string>();
              return raws.flatMap((raw) => {
                const ex = findExerciseByRaw(raw);
                if (!ex || seen.has(ex.id)) return [];
                seen.add(ex.id);
                return [ex];
              });
            };
            const rows = [
              { key: 'teknik',   label: 'Teknik',    Icon: Target,       exercises: toExercises(offIce.teknik ?? []) },
              { key: 'stretch',  label: 'Rörlighet', Icon: Footprints,   exercises: toExercises(offIce.stretch) },
              { key: 'strength', label: 'Styrka',    Icon: BicepsFlexed, exercises: toExercises(offIce.strength) },
              { key: 'cardio',   label: 'Kondition', Icon: Activity,     exercises: toExercises(offIce.cardio) },
            ];
            return (
              <div>
                <div className="flex items-center gap-1.5 mb-3 px-1">
                  <Dumbbell size={13} strokeWidth={2} style={{ color: '#555' }} />
                  <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
                    Träning utanför isen
                  </p>
                </div>
                <div className="space-y-1">
                  {rows.map(({ key, label, Icon, exercises }) => {
                    if (!exercises.length) return null;
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
                            <p className="text-xs mt-0.5" style={{ color: '#555' }}>{exercises.length} övningar</p>
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
                          <div className="px-3 pb-3 space-y-2">
                            {exercises.map((ex) => <ExerciseCard key={ex.id} exercise={ex} />)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          </div>{/* end padded content */}
        </div>
      </div>
    </>
  );
}
