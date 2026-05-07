import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CategoryId } from '../data/tricks';

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

export type ProgramItem =
  | { id: string; type: 'trick'; trickId: string }
  | { id: string; type: 'note'; text: string };

export type SpotifyMeta = {
  title: string;
  artist: string;
  duration: string;
  thumbnailUrl: string;
};

export type SkatingProgram = {
  id: string;
  name: string;
  spotifyUrl?: string;
  spotifyMeta?: SpotifyMeta;
  items: ProgramItem[];
  createdAt: number;
};

type Tab = 'utforska' | 'favoriter' | 'lärt-mig' | 'program';

type Store = {
  favorites: Set<string>;
  learned: Set<string>;
  programs: SkatingProgram[];
  activeTab: Tab;
  selectedTrickId: string | null;
  selectedProgramId: string | null;
  activeCategory: CategoryId | null;

  toggleFavorite: (id: string) => void;
  toggleLearned: (id: string) => void;
  setTab: (tab: Tab) => void;
  selectTrick: (id: string | null) => void;
  selectProgram: (id: string | null) => void;
  setCategory: (cat: CategoryId | null) => void;

  createProgram: (name: string) => string;
  deleteProgram: (id: string) => void;
  renameProgram: (id: string, name: string) => void;
  setSpotifyUrl: (id: string, url: string) => void;
  setSpotifyMeta: (id: string, meta: SpotifyMeta | null) => void;
  addElement: (programId: string, trickId: string) => void;
  addNote: (programId: string) => void;
  removeItem: (programId: string, itemId: string) => void;
  moveItem: (programId: string, itemId: string, dir: 'up' | 'down') => void;
  setNoteText: (programId: string, itemId: string, text: string) => void;
  openInEditMode: boolean;
  clearOpenInEditMode: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      favorites: new Set(),
      learned: new Set(),
      programs: [],
      activeTab: 'utforska',
      selectedTrickId: null,
      selectedProgramId: null,
      activeCategory: null,
      openInEditMode: false,

      toggleFavorite: (id) =>
        set((s) => {
          const next = new Set(s.favorites);
          next.has(id) ? next.delete(id) : next.add(id);
          return { favorites: next };
        }),

      toggleLearned: (id) =>
        set((s) => {
          const next = new Set(s.learned);
          next.has(id) ? next.delete(id) : next.add(id);
          return { learned: next };
        }),

      setTab: (tab) => set({ activeTab: tab, selectedTrickId: null, selectedProgramId: null, activeCategory: null }),
      selectTrick: (id) => set({ selectedTrickId: id }),
      selectProgram: (id) => set({ selectedProgramId: id }),
      setCategory: (cat) => set({ activeCategory: cat, selectedTrickId: null }),

      createProgram: (name) => {
        const id = uid();
        set((s) => ({
          programs: [...s.programs, { id, name, items: [], createdAt: Date.now() }],
          openInEditMode: true,
        }));
        return id;
      },

      clearOpenInEditMode: () => set({ openInEditMode: false }),

      deleteProgram: (id) =>
        set((s) => ({ programs: s.programs.filter((p) => p.id !== id), selectedProgramId: null })),

      renameProgram: (id, name) =>
        set((s) => ({ programs: s.programs.map((p) => (p.id === id ? { ...p, name } : p)) })),

      setSpotifyUrl: (id, url) =>
        set((s) => ({ programs: s.programs.map((p) => (p.id === id ? { ...p, spotifyUrl: url } : p)) })),

      setSpotifyMeta: (id, meta) =>
        set((s) => ({
          programs: s.programs.map((p) =>
            p.id === id ? { ...p, spotifyMeta: meta ?? undefined } : p
          ),
        })),

      addElement: (programId, trickId) =>
        set((s) => ({
          programs: s.programs.map((p) =>
            p.id === programId
              ? { ...p, items: [...p.items, { id: uid(), type: 'trick', trickId }] }
              : p
          ),
        })),

      addNote: (programId) =>
        set((s) => ({
          programs: s.programs.map((p) =>
            p.id === programId
              ? { ...p, items: [...p.items, { id: uid(), type: 'note', text: '' }] }
              : p
          ),
        })),

      removeItem: (programId, itemId) =>
        set((s) => ({
          programs: s.programs.map((p) =>
            p.id === programId ? { ...p, items: p.items.filter((it) => it.id !== itemId) } : p
          ),
        })),

      moveItem: (programId, itemId, dir) =>
        set((s) => ({
          programs: s.programs.map((p) => {
            if (p.id !== programId) return p;
            const items = [...p.items];
            const i = items.findIndex((it) => it.id === itemId);
            if (i < 0) return p;
            const j = dir === 'up' ? i - 1 : i + 1;
            if (j < 0 || j >= items.length) return p;
            [items[i], items[j]] = [items[j], items[i]];
            return { ...p, items };
          }),
        })),

      setNoteText: (programId, itemId, text) =>
        set((s) => ({
          programs: s.programs.map((p) =>
            p.id === programId
              ? {
                  ...p,
                  items: p.items.map((it) =>
                    it.id === itemId && it.type === 'note' ? { ...it, text } : it
                  ),
                }
              : p
          ),
        })),
    }),
    {
      name: 'figureskate-storage',
      partialize: (s) => ({
        favorites: [...s.favorites],
        learned: [...s.learned],
        programs: s.programs,
      }),
      merge: (persisted: unknown, current) => {
        const p = persisted as {
          favorites?: string[];
          learned?: string[];
          programs?: Array<{
            id: string; name: string; spotifyUrl?: string; createdAt: number;
            items?: ProgramItem[];
            // legacy format
            elements?: Array<{ id: string; trickId: string; noteAfter?: string }>;
          }>;
        };

        const programs: SkatingProgram[] = (p.programs ?? []).map((prog) => {
          if (prog.items) return prog as SkatingProgram;
          // migrate legacy elements → items
          const items: ProgramItem[] = [];
          for (const el of prog.elements ?? []) {
            items.push({ id: el.id, type: 'trick', trickId: el.trickId });
            if (el.noteAfter?.trim()) {
              items.push({ id: uid(), type: 'note', text: el.noteAfter });
            }
          }
          return { id: prog.id, name: prog.name, spotifyUrl: prog.spotifyUrl, createdAt: prog.createdAt, items };
        });

        return {
          ...current,
          favorites: new Set(p.favorites ?? []),
          learned: new Set(p.learned ?? []),
          programs,
        };
      },
    }
  )
);
