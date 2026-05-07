import { useEffect, useState } from 'react';
import { useStore } from './store/useStore';
import { BottomNav } from './components/BottomNav';
import { TrickDetail } from './components/TrickDetail';
import { InstallPrompt } from './components/InstallPrompt';
import { Browse } from './pages/Browse';
import { Favorites } from './pages/Favorites';
import { Learned } from './pages/Learned';

export default function App() {
  const { activeTab, selectedTrickId } = useStore();
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

  return (
    <>
      {/* Status bar gradient — protects Dynamic Island area on scroll */}
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
        {activeTab === 'utforska' && <Browse />}
        {activeTab === 'favoriter' && <Favorites />}
        {activeTab === 'lärt-mig' && <Learned />}
      </main>

      <BottomNav />
      <InstallPrompt />

      {selectedTrickId && <TrickDetail />}
    </>
  );
}
