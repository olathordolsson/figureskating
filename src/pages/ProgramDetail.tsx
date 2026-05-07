import { useState } from 'react';
import { ArrowLeft, Pencil, Trash2, ChevronUp, ChevronDown, Music, Plus, X, AlignLeft } from 'lucide-react';
import { useStore } from '../store/useStore';
import { TRICKS } from '../data/tricks';
import { DifficultyBadge } from '../components/DifficultyBadge';
import { TrickPicker } from '../components/TrickPicker';
import { programBv, elementBv, formatBv } from '../utils/bv';

export function ProgramDetail() {
  const {
    programs, selectedProgramId, selectProgram, deleteProgram,
    renameProgram, setSpotifyUrl, addElement, addNote, removeItem, moveItem, setNoteText,
  } = useStore();

  const program = programs.find((p) => p.id === selectedProgramId);
  const [editing, setEditing] = useState(false);
  const [nameVal, setNameVal] = useState('');
  const [spotifyVal, setSpotifyVal] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);

  if (!program) return null;

  const bv = programBv(program);
  const trickCount = program.items.filter((it) => it.type === 'trick').length;

  const enterEdit = () => {
    setNameVal(program.name);
    setSpotifyVal(program.spotifyUrl ?? '');
    setEditing(true);
  };

  const saveEdit = () => {
    if (nameVal.trim()) renameProgram(program.id, nameVal.trim());
    setSpotifyUrl(program.id, spotifyVal.trim());
    setEditing(false);
  };

  const handleDelete = () => {
    if (confirm(`Ta bort "${program.name}"?`)) deleteProgram(program.id);
  };

  const MoveControls = ({ itemId, index }: { itemId: string; index: number }) => (
    <div className="flex items-center gap-0.5 shrink-0">
      <button
        onClick={() => moveItem(program.id, itemId, 'up')}
        disabled={index === 0}
        className="w-8 h-8 flex items-center justify-center rounded-lg disabled:opacity-20"
        style={{ color: '#555' }}
      >
        <ChevronUp size={16} strokeWidth={2} />
      </button>
      <button
        onClick={() => moveItem(program.id, itemId, 'down')}
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
          className="sticky top-0 z-10 flex items-center justify-between px-4 py-3"
          style={{ background: '#141414', borderBottom: '1px solid #2A2A2A' }}
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
              {trickCount} element · BV {formatBv(bv)}
            </p>
          </div>

          {program.spotifyUrl && (
            <a
              href={program.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl"
              style={{ background: '#1E1E1E' }}
            >
              <Music size={16} strokeWidth={1.8} style={{ color: '#1DB954' }} />
              <p className="text-sm font-medium flex-1 truncate" style={{ color: '#1DB954' }}>
                Öppna i Spotify
              </p>
            </a>
          )}

          {program.items.length === 0 ? (
            <div className="rounded-2xl px-5 py-12 flex flex-col items-center text-center" style={{ background: '#1E1E1E' }}>
              <p className="text-white font-semibold text-sm">Inga element tillagda</p>
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
                          {item.text || <span style={{ color: '#444' }}>Tom not</span>}
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
        className="sticky top-0 z-10 flex items-center justify-between px-4 py-3"
        style={{ background: '#141414', borderBottom: '1px solid #2A2A2A' }}
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
          className="flex items-center gap-1.5 px-4 h-8 rounded-full text-sm font-semibold"
          style={{ background: '#C8F500', color: '#141414' }}
        >
          Spara
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
        <div>
          <div className="flex items-center gap-1.5 mb-2 px-1">
            <Music size={13} strokeWidth={2} style={{ color: '#555' }} />
            <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#555' }}>
              Musik (Spotify-länk)
            </p>
          </div>
          <input
            value={spotifyVal}
            onChange={(e) => setSpotifyVal(e.target.value)}
            placeholder="https://open.spotify.com/track/…"
            className="w-full rounded-2xl px-4 py-3.5 text-sm text-white outline-none"
            style={{ background: '#1E1E1E', color: spotifyVal ? '#1DB954' : undefined }}
          />
        </div>

        {/* BV summary */}
        <div className="flex items-center gap-4 rounded-2xl px-5 py-4" style={{ background: '#1E1E1E' }}>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#555' }}>Totalt BV</p>
            <p className="text-2xl font-bold text-white">{formatBv(bv)}</p>
          </div>
          <div style={{ width: 1, alignSelf: 'stretch', background: '#2A2A2A' }} />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#555' }}>Element</p>
            <p className="text-2xl font-bold text-white">{trickCount}</p>
          </div>
        </div>

        {/* Item list */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 px-1" style={{ color: '#555' }}>
            Element och noter
          </p>

          {program.items.length === 0 && (
            <div className="rounded-2xl px-5 py-8 flex flex-col items-center text-center mb-2" style={{ background: '#1E1E1E' }}>
              <p className="text-white font-semibold text-sm">Inga element ännu</p>
              <p className="text-xs mt-1" style={{ color: '#555' }}>Lägg till element eller noter nedan</p>
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
                    className="rounded-2xl overflow-hidden"
                    style={{ background: '#1A1A1A', border: '1px solid #2A2A2A' }}
                  >
                    <div className="flex items-start gap-2 px-4 py-3">
                      <AlignLeft size={13} strokeWidth={2} className="mt-2.5 shrink-0" style={{ color: '#444' }} />
                      <textarea
                        value={item.text}
                        onChange={(e) => setNoteText(program.id, item.id, e.target.value)}
                        placeholder="Skriv en not om åkningen…"
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
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setPickerOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl text-sm font-semibold"
              style={{ background: '#1E1E1E', color: '#C8F500' }}
            >
              <Plus size={16} strokeWidth={2.5} />
              Element
            </button>
            <button
              onClick={() => addNote(program.id)}
              className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl text-sm font-semibold"
              style={{ background: '#1E1E1E', color: '#888' }}
            >
              <AlignLeft size={15} strokeWidth={2} />
              Not
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
