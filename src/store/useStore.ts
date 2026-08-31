import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CategoryId } from '../data/tricks';
import { supabase } from '../lib/supabase';

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

type Tab = 'utforska' | 'favoriter' | 'lärt-mig' | 'off-ice' | 'program';

type Store = {
  // Auth state
  userId: string | null;
  showAuthPrompt: boolean;
  loadUserData: (userId: string) => Promise<void>;
  clearUserData: () => void;
  clearAuthPrompt: () => void;

  // User data
  favorites: Set<string>;
  learned: Set<string>;
  favoritedExercises: Set<string>;
  programs: SkatingProgram[];

  // UI state
  activeTab: Tab;
  selectedTrickId: string | null;
  selectedProgramId: string | null;
  selectedOffIceId: string | null;
  activeCategory: CategoryId | null;
  openInEditMode: boolean;
  showTutorial: boolean;

  // Actions
  toggleFavorite: (id: string) => void;
  toggleLearned: (id: string) => void;
  toggleExerciseFavorite: (id: string) => void;
  setTab: (tab: Tab) => void;
  selectTrick: (id: string | null) => void;
  selectProgram: (id: string | null) => void;
  selectOffIce: (id: string | null) => void;
  setCategory: (cat: CategoryId | null) => void;
  createProgram: (name: string, initialTrickIds?: string[]) => string;
  deleteProgram: (id: string) => void;
  renameProgram: (id: string, name: string) => void;
  setSpotifyUrl: (id: string, url: string) => void;
  setSpotifyMeta: (id: string, meta: SpotifyMeta | null) => void;
  addElement: (programId: string, trickId: string) => void;
  addNote: (programId: string) => void;
  removeItem: (programId: string, itemId: string) => void;
  moveItem: (programId: string, itemId: string, dir: 'up' | 'down') => void;
  setNoteText: (programId: string, itemId: string, text: string) => void;
  clearOpenInEditMode: () => void;
  setShowTutorial: (v: boolean) => void;
};

// Debounce timer for note text — avoids a DB write on every keystroke
let noteTimer: ReturnType<typeof setTimeout> | null = null;

