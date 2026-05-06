import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CategoryId } from '../data/tricks';

type Tab = 'utforska' | 'favoriter' | 'lärt-mig';

type Store = {
  favorites: Set<string>;
  learned: Set<string>;
  activeTab: Tab;
  selectedTrickId: string | null;
  activeCategory: CategoryId | null;

  toggleFavorite: (id: string) => void;
  toggleLearned: (id: string) => void;
  setTab: (tab: Tab) => void;
  selectTrick: (id: string | null) => void;
  setCategory: (cat: CategoryId | null) => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      favorites: new Set(),
      learned: new Set(),
      activeTab: 'utforska',
      selectedTrickId: null,
      activeCategory: null,

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

      setTab: (tab) => set({ activeTab: tab, selectedTrickId: null, activeCategory: null }),
      selectTrick: (id) => set({ selectedTrickId: id }),
      setCategory: (cat) => set({ activeCategory: cat, selectedTrickId: null }),
    }),
    {
      name: 'figureskate-storage',
      partialize: (s) => ({
        favorites: [...s.favorites],
        learned: [...s.learned],
      }),
      merge: (persisted: unknown, current) => {
        const p = persisted as { favorites?: string[]; learned?: string[] };
        return {
          ...current,
          favorites: new Set(p.favorites ?? []),
          learned: new Set(p.learned ?? []),
        };
      },
    }
  )
);
