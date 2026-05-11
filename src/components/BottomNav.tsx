import { useState, useEffect } from 'react';
import { StretchHorizontal, Pin, CheckCircle, Music2, SportShoe } from 'lucide-react';
import { useStore } from '../store/useStore';

const tabs = [
  { id: 'favoriter' as const, label: 'Tränar på',    Icon: Pin },
  { id: 'lärt-mig' as const, label: 'Lärt mig',     Icon: CheckCircle },
  { id: 'utforska'  as const, label: 'Tricklista',   Icon: StretchHorizontal },
  { id: 'program'   as const, label: 'Mina program', Icon: Music2 },
  { id: 'off-ice'   as const, label: 'Off ice',      Icon: SportShoe },
];

export function BottomNav() {
  const { activeTab, setTab } = useStore();
  const [keyboardUp, setKeyboardUp] = useState(false);

  useEffect(() => {
    const onFocusIn = (e: FocusEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') setKeyboardUp(true);
    };
    const onFocusOut = () => {
      setTimeout(() => {
        const tag = document.activeElement?.tagName ?? '';
        if (tag !== 'INPUT' && tag !== 'TEXTAREA') setKeyboardUp(false);
      }, 100);
    };
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);
    return () => {
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  return (
    <nav
      className="fixed bottom-0 left-1/2 w-full max-w-[480px] border-t border-[#2A2A2A] pb-safe z-40"
      style={{
        background: '#1E1E1E',
        transform: `translateX(-50%) translateY(${keyboardUp ? '100%' : '0'})`,
        transition: 'transform 0.2s ease',
      }}
    >
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
