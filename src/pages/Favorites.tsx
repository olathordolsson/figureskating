import { Heart } from 'lucide-react';
import { TRICKS } from '../data/tricks';
import { useStore } from '../store/useStore';
import { TrickCard } from '../components/TrickCard';
import { HeroHeader } from '../components/HeroHeader';
import heroImage from '../assets/heart.jpg';

export function Favorites() {
  const { favorites } = useStore();
  const tricks = TRICKS.filter((t) => favorites.has(t.id));

  return (
    <div className="pb-28">
      <HeroHeader
        image={heroImage}
        title="Favoriter"
        subtitle="Dina sparade trick"
      />

      <div className="px-4 mt-5 space-y-2">
        {tricks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-full bg-app-card flex items-center justify-center mb-4">
              <Heart size={24} className="text-app-muted" strokeWidth={1.5} />
            </div>
            <p className="text-white font-semibold">Inga favoriter ännu</p>
            <p className="text-app-sub text-sm mt-1 max-w-[220px]">
              Tryck på hjärtat på ett trick för att spara det här
            </p>
          </div>
        ) : (
          tricks.map((trick) => <TrickCard key={trick.id} trick={trick} />)
        )}
      </div>
    </div>
  );
}
