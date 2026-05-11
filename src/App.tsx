import { useEffect, useState } from 'react';
import { useStore } from './store/useStore';
import { useAuth } from './hooks/useAuth';
import { BottomNav } from './components/BottomNav';
import { TrickDetail } from './components/TrickDetail';
import { ExerciseDetail } from './components/ExerciseDetail';
import { InstallPrompt } from './components/InstallPrompt';
import { Tutorial } from './components/Tutorial';
import { AuthModal } from './components/AuthModal';
import { AccountSheet } from './components/AccountSheet';
import { Browse } from './pages/Browse';
import { Favorites } from './pages/Favorites';
import { Learned } from './pages/Learned';
import { OffIce } from './pages/OffIce';
import { Programs } from './pages/Programs';
import { ProgramDetail } from './pages/ProgramDetail';

export default function App() {
  const { activeTab, selectedTrickId, selectedProgramId, selectedOffIceId, programs, showTutorial, setShowTutorial } = useStore();
  const { user, emailVerified } = useAuth();
  const [showAccount, setShowAccount] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const threshold = window.innerHeight * 0.12;
    const onScroll = () => setScrollOpacity(Math.min(1, window.scrollY / threshold));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollOpacity(0);
  }, [activeTab]);

  const onAccount = () => setShowAccount(true);

  return (
    <>
      {/* Status bar gradient */}
      <div
        className="fixed inset-x-0 top-0 pointer-events-none"
        style={{
          zIndex: 30,
          opacity: scrollOpacity,
          height: 'calc(env(safe-area-inset-top, 44px) + 12px)',
          background: 'linear-gradient(to bottom, #141414 40%, transparent)',
        }}
      />

      <main>
        {activeTab === 'utforska'  && <Browse onAccount={onAccount} />}
        {activeTab === 'favoriter' && <Favorites onAccount={onAccount} />}
        {activeTab === 'lärt-mig' && <Learned onAccount={onAccount} />}
        {activeTab === 'off-ice'   && <OffIce onAccount={onAccount} />}
        {activeTab === 'program'   && (
          selectedProgramId && programs.some((p) => p.id === selectedProgramId)
            ? <ProgramDetail />
            : <Programs onAccount={onAccount} />
        )}
      </main>

      <BottomNav />
      <InstallPrompt />

      {selectedTrickId  && <TrickDetail />}
      {selectedOffIceId && <ExerciseDetail />}
      {showTutorial     && <Tutorial onClose={() => setShowTutorial(false)} />}

      {showAccount && (
        user
          ? <AccountSheet user={user} emailVerified={emailVerified} onClose={() => setShowAccount(false)} />
          : <AuthModal onClose={() => setShowAccount(false)} />
      )}
    </>
  );
}
