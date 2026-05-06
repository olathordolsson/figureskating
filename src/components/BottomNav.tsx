import { LayoutGrid, Heart, CheckCircle } from 'lucide-react';
import { useStore } from '../store/useStore';

const tabs = [
  { id: 'utforska'  as const, label: 'Utforska',  Icon: LayoutGrid },
  { id: 'favoriter' as const, label: 'Favoriter',  Icon: Heart },
  { id: 'lärt-mig' as const, label: 'Lärt mig',   Icon: CheckCircle },
];

export function BottomNav() {
  const { activeTab, setTab } = useStore();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] border-t border-[#2A2A2A] pb-safe z-40" style={{ background: '#1E1E1E' }}>
      <div className="flex">
        {tabs.map(({ id, label, Icon }) => {
          const active = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setTab(id)}
              className="flex-1 flex flex-col items-center gap-1 py-3 transition-colors"
            >
              <Icon
                size={22}
                strokeWidth={active ? 2.2 : 1.6}
                className={active ? 'text-brand-orange' : 'text-app-muted'}
              />
              <span className={`text-[11px] font-medium ${active ? 'text-brand-orange' : 'text-app-muted'}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
