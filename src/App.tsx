import { useStore } from './store/useStore';
import { BottomNav } from './components/BottomNav';
import { TrickDetail } from './components/TrickDetail';
import { Browse } from './pages/Browse';
import { Favorites } from './pages/Favorites';
import { Learned } from './pages/Learned';

export default function App() {
  const { activeTab, selectedTrickId } = useStore();

  return (
    <>
      <main>
        {activeTab === 'utforska' && <Browse />}
        {activeTab === 'favoriter' && <Favorites />}
        {activeTab === 'lärt-mig' && <Learned />}
      </main>

      <BottomNav />

      {selectedTrickId && <TrickDetail />}
    </>
  );
}
