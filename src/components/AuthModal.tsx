import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Tab = 'login' | 'register';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
    <path d="M14.045 9.469c-.02-2.01 1.64-2.98 1.714-3.028-1.032-1.357-2.49-1.473-2.96-1.458-1.242-.124-2.442.742-3.075.742-.633 0-1.591-.729-2.622-.708-1.334.02-2.572.788-3.259 1.99-1.4 2.432-.357 6.013 1.01 7.979.668.964 1.455 2.042 2.49 2.003 1.003-.04 1.38-.645 2.594-.645 1.213 0 1.557.645 2.614.624 1.08-.02 1.757-.977 2.416-1.946.764-1.112 1.077-2.193 1.094-2.249-.023-.01-2.095-.807-2.116-3.304zM11.98 3.37c.554-.672.927-1.607.825-2.537-.796.033-1.76.531-2.329 1.203-.51.59-.958 1.536-.838 2.44.891.07 1.795-.454 2.342-1.106z"/>
  </svg>
);

export function AuthModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<string | null>(null);
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

  const handleOAuth = async (provider: 'google' | 'apple') => {
    setError('');
    setLoading(provider);
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.origin },
    });
  };

  const handleSubmit = async () => {
    setError('');
    setLoading('email');
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
        if (error && !error.message.toLowerCase().includes('sending')) throw error;
        setRegistered(true);
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Något gick fel');
    } finally {
      setLoading(null);
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

        <div className="px-5 overflow-y-auto" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 16px) + 24px)' }}>

          {registered ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl" style={{ background: '#1E1E1E' }}>
                ✉️
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Kolla din e-post</h2>
              <p className="text-sm" style={{ color: '#888' }}>
                Vi har skickat en bekräftelselänk till <span style={{ color: '#fff' }}>{email}</span>.
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

          {/* Social buttons */}
          <div className="space-y-3 mb-5">
            <button
              onClick={() => handleOAuth('google')}
              disabled={!!loading}
              className="w-full flex items-center justify-center gap-3 rounded-2xl py-3.5 text-sm font-semibold transition-opacity"
              style={{ background: '#fff', color: '#111', opacity: loading ? 0.6 : 1 }}
            >
              <GoogleIcon />
              {loading === 'google' ? 'Öppnar…' : 'Fortsätt med Google'}
            </button>
            <button
              onClick={() => handleOAuth('apple')}
              disabled={!!loading}
              className="w-full flex items-center justify-center gap-3 rounded-2xl py-3.5 text-sm font-semibold transition-opacity"
              style={{ background: '#111', color: '#fff', border: '1px solid #2A2A2A', opacity: loading ? 0.6 : 1 }}
            >
              <AppleIcon />
              {loading === 'apple' ? 'Öppnar…' : 'Fortsätt med Apple'}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px" style={{ background: '#2A2A2A' }} />
            <span className="text-xs font-medium" style={{ color: '#444' }}>eller</span>
            <div className="flex-1 h-px" style={{ background: '#2A2A2A' }} />
          </div>

          {/* Email + password */}
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
                onKeyDown={(e) => { if (e.key === 'Enter' && email && password) handleSubmit(); }}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm mb-4 px-1" style={{ color: '#F87171' }}>{error}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={!!loading || !email || !password}
            className="w-full rounded-2xl text-base font-semibold py-3.5 transition-opacity"
            style={{
              background: '#F05A28',
              color: 'white',
              opacity: loading || !email || !password ? 0.5 : 1,
            }}
          >
            {loading === 'email' ? 'Laddar…' : tab === 'login' ? 'Logga in' : 'Skapa konto'}
          </button>

          </>)}
        </div>
      </div>
    </div>
  );
}
