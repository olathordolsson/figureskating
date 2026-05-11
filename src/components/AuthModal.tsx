import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Tab = 'login' | 'register';

export function AuthModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 350);
  };

  const handleSubmit = async () => {
    setError('');
    setLoading(true);
    try {
      if (tab === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          if (error.message.toLowerCase().includes('invalid') || error.message.toLowerCase().includes('credentials')) {
            throw new Error('Fel e-post eller lösenord. Har du bekräftat din e-post?');
          }
          throw error;
        }
        handleClose();
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        setRegistered(true);
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Något gick fel');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex flex-col justify-end">
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.6)', opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
        onClick={handleClose}
      />
      <div
        className="relative flex flex-col rounded-t-3xl overflow-hidden"
        style={{
          background: '#1A1A1A',
          maxHeight: '90vh',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* Handle + close */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
          <div className="w-9" />
          <div className="w-10 h-1 rounded-full" style={{ background: '#333' }} />
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-full"
            style={{ background: '#2A2A2A' }}
          >
            <X size={17} strokeWidth={2} style={{ color: '#888' }} />
          </button>
        </div>

        <div className="px-5 pb-safe overflow-y-auto" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 16px) + 24px)' }}>

          {registered ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl" style={{ background: '#1E1E1E' }}>
                ✉️
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Kolla din e-post</h2>
              <p className="text-sm" style={{ color: '#888' }}>
                Vi har skickat en bekräftelselänk till <span style={{ color: '#fff' }}>{email}</span>.{'\n'}
                Klicka på länken och logga sedan in.
              </p>
              <button
                onClick={() => { setRegistered(false); setTab('login'); }}
                className="mt-6 text-sm font-semibold"
                style={{ color: '#F05A28' }}
              >
                Gå till inloggning
              </button>
            </div>
          ) : (<>

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl mb-6" style={{ background: '#111' }}>
            {(['login', 'register'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setError(''); }}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  background: tab === t ? '#2A2A2A' : 'transparent',
                  color: tab === t ? '#fff' : '#666',
                }}
              >
                {t === 'login' ? 'Logga in' : 'Skapa konto'}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">
            {tab === 'login' ? 'Välkommen tillbaka' : 'Skapa ditt konto'}
          </h2>

          {/* Fields */}
          <div className="space-y-3 mb-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest mb-1.5 block" style={{ color: '#555' }}>
                E-post
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="din@epost.se"
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
                style={{ background: '#111', border: '1px solid #2A2A2A' }}
                autoCapitalize="none"
                autoCorrect="off"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest mb-1.5 block" style={{ color: '#555' }}>
                Lösenord
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
                style={{ background: '#111', border: '1px solid #2A2A2A' }}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm mb-4 px-1" style={{ color: '#F87171' }}>{error}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading || !email || !password}
            className="w-full rounded-2xl text-base font-semibold py-3.5 transition-opacity"
            style={{
              background: '#F05A28',
              color: 'white',
              opacity: loading || !email || !password ? 0.5 : 1,
            }}
          >
            {loading ? 'Laddar…' : tab === 'login' ? 'Logga in' : 'Skapa konto'}
          </button>

          </>)}
        </div>
      </div>
    </div>
  );
}