const pushItems = (programId: string, items: ProgramItem[], debounce = false) => {
  const run = () => supabase.from('programs').update({ items }).eq('id', programId).then();
  if (!debounce) { run(); return; }
  if (noteTimer) clearTimeout(noteTimer);
  noteTimer = setTimeout(run, 800);
};

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      userId: null,
      showAuthPrompt: false,
      favorites: new Set<string>(),
      learned: new Set<string>(),
      favoritedExercises: new Set<string>(),
      programs: [],
      activeTab: 'utforska',
      selectedTrickId: null,
      selectedProgramId: null,
      selectedOffIceId: null,
      activeCategory: null,
      openInEditMode: false,
      showTutorial: false,

      clearAuthPrompt: () => set({ showAuthPrompt: false }),

      clearUserData: () => set({
        userId: null,
        favorites: new Set(),
        learned: new Set(),
        favoritedExercises: new Set(),
        programs: [],
        selectedProgramId: null,
      }),

      loadUserData: async (userId) => {
        const [favRes, learnRes, exRes, progRes] = await Promise.all([
          supabase.from('favorited_tricks').select('trick_id').eq('user_id', userId),
          supabase.from('learned_tricks').select('trick_id').eq('user_id', userId),
          supabase.from('favorited_exercises').select('exercise_id').eq('user_id', userId),
          supabase.from('programs').select('*').eq('user_id', userId).order('created_at'),
        ]);
        set({
          userId,
          favorites: new Set(favRes.data?.map((r) => r.trick_id) ?? []),
          learned: new Set(learnRes.data?.map((r) => r.trick_id) ?? []),
          favoritedExercises: new Set(exRes.data?.map((r) => r.exercise_id) ?? []),
          programs: (progRes.data ?? []).map((p) => ({
            id: p.id,
            name: p.name,
            spotifyUrl: p.spotify_url ?? undefined,
            spotifyMeta: (p.spotify_meta as SpotifyMeta) ?? undefined,
            items: (p.items as ProgramItem[]) ?? [],
            createdAt: new Date(p.created_at).getTime(),
          })),
        });
      },

      toggleFavorite: (id) => {
        const { userId, favorites } = get();
        if (!userId) { set({ showAuthPrompt: true }); return; }
        const adding = !favorites.has(id);
        set((s) => { const n = new Set(s.favorites); adding ? n.add(id) : n.delete(id); return { favorites: n }; });
        if (adding) supabase.from('favorited_tricks').insert({ user_id: userId, trick_id: id }).then();
        else supabase.from('favorited_tricks').delete().eq('user_id', userId).eq('trick_id', id).then();
      },

      toggleLearned: (id) => {
        const { userId, learned } = get();
        if (!userId) { set({ showAuthPrompt: true }); return; }
        const adding = !learned.has(id);
        set((s) => { const n = new Set(s.learned); adding ? n.add(id) : n.delete(id); return { learned: n }; });
        if (adding) supabase.from('learned_tricks').insert({ user_id: userId, trick_id: id }).then();
        else supabase.from('learned_tricks').delete().eq('user_id', userId).eq('trick_id', id).then();
      },

      toggleExerciseFavorite: (id) => {
        const { userId, favoritedExercises } = get();
        if (!userId) { set({ showAuthPrompt: true }); return; }
        const adding = !favoritedExercises.has(id);
        set((s) => { const n = new Set(s.favoritedExercises); adding ? n.add(id) : n.delete(id); return { favoritedExercises: n }; });
        if (adding) supabase.from('favorited_exercises').insert({ user_id: userId, exercise_id: id }).then();
        else supabase.from('favorited_exercises').delete().eq('user_id', userId).eq('exercise_id', id).then();
      },

      setTab: (tab) => set({ activeTab: tab, selectedTrickId: null, selectedProgramId: null, activeCategory: null }),
      selectTrick: (id) => set({ selectedTrickId: id }),
      selectProgram: (id) => set({ selectedProgramId: id }),
      selectOffIce: (id) => set({ selectedOffIceId: id }),
      setCategory: (cat) => set({ activeCategory: cat, selectedTrickId: null }),
      clearOpenInEditMode: () => set({ openInEditMode: false }),
      setShowTutorial: (v) => set({ showTutorial: v }),

      createProgram: (name, initialTrickIds?) => {
        const { userId } = get();
        if (!userId) { set({ showAuthPrompt: true }); return ''; }
        const id = uid();
        const items: ProgramItem[] = (initialTrickIds ?? []).map((trickId) => ({ id: uid(), type: 'trick' as const, trickId }));
        set((s) => ({ programs: [...s.programs, { id, name, items, createdAt: Date.now() }], openInEditMode: true }));
        supabase.from('programs').insert({ id, user_id: userId, name, items }).then();
        return id;
      },

      deleteProgram: (id) => {
        const { userId } = get();
        set((s) => ({ programs: s.programs.filter((p) => p.id !== id), selectedProgramId: null }));
        if (userId) supabase.from('programs').delete().eq('id', id).then();
      },

      renameProgram: (id, name) => {
        const { userId } = get();
        set((s) => ({ programs: s.programs.map((p) => (p.id === id ? { ...p, name } : p)) }));
        if (userId) supabase.from('programs').update({ name }).eq('id', id).then();
      },

      setSpotifyUrl: (id, url) => {
        const { userId } = get();
        set((s) => ({ programs: s.programs.map((p) => (p.id === id ? { ...p, spotifyUrl: url } : p)) }));
        if (userId) supabase.from('programs').update({ spotify_url: url }).eq('id', id).then();
      },

      setSpotifyMeta: (id, meta) => {
        const { userId } = get();
        set((s) => ({ programs: s.programs.map((p) => (p.id === id ? { ...p, spotifyMeta: meta ?? undefined } : p)) }));
        if (userId) supabase.from('programs').update({ spotify_meta: meta }).eq('id', id).then();
      },

      addElement: (programId, trickId) => {
        const { userId } = get();
        set((s) => ({ programs: s.programs.map((p) => p.id === programId ? { ...p, items: [...p.items, { id: uid(), type: 'trick' as const, trickId }] } : p) }));
        if (userId) pushItems(programId, get().programs.find((p) => p.id === programId)?.items ?? []);
      },

      addNote: (programId) => {
        const { userId } = get();
        set((s) => ({ programs: s.programs.map((p) => p.id === programId ? { ...p, items: [...p.items, { id: uid(), type: 'note' as const, text: '' }] } : p) }));
        if (userId) pushItems(programId, get().programs.find((p) => p.id === programId)?.items ?? []);
      },

      removeItem: (programId, itemId) => {
        const { userId } = get();
        set((s) => ({ programs: s.programs.map((p) => p.id === programId ? { ...p, items: p.items.filter((it) => it.id !== itemId) } : p) }));
        if (userId) pushItems(programId, get().programs.find((p) => p.id === programId)?.items ?? []);
      },

      moveItem: (programId, itemId, dir) => {
        const { userId } = get();
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
        }));
        if (userId) pushItems(programId, get().programs.find((p) => p.id === programId)?.items ?? []);
      },

      setNoteText: (programId, itemId, text) => {
        const { userId } = get();
        set((s) => ({
          programs: s.programs.map((p) =>
            p.id === programId
              ? { ...p, items: p.items.map((it) => it.id === itemId && it.type === 'note' ? { ...it, text } : it) }
              : p
          ),
        }));
        if (userId) pushItems(programId, get().programs.find((p) => p.id === programId)?.items ?? [], true);
      },
    }),
    {
      name: 'figureskate-storage',
      version: 2,
      partialize: (s) => ({ activeTab: s.activeTab }),
    }
  )
);
