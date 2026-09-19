import { useState, useEffect } from 'react';
import { toastStore } from '../lib/toast';

export function Toast() {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  useEffect(() => toastStore.subscribe(setToasts), []);

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed inset-x-0 z-[200] flex flex-col items-center gap-2 px-4"
      style={{ top: 'calc(env(safe-area-inset-top, 16px) + 12px)' }}
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="flex items-center gap-2.5 px-4 py-3 rounded-2xl text-sm font-medium shadow-lg"
          style={{ background: '#2A1A1A', color: '#F87171', border: '1px solid #3D1F1F', maxWidth: 360 }}
        >
          <span style={{ fontSize: 15 }}>⚠</span>
          {t.message}
        </div>
      ))}
    </div>
  );
}
