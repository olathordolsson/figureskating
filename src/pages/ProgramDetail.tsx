import { useState, useRef } from 'react';
import { ArrowLeft, Pencil, Trash2, ChevronUp, ChevronDown, Music, Plus, X, AlignLeft, Play } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { SpotifyMeta } from '../store/useStore';
import { TRICKS } from '../data/tricks';
import { DifficultyBadge } from '../components/DifficultyBadge';
import { TrickPicker } from '../components/TrickPicker';
import { programBv, elementBv, formatBv } from '../utils/bv';

export function ProgramDetail() {
  const {
    programs, selectedProgramId, selectProgram, deleteProgram,
    renameProgram, setSpotifyUrl, setSpotifyMeta, addElement, addNote, removeItem, moveItem, setNoteText,
  } = useStore();

  const program = programs.find((p) => p.id === selectedProgramId);
  const [editing, setEditing] = useState(false);
  const [nameVal, setNameVal] = useState('');
  const [spotifyVal, setSpotifyVal] = useState('');
  const [artistVal, setArtistVal] = useState('');
  const [durationVal, setDurationVal] = useState('');
  const [saving, setSaving] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  if (!program) return null;

  const bv = programBv(program);
  const trickCount = program.items.filter((it) => it.type === 'trick').length;

  const handleMove = (itemId: string, dir: 'up' | 'down') => {
    const snaps = new Map<string, number>();
    itemRefs.current.forEach((el, id) => {
      snaps.set(id, el.getBoundingClientRect().top);
    });
    moveItem(program.id, itemId, dir);
    requestAnimationFrame(() => {
      itemRefs.current.forEach((el, id) => {
        const from = snaps.get(id);
        if (from === undefined) return;
        const delta = from - el.getBoundingClientRect().top;
        if (delta === 0) return;
        el.style.transition = 'none';
        el.style.transform = `translateY(${delta}px)`;
        requestAnimationFrame(() => {
          el.style.transition = 'transform 0.22s ease';
          el.style.transform = '';
        });
      });
    });
  };

  const enterEdit = () => {
    setNameVal(program.name);
    setSpotifyVal(program.spotifyUrl ?? '');
    setArtistVal(program.spotifyMeta?.artist ?? '');
    setDurationVal(program.spotifyMeta?.duration ?? '');
    setEditing(true);
  };

  const saveEdit = async () => {
    setSaving(true);
    if (nameVal.trim()) renameProgram(program.id, nameVal.trim());
    const url = spotifyVal.trim();
    setSpotifyUrl(program.id, url);

    if (url) {
      let title = program.spotifyMeta?.title ?? '';
      let thumbnailUrl = program.spotifyMeta?.thumbnailUrl ?? '';
      try {
        const res = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`);
        if (res.ok) {
          const data = await res.json() as { title?: string; thumbnail_url?: string };
          if (data.title) title = data.title;
          if (data.thumbnail_url) thumbnailUrl = data.thumbnail_url;
        }
      } catch { /* keep existing values */ }
      setSpotifyMeta(program.id, {
        title,
        artist: artistVal.trim(),
        duration: durationVal.trim(),
        thumbnailUrl,
      });
    } else {
      setSpotifyMeta(program.id, null);
    }

    setSaving(false);
    setEditing(false);
  };

  const handleDelete = () => {
    if (confirm(`Ta bort "${program.name}"?`)) deleteProgram(program.id);
  };

  const MoveControls = ({ itemId, index }: { itemId: string; index: number }) => (
    <div className="flex items-center gap-0.5 shrink-0">
      <button
        onClick={() => handleMove(itemId, 'up')}
        disabled={index === 0}
        className="w-8 h-8 flex items-center justify-center rounded-lg disabled:opacity-20"
        style={{ color: '#555' }}
      >
        <ChevronUp size={16} strokeWidth={2} />
      </button>
      <button
        onClick={() => handleMove(itemId, 'down')}
        disabled={index === program.items.length - 1}
        className="w-8 h-8 flex items-center justify-center rounded-lg disabled:opacity-20"
        style={{ color: '#555' }}
      >
        <ChevronDown size={16} strokeWidth={2} />
      </button>
      <button
        onClick={() => removeItem(program.id, itemId)}
        className="w-8 h-8 flex items-center justify-center rounded-lg"
        style={{ color: '#555' }}
      >
        <X size={14} strokeWidth={2.5} />
      </button>
    </div>
  );

  // ── VIEW MODE ─────────────────────────────────────────────────────────────
  if (!editing) {
    let trickNum = 0;
    return (
      <div className="pb-28">
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-4"
          style={{
            background: '#141414',
            borderBottom: '1px solid #2A2A2A',
            paddingTop: 'calc(env(safe-area-inset-top, 44px) + 10px)',
            paddingBottom: '10px',
          }}
        >
          <button
            onClick={() => selectProgram(null)}
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{ color: '#888' }}
          >
            <ArrowLeft size={16} strokeWidth={2} />
            Mina program
          </button>
          <button
            onClick={enterEdit}
            className="flex items-center gap-1.5 px-3 h-8 rounded-full text-sm font-medium"
            style={{ background: '#1E1E1E', color: '#C8F500' }}
          >
            <Pencil size={13} strokeWidth={2} />
            Redigera
          </button>
        </div>

        <div className="px-5 pt-6 space-y-5">
          <div>
            <h1 className="text-2xl font-bold text-white">{program.name}</h1>
            <p className="text-sm mt-1" style={{ color: '#555' }}>
              {trickCount} trick · BV {formatBv(bv)}
            </p>
          </div>

          {program.spotifyUrl && (
            <a
              href={program.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3.5 rounded-2xl"
              style={{ background: '#1E1E1E' }}
            >
              {program.spotifyMeta?.thumbnailUrl ? (
                <img
                  src={program.spotifyMeta.thumbnailUrl}
                  alt=""
                  className="shrink-0 w-12 h-12 rounded-xl object-cover"
                />
              ) : (
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: '#262626' }}
                >
                  <Music size={18} strokeWidth={1.8} style={{ color: '#1DB954' }} />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-white truncate leading-snug">
                  {program.spotifyMeta?.title || 'Öppna i Spotify'}
                </p>
                {(program.spotifyMeta?.artist || program.spotifyMeta?.duration) && (
                  <p className="text-xs mt-0.5 truncate" style={{ color: '#888' }}>
                    {[program.spotifyMeta.artist, program.spotifyMeta.duration]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                )}
              </div>
              <Play size={14} strokeWidth={2} style={{ color: '#1DB954' }} className="shrink-0" />
            </a>
          )}

          {program.items.length === 0 ? (
            <div className="rounded-2xl px-5 py-12 flex flex-col items-center text-center" style={{ background: '#1E1E1E' }}>
              <p className="text-white font-semibold text-sm">Inga trick tillagda</p>
              <p className="text-xs mt-1" style={{ color: '#555' }}>Tryck på Redigera för att bygga programmet</p>
            </div>
          ) : (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-3 px-1" style={{ color: '#555' }}>
                Program
              </p>
              <div className="space-y-1">
                {program.items.map((item) => {
                  if (item.type === 'trick') {
                    trickNum++;
                    const trick = TRICKS.find((t) => t.id === item.trickId);
                    if (!trick) return null;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-2xl"
                        style={{ background: '#1E1E1E' }}
                      >
                        <span
                          className="shrink-0 w-6 h-6 rounded-full text-[11px] flex items-center justify-center font-bold"
                          style={{ background: '#262626', color: '#888' }}
                        >
                          {trickNum}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[15px] text-white truncate">{trick.name}</p>
                          <p className="text-xs mt-0.5" style={{ color: '#555' }}>{trick.englishName}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <DifficultyBadge level={trick.difficulty} />
                          <span className="text-xs font-semibold tabular-nums" style={{ color: '#555' }}>
                            {formatBv(elementBv(item.trickId))}
                          </span>
                        </div>
                      </div>
                    );
                  }

                  if (item.type === 'note') {
                    return (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 px-4 py-3 rounded-2xl"
                        style={{ background: '#181818' }}
                      >
                        <AlignLeft size={13} strokeWidth={2} className="mt-0.5 shrink-0" style={{ color: '#444' }} />
                        <p className="text-sm leading-relaxed italic" style={{ color: '#666' }}>
                          {item.text || <span style={{ color: '#444' }}>Tom anteckning</span>}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── EDIT MODE ─────────────────────────────────────────────────────────────
  let editTrickNum = 0;
  return (
    <div className="pb-28">
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-4"
        style={{
          background: '#141414',
          borderBottom: '1px solid #2A2A2A',
          paddingTop: 'calc(env(safe-area-inset-top, 44px) + 10px)',
          paddingBottom: '10px',
        }}
      >
        <button
          onClick={() => selectProgram(null)}
          className="flex items-center gap-1.5 text-sm font-medium"
          style={{ color: '#888' }}
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Mina program
        </button>
        <button
          onClick={saveEdit}
          disabled={saving}
          className="flex items-center gap-1.5 px-4 h-8 rounded-full text-sm font-semibold disabled:opacity-50"
          style={{ background: '#C8F500', color: '#141414' }}
        >
          {saving ? 'Sparar…' : 'Spara'}
        </button>
      </div>

      <div className="px-5 pt-5 space-y-5">

        {/* Name */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 px-1" style={{ color: '#555' }}>
            Programnamn
          </p>
          <input
            value={nameVal}
            onChange={(e) => setNameVal(e.target.value)}
            className="w-full rounded-2xl px-4 py-3.5 text-lg font-bold text-white outline-none"
            style={{ background: '#1E1E1E' }}
          />
        </div>

        {/* Spotify */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 mb-2 px-1">
            <Music size={13} strokeWidth={2} style={{ color: '#555' }} />
            <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
              Musik
            </p>
          </div>
          <input
            value={spotifyVal}
            onChange={(e) => setSpotifyVal(e.target.value)}
            placeholder="Spotify-länk…"
            className="w-full rounded-2xl px-4 py-3.5 text-sm text-white outline-none"
            style={{ background: '#1E1E1E', color: spotifyVal ? '#1DB954' : undefined }}
          />
          <div className="flex gap-2">
            <input
              value={artistVal}
              onChange={(e) => setArtistVal(e.target.value)}
              placeholder="Artist"
              className="flex-1 rounded-2xl px-4 py-3 text-sm text-white outline-none placeholder:text-[#444]"
              style={{ background: '#1E1E1E' }}
            />
            <input
              value={durationVal}
              onChange={(e) => setDurationVal(e.target.value)}
              placeholder="Längd (t.ex. 2:50)"
              className="w-36 rounded-2xl px-4 py-3 text-sm text-white outline-none placeholder:text-[#444]"
              style={{ background: '#1E1E1E' }}
            />
          </div>
        </div>

        {/* BV summary */}
        <div className="flex items-center gap-4 rounded-2xl px-5 py-4" style={{ background: '#1E1E1E' }}>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#555' }}>Totalt BV</p>
            <p className="text-2xl font-bold text-white">{formatBv(bv)}</p>
          </div>
          <div style={{ width: 1, alignSelf: 'stretch', background: '#2A2A2A' }} />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#555' }}>Trick</p>
            <p className="text-2xl font-bold text-white">{trickCount}</p>
          </div>
        </div>

        {/* Item list */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 px-1" style={{ color: '#555' }}>
            Trick och anteckningar
          </p>

          {program.items.length === 0 && (
            <div className="rounded-2xl px-5 py-8 flex flex-col items-center text-center mb-2" style={{ background: '#1E1E1E' }}>
              <p className="text-white font-semibold text-sm">Inga trick ännu</p>
              <p className="text-xs mt-1" style={{ color: '#555' }}>Lägg till trick eller anteckningar nedan</p>
            </div>
          )}

          <div className="space-y-1">
            {program.items.map((item, i) => {
              if (item.type === 'trick') {
                editTrickNum++;
                const trick = TRICKS.find((t) => t.id === item.trickId);
                if (!trick) return null;
                return (
                  <div
                    key={item.id}
                    ref={(el) => { if (el) itemRefs.current.set(item.id, el); else itemRefs.current.delete(item.id); }}
                    className="flex items-center gap-2 px-4 py-3 rounded-2xl"
                    style={{ background: '#1E1E1E' }}
                  >
                    <span
                      className="shrink-0 w-6 h-6 rounded-full text-[11px] flex items-center justify-center font-bold"
                      style={{ background: '#262626', color: '#888' }}
                    >
                      {editTrickNum}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[14px] text-white truncate">{trick.name}</p>
                      <DifficultyBadge level={trick.difficulty} showBv />
                    </div>
                    <MoveControls itemId={item.id} index={i} />
                  </div>
                );
              }

              if (item.type === 'note') {
                return (
                  <div
                    key={item.id}
                    ref={(el) => { if (el) itemRefs.current.set(item.id, el); else itemRefs.current.delete(item.id); }}
                    className="rounded-2xl overflow-hidden"
                    style={{ background: '#1A1A1A', border: '1px solid #2A2A2A' }}
                  >
                    <div className="flex items-start gap-2 px-4 py-3">
                      <AlignLeft size={13} strokeWidth={2} className="mt-2.5 shrink-0" style={{ color: '#444' }} />
                      <textarea
                        value={item.text}
                        onChange={(e) => setNoteText(program.id, item.id, e.target.value)}
                        placeholder="Skriv en anteckning om åkningen…"
                        rows={2}
                        className="flex-1 text-sm leading-relaxed italic text-white outline-none resize-none placeholder:text-[#444] bg-transparent"
                      />
                      <MoveControls itemId={item.id} index={i} />
                    </div>
                  </div>
                );
              }
            })}
          </div>

          {/* Add buttons */}
          <p className="text-[10px] font-semibold uppercase tracking-widest mt-4 mb-2 px-1" style={{ color: '#555' }}>
            Lägg till block
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPickerOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl text-sm font-semibold"
              style={{ background: '#1E1E1E', color: '#C8F500' }}
            >
              <Plus size={16} strokeWidth={2.5} />
              Trick
            </button>
            <button
              onClick={() => addNote(program.id)}
              className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl text-sm font-semibold"
              style={{ background: '#1E1E1E', color: '#888' }}
            >
              <AlignLeft size={15} strokeWidth={2} />
              Anteckning
            </button>
          </div>
        </div>

        {/* Delete */}
        <button
          onClick={handleDelete}
          className="w-full flex items-center justify-center gap-2 h-12 rounded-2xl text-sm font-semibold"
          style={{ background: '#1E1E1E', color: '#EF4444' }}
        >
          <Trash2 size={15} strokeWidth={2} />
          Ta bort program
        </button>
      </div>

      {pickerOpen && (
        <TrickPicker
          onSelect={(trickId) => addElement(program.id, trickId)}
          onClose={() => setPickerOpen(false)}
        />
      )}
    </div>
  );
}
