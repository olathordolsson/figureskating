import { useState } from 'react';
import { Music2, Plus, ChevronRight, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { programBv, formatBv } from '../utils/bv';
import { HeroHeader } from '../components/HeroHeader';

const heroImage = 'https://images.unsplash.com/photo-1519139116361-2ea84d04a4aa?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export function Programs() {
  const { programs, createProgram, selectProgram } = useStore();
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');

  const handleCreate = () => {
    if (!newName.trim()) return;
    const id = createProgram(newName.trim());
    setNewName('');
    setCreating(false);
    selectProgram(id);
  };

  return (
    <div className="pb-28">
      <HeroHeader
        image={heroImage}
        title="Mina program"
        subtitle={programs.length === 0 ? 'Inga program skapade' : `${programs.length} ${programs.length === 1 ? 'program' : 'program'}`}
      />

      <div className="px-4 space-y-2">
        {programs.length === 0 && !creating ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-14 h-14 rounded-full bg-app-card flex items-center justify-center mb-4">
              <Music2 size={24} className="text-app-muted" strokeWidth={1.5} />
            </div>
            <p className="text-white font-semibold">Inga program ännu</p>
            <p className="text-app-sub text-sm mt-1 max-w-[220px]">
              Skapa ett program och bygg upp dina trick i ordning
            </p>
          </div>
        ) : (
          programs.map((p) => {
            const bv = programBv(p);
            return (
              <button
                key={p.id}
                onClick={() => selectProgram(p.id)}
                className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-left active:scale-[0.98] transition-transform"
                style={{ background: '#1E1E1E' }}
              >
                {p.spotifyMeta?.thumbnailUrl ? (
                  <img
                    src={p.spotifyMeta.thumbnailUrl}
                    alt=""
                    className="shrink-0 w-10 h-10 rounded-xl object-cover"
                  />
                ) : (
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: '#262626' }}
                  >
                    <Music2 size={16} strokeWidth={1.8} style={{ color: '#C8F500' }} />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-[15px] truncate">{p.name || 'Namnge ditt program…'}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#555' }}>
                    {p.items.filter((it) => it.type === 'trick').length} element · BV {formatBv(bv)}
                  </p>
                </div>
                <ChevronRight size={15} strokeWidth={2} style={{ color: '#555' }} />
              </button>
            );
          })
        )}

        {/* Create form */}
        {creating && (
          <div className="flex gap-2">
            <input
              autoFocus
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCreate(); if (e.key === 'Escape') setCreating(false); }}
              placeholder="Namn på programmet…"
              className="flex-1 rounded-xl px-4 py-3 text-sm text-white outline-none placeholder:text-[#444]"
              style={{ background: '#1E1E1E' }}
            />
            <button
              onClick={() => setCreating(false)}
              className="w-12 flex items-center justify-center rounded-xl shrink-0"
              style={{ background: '#1E1E1E', color: '#555' }}
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>
        )}

        {/* Create button */}
        {!creating && (
          <button
            onClick={() => setCreating(true)}
            className="w-full flex items-center justify-center gap-2 h-12 rounded-2xl text-sm font-semibold mt-2"
            style={{ background: '#1E1E1E', color: '#C8F500' }}
          >
            <Plus size={16} strokeWidth={2.5} />
            Skapa nytt program
          </button>
        )}

        {creating && newName.trim() && (
          <button
            onClick={handleCreate}
            className="w-full h-12 rounded-2xl text-sm font-semibold"
            style={{ background: '#C8F500', color: '#141414' }}
          >
            Skapa
          </button>
        )}
      </div>
    </div>
  );
}
