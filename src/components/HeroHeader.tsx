import { Info, UserLock, UserRound } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useAuth } from '../hooks/useAuth';

interface Props {
  image: string;
  title: string;
  subtitle: string;
  onAccount?: () => void;
}

export function HeroHeader({ image, title, subtitle, onAccount }: Props) {
  const setShowTutorial = useStore((s) => s.setShowTutorial);
  const { user, emailVerified } = useAuth();

  return (
    <div
      className="relative flex flex-col justify-end px-5 pb-6"
      style={{ height: 'calc(50vh + env(safe-area-inset-top, 0px))' }}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(20,20,20,0.1) 0%, rgba(20,20,20,0.5) 50%, #141414 100%)',
        }}
      />

      {/* Account button — top right, where tutorial used to live */}
      {onAccount && (
        <button
          onClick={onAccount}
          className="absolute right-4 flex items-center justify-center w-11 h-11"
          style={{ top: 'calc(env(safe-area-inset-top, 44px) + 4px)', zIndex: 3 }}
          aria-label="Mitt konto"
        >
          <div className="relative">
            {user
              ? <UserRound size={22} strokeWidth={1.6} style={{ color: 'rgba(255,255,255,0.45)' }} />
              : <UserLock  size={22} strokeWidth={1.6} style={{ color: 'rgba(255,255,255,0.45)' }} />
            }
            {user && emailVerified && (
              <span
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                style={{ background: '#4ADE80', border: '1.5px solid rgba(0,0,0,0.4)' }}
              />
            )}
          </div>
        </button>
      )}

      {/* Title row + info button */}
      <div className="relative" style={{ zIndex: 2 }}>
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-4xl font-bold text-white tracking-tight">{title}</h1>
          <button
            onClick={() => setShowTutorial(true)}
            className="flex items-end justify-center w-11 pb-0"
            aria-label="Visa guide"
          >
            <Info size={24} strokeWidth={1.6} style={{ color: 'rgba(255,255,255,0.4)' }} />
          </button>
        </div>
        <p className="text-sm mt-1" style={{ color: '#aaa' }}>{subtitle}</p>
      </div>
    </div>
  );
}
